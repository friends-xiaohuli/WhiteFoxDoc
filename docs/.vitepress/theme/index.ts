import DefaultTheme from 'vitepress/theme'
import './custom.css'
import { inBrowser, useRoute } from 'vitepress'

/* 彩花 */
import Confetti from "./components/Confetti.vue";

/* 样式 */
import "./theme-chalk/tk-doc-h1-gradient.css";
import "./theme-chalk/tk-nav-blur.css";

//git页面更新
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

//页脚等
import { h, onMounted } from 'vue'
import { Footer } from '@theojs/lumen'
import { Footer_Data } from './data/footerData'

/* 容器样式（警告、提示块等） */
//https://lumen.theojs.cn/guide/theme
import '@theojs/lumen/doc-blocks'
/* 图标样式 */
import '@theojs/lumen/icon'

//阅读增强（右上角）
import {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

//首页透明动画背景
import Hero from './Layout.vue';

//Vercount 浏览量统计
import useVisitData from './hooks/useVisitData'

//标题下添加时间
import update from "./components/update.vue"

//字数及阅读时间 
import ArticleMetadata from "./components/ArticleMetadata.vue"

//链接卡片组件 
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'

// 进度条
import { NProgress } from 'nprogress-v2/dist/index.js' // 进度条组件
import 'nprogress-v2/dist/index.css' // 进度条样式

//锚点随滚动更新
// import initActiveHeaderLinks from './plugins/active-header-links.ts'

//图片预览/放大
import imageViewer from 'vitepress-plugin-image-viewer'
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue'


export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-before': () => h(Hero),
      // 页脚
      'layout-bottom': () => h(Footer, { Footer_Data }),
      // 为较宽的屏幕的导航栏添加阅读增强菜单
      // 'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      'nav-bar-content-after': () => h('div', { style: { marginLeft: '5px' } }, [h(NolebaseEnhancedReadabilitiesMenu)]),//位移控件居中
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),

    })
  },
  enhanceApp({ app, router, siteData, }) {
    app.component("Confetti", Confetti); //开屏碎花
    app.use(NolebaseGitChangelogPlugin); //页面更新历史
    if (inBrowser) {

      //切换路由进度条 
      NProgress.configure({ showSpinner: false })
      router.onBeforeRouteChange = () => {
        NProgress.start() // 开始进度条
      }
      router.onAfterRouteChanged = () => {
         NProgress.done() // 停止进度条
      }
      
      //Vercount 浏览量统计
      // 网站访问量统计，路由加载完成，在加载页面组件后（在更新页面组件之前）调用。
      router.onAfterPageLoad = (to: string) => {
        useVisitData()
      }
      
    }
    app.component('update', update)//标题下添加时间
    app.component('ArticleMetadata', ArticleMetadata)//字数及阅读时间 
    //链接卡片组件 下面4个 https://lumen.theojs.cn/guide/linkcard
    app.component('Pill', Pill)
    app.component('Links', Links)
    app.component('Card', Card)
    app.component('BoxCube', BoxCube)
    // //锚点随滚动更新
    // if (typeof window !== 'undefined') {
    //   setTimeout(() => {
    //     initActiveHeaderLinks({ router, selector: 'h2[id], h3[id]', activeClass: 'active' })
    //   }, 80)
    // }
    app.component('vImageViewer', vImageViewer)
  },

  
  setup() {
    //live2d看板娘
    onMounted(async () => {
      // 只在客户端执行
      const { loadOml2d } = await import('oh-my-live2d')
      loadOml2d({
        models: [
          {
            path: 'https://model.hacxy.cn/HK416-2-normal/model.json',
            position: [0, 60],
            scale: 0.08,
            stageStyle: { height: 450 }
          }
        ],
        menus: { disable: true },
        statusBar: { disable: true },
        dockedPosition:"right"
      })
    })
    const route = useRoute()
    imageViewer(route)
  },

  // ...
};

if (typeof window !== 'undefined') {
  // 禁用右键
  document.addEventListener('contextmenu', e => e.preventDefault())

  // 禁用 F12、Ctrl+Shift+I/C、Ctrl+U
  document.addEventListener('keydown', e => {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'u')
    ) {
      e.preventDefault()
    }
  })

  // 禁止选中和复制
  document.addEventListener('selectstart', e => e.preventDefault())
  document.addEventListener('copy', e => e.preventDefault())

  // 全局 CSS 防止选中和拖拽
  const style = document.createElement('style')
  style.textContent = `
    /* 禁止选中、复制 */
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }

    /* 禁止拖拽 */
    img, a {
      -webkit-user-drag: none; /* Chrome / Safari / Edge (Blink) */
      -khtml-user-drag: none;  /* 旧版 Konqueror */
      pointer-events: auto !important; /* 保证链接可点击 */
    }
  `
  document.head.appendChild(style)
}

