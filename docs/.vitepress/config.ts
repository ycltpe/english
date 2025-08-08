import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "英语学习指南",
  description: "系统化的英语学习资源与规划",
  lang: 'zh-CN',
  themeConfig: {
    logo: '/logo.png',
    siteTitle: '英语学习指南',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习规划', link: '/guide/plan' },
      { text: '语法基础', link: '/grammar/' },
      { text: '词汇积累', link: '/vocabulary/' },
      { text: '听说训练', link: '/listening-speaking/' },
      { text: '阅读写作', link: '/reading-writing/' },
      { text: '学习资源', link: '/resources/' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '学习指南',
          items: [
            { text: '学习规划', link: '/guide/plan' },
            { text: '学习方法', link: '/guide/methods' },
            { text: '学习工具', link: '/guide/tools' }
          ]
        }
      ],
      '/grammar/': [
        {
          text: '语法基础',
          items: [
            { text: '语法概述', link: '/grammar/' },
            { text: '时态详解', link: '/grammar/tenses' },
            { text: '从句结构', link: '/grammar/clauses' },
            { text: '虚拟语气', link: '/grammar/subjunctive' },
            { text: '被动语态', link: '/grammar/passive' }
          ]
        }
      ],
      '/vocabulary/': [
        {
          text: '词汇积累',
          items: [
            { text: '词汇概述', link: '/vocabulary/' },
            { text: '核心词汇', link: '/vocabulary/core' },
            { text: '词根词缀', link: '/vocabulary/roots' },
            { text: '同义词辨析', link: '/vocabulary/synonyms' },
            { text: '习语表达', link: '/vocabulary/idioms' }
          ]
        }
      ],
      '/listening-speaking/': [
        {
          text: '听说训练',
          items: [
            { text: '听说概述', link: '/listening-speaking/' },
            { text: '听力技巧', link: '/listening-speaking/listening' },
            { text: '口语练习', link: '/listening-speaking/speaking' },
            { text: '发音指导', link: '/listening-speaking/pronunciation' },
            { text: '对话练习', link: '/listening-speaking/conversation' }
          ]
        }
      ],
      '/reading-writing/': [
        {
          text: '阅读写作',
          items: [
            { text: '阅读写作概述', link: '/reading-writing/' },
            { text: '阅读技巧', link: '/reading-writing/reading' },
            { text: '写作基础', link: '/reading-writing/writing' },
            { text: '文章结构', link: '/reading-writing/structure' },
            { text: '写作练习', link: '/reading-writing/practice' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '学习资源',
          items: [
            { text: '资源概述', link: '/resources/' },
            { text: '推荐书籍', link: '/resources/books' },
            { text: '在线工具', link: '/resources/tools' },
            { text: '学习网站', link: '/resources/websites' },
            { text: '练习题库', link: '/resources/exercises' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com' }
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024 英语学习指南'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3c8772' }]
  ]
})
