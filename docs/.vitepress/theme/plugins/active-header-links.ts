// docs/.vitepress/theme/active-header-links.ts
export default function initActiveHeaderLinks(
  options: {
    router?: any;                // <- 添加 router 可选项
    selector?: string;
    activeClass?: string;
  } = {}
) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return

  const { router, selector = 'h2[id], h3[id]', activeClass = 'active' } = options

  let observer: IntersectionObserver | null = null
  let clickHappened = false
  const CLICK_IGNORE_MS = 700
  const rootMargin = '0px 0px -65% 0px'

  function resetObserver() {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    const headings = Array.from(document.querySelectorAll(selector))
    if (!headings.length) return
    observer = new IntersectionObserver(onIntersections, {
      root: null,
      rootMargin,
      threshold: [0, 0.25, 0.5, 0.75, 1]
    })
    headings.forEach(h => observer!.observe(h))
  }

  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement
    const a = target && (target.closest ? target.closest('a[href^="#"]') : null)
    if (a) {
      clickHappened = true
      setTimeout(() => (clickHappened = false), CLICK_IGNORE_MS)
    }
  }, { capture: true, passive: true })

  function onIntersections(entries: IntersectionObserverEntry[]) {
    const visible = entries.filter(e => e.isIntersecting)
    if (visible.length === 0) return
    visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
    const top = visible[0].target as HTMLElement
    if (!top || !top.id) return
    const id = top.id
    if (clickHappened) return
    if (location.hash !== `#${id}`) history.replaceState(null, '', `#${id}`)
    updateActiveLinks(id)
  }

  function updateActiveLinks(id: string) {
    // remove previous
    document.querySelectorAll(`.${activeClass}`).forEach(el => el.classList.remove(activeClass))
    const matched = Array.from(document.querySelectorAll(`a[href$="#${id}"], a[href="#${id}"]`))
    matched.forEach(a => {
      a.classList.add(activeClass)
      const parent = a.closest('li, .sidebar-item, .nav-item')
      if (parent) parent.classList.add(activeClass)
    })
  }

  function setupRouteWatcher() {
    if (router && typeof router.onAfterRouteChanged === 'function') {
      router.onAfterRouteChanged = () => { setTimeout(resetObserver, 120) }
    } else {
      window.addEventListener('popstate', () => setTimeout(resetObserver, 120))
    }
  }

  // init
  resetObserver()
  setupRouteWatcher()

  return {
    destroy() {
      if (observer) observer.disconnect()
      // 其它清理（视实现而定）
    }
  }
}
