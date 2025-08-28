import DefaultTheme from 'vitepress/theme'

/* 彩花 */
import Confetti from "./components/Confetti.vue";

/* 样式 */
import "./theme-chalk/tk-doc-h1-gradient.css";
import "./theme-chalk/tk-nav-blur.css";

//git页面更新
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client';
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

//页脚等
import { h } from 'vue' 
import { Footer } from '@theojs/lumen'
import { Footer_Data } from './data/footerData'

/* 容器样式（警告、提示块等） */
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

//不蒜子，浏览量统计插件
import { inBrowser } from 'vitepress'
import busuanzi from 'busuanzi.pure.js'

//标题下添加时间
import update from "./components/update.vue"

//字数及阅读时间 
import ArticleMetadata from "./components/ArticleMetadata.vue"

//链接卡片组件 
import { BoxCube, Card, Links, Pill } from '@theojs/lumen'

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
      router.onAfterRouteChanged = () => {
        busuanzi.fetch()
      }
    };
    app.component('update' , update)//标题下添加时间
    app.component('ArticleMetadata' , ArticleMetadata)//字数及阅读时间 
    //链接卡片组件 下面4个 https://lumen.theojs.cn/guide/linkcard
    app.component('Pill', Pill) 
    app.component('Links', Links) 
    app.component('Card', Card) 
    app.component('BoxCube', BoxCube) 
  },
  // ...
};
