// .vitepress/config.mts
import { defineConfig } from "vitepress";

import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'

// VitePress 配置
export default defineConfig({
  head: [
    ['script',{defer: '',async: '',src: 'https://cn.vercount.one/js'}],
    ['link',{rel:'icon',href:'/assets/logo.png'}]
  ],
  vite: { 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/friends-xiaohuli/WhiteFoxDoc', 
      }), 
      GitChangelogMarkdownSection({
        sections:{
          disableContributors: true
        }
      }),
    ],
    optimizeDeps: {
      exclude: [ 
        '@nolebase/vitepress-plugin-enhanced-readabilities/client', 
        'vitepress', 
        '@nolebase/ui', 
      ], 
    },
    ssr: { 
      noExternal: [ 
        // 如果还有别的依赖需要添加的话，并排填写和配置到这里即可
        '@nolebase/vitepress-plugin-enhanced-readabilities', 
        '@nolebase/ui', 
      ], 
    }, 
  }, 
  cleanUrls: true, //开启纯净链接
  lastUpdated: true, //首次配置不会立即生效，需git提交后爬取时间戳
  lang: 'zh-CN',
  title: "WhiteFoxDoc 喵~",
  description: "WhiteFoxDoc",
  themeConfig: {
    logo: "/assets/logo.png", // 页面上显示的logo

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/doc/start' }
    ],

    sidebar: [
        {
          text: '喵！！！',
          items: [
            { text: 'ALL', link: '/doc/start' },
            { text: 'Minecraft', link: '/doc/Minecraft' },
            { text: 'Oxygen Not Included', link: '/doc/OxygenNI' },
          ]
        },
        {
          text: '帮助',
          items: [
            { text: '我的世界 FUN', link: '/doc/help/mcfun' },
          ]
        },
        {
          text: '教程归档',
          items: [
            { text: '01.数据包模块教程', link: '/doc/archive/01.数据包模块' },
            // { text: '02.GLSL着色器.md', link: '/doc/archive/02.GLSL着色器' },
          ]
        },
        {
          text: '关于',
          items: [
            { text: '关于我们', link: '/doc/about/about' },
          ]
        },
        {
          text: '分发',
          items: [
            { text: '【服务器】蔚蓝天际线', link: '/doc/promotions/adastra' },
          ]
        }
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/friends-xiaohuli' }
    ],

    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    outline: {
      level: [2, 4],   // 控制显示 H2~H4
      label: "页面导航"
    },

    //上次更新时间
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short', // 可选值full、long、medium、short
        timeStyle: 'medium' // 可选值full、long、medium、short
      },
    },
  },
  markdown: {
    // 代码块行号显示
    lineNumbers: true,
    // 图片懒加载
    image: {
      lazyLoading: true
    },
    // 代码框内复制按钮的 title 提示
    codeCopyButtonTitle: '复制代码',
    //字数及阅读时间 
    config: (md) => {
      md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
        let htmlResult = slf.renderToken(tokens, idx, options);
        if (tokens[idx].tag === 'h1') htmlResult += `<ArticleMetadata />`;
        return htmlResult;
      }
    }
  },


  // ...
})