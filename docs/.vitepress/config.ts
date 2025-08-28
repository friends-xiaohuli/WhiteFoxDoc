// .vitepress/config.mts
import { defineConfig } from "vitepress";

import { 
  GitChangelog, 
  GitChangelogMarkdownSection, 
} from '@nolebase/vitepress-plugin-git-changelog/vite'
//自动侧边栏 
import { generateSidebar } from 'vitepress-sidebar';

const vitepressSidebarOptions = {
  /* Options... */
};


// VitePress 配置
export default defineConfig({
  head: [
    ['script',{defer: '',async: '',src: 'https://cn.vercount.one/js'}]
  ],
  vite: { 
    plugins: [ 
      GitChangelog({ 
        // 填写在此处填写您的仓库链接
        repoURL: () => 'https://github.com/nolebase/integrations', 
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
  lang: 'zh-CN',
  title: "WhiteFoxDoc 喵~",
  description: "WhiteFoxDoc",
  themeConfig: {
    logo: "/assets/logo.png", // 页面上显示的logo

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Start', link: '/doc/start' }
    ],

    sidebar: 
      // generateSidebar({
      //   /*
      //   * For detailed instructions, see the links below:
      //   * https://vitepress-sidebar.jooy2.com/guide/api
      //   */
      //   documentRootPath: '/doc', //文档根目录
      //   // scanStartPath: null,
      //   // resolvePath: null,
      //   // useTitleFromFileHeading: true,
      //   // useTitleFromFrontmatter: true,
      //   // frontmatterTitleFieldName: 'title',
      //   // useFolderTitleFromIndexFile: false, //是否使用层级首页文件名做分级标题
      //   // useFolderLinkFromIndexFile: false, //是否链接至层级首页文件
      //   // hyphenToSpace: true,
      //   // underscoreToSpace: true,
      //   // capitalizeFirst: false,
      //   // capitalizeEachWords: false,
      //   collapsed: false, //折叠组关闭
      //   collapseDepth: 2, //折叠组2级菜单
      //   // sortMenusByName: false,
      //   // sortMenusByFrontmatterOrder: false,
      //   // sortMenusByFrontmatterDate: false,
      //   // sortMenusOrderByDescending: false,
      //   // sortMenusOrderNumericallyFromTitle: false,
      //   // sortMenusOrderNumericallyFromLink: false,
      //   // frontmatterOrderDefaultValue: 0,
      //   // manualSortFileNameByPriority: ['first.md', 'second', 'third.md'], //手动排序，文件夹不用带后缀
      //   removePrefixAfterOrdering: false, //删除前缀，必须与prefixSeparator一起使用
      //   prefixSeparator: '.', //删除前缀的符号
      //   // excludeFiles: ['first.md', 'secret.md'],
      //   // excludeFilesByFrontmatterFieldName: 'exclude',
      //   // excludeFolders: ['secret-folder'],
      //   // includeDotFiles: false,
      //   // includeRootIndexFile: false,
      //   // includeFolderIndexFile: false, //是否包含层级主页
      //   // includeEmptyFolder: false,
      //   // rootGroupText: 'Contents',
      //   // rootGroupLink: 'https://github.com/jooy2',
      //   // rootGroupCollapsed: false,
      //   // convertSameNameSubFileToGroupIndexPage: false,
      //   // folderLinkNotIncludesFileName: false,
      //   // keepMarkdownSyntaxFromTitle: false,
      //   // debugPrint: false,
      // }),
      [
        {
          text: '喵！！！',
          items: [
            { text: 'ALL', link: '/doc/start' },
          ]
        },
        // {
        //   text: '示例文件',
        //   items: [
        //     { text: 'Markdown Examples', link: '/doc/hide/markdown-examples' },
        //     { text: 'Runtime API Examples', link: '/doc/hide/api-examples' },
        //   ]
        // },
        {
          text: '帮助',
          items: [
            { text: '我的世界 FUN', link: '/doc/help/mcfun' },
            // { text: 'Runtime API Examples', link: '/doc/api-examples' },
          ]
        },
        {
          text: '教程归档',
          items: [
            { text: '01.生成随机数', link: '/doc/archive/01.生成随机数' },
          ]
        },
        {
          text: '关于',
          items: [
            { text: '关于我们', link: '/doc/about/about' },
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
    outlineTitle: "页面导航",
    outline: [2,6],
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