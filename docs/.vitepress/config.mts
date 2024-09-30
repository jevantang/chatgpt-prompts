import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hans',
  title: "ChatGPT 引导语",
  description: "欢迎来到 ChatGPT Prompts 引导语大全，这里汇集了丰富的 ChatGPT 提示语、创意写作灵感与实用技巧。让我们帮助您激发无限创意，提升写作效率与质量。立即探索吧！",

  head: [
      ['link', { rel: 'icon', type: 'image/png', href: 'https://assets.fresns.cn/prompts/logo.png' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:title', content: 'ChatGPT 引导语大全' }],
      ['meta', { property: 'og:description', content: '分门别类的 ChatGPT 引导语大全' }],
      ['meta', { property: 'og:image', content: 'https://assets.fresns.cn/prompts/og-image.jpg' }],
      ['meta', { property: 'og:url', content: 'https://prompts.fresns.cn' }],
  ],

  themeConfig: {
    logo: 'https://assets.fresns.cn/prompts/logo.png',

    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/', activeMatch: '/guide' },
      { text: '引导语', link: '/general/translation.md', activeMatch: `^/(general|life|it|cultural|medicine)/`, },
      { text: '更新日志', link: '/changelog.md' },
      { text: 'Fresns', link: 'https://fresns.cn' },
    ],


    sidebar: {
      '/guide/': sidebarGuide(),
      '/changelog': sidebarGuide(),
      '/general/': sidebarReference(),
      '/life/': sidebarReference(),
      '/it/': sidebarReference(),
      '/cultural/': sidebarReference(),
      '/medicine/': sidebarReference(),
    },

    footer: {
      message: 'Released under the CC0-1.0 License.',
      copyright: 'Copyright © 2024 <a href="https://tangjie.me/" target="_blank">唐杰</a>',
    },

    outlineTitle: '本页导览',
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '深色模式',

    editLink: {
        pattern: 'https://github.com/jevantang/chatgpt-prompts/blob/main/docs/:path',
        text: '为此页贡献新引导语'
    },

    lastUpdatedText: '最后一次更新',

    docFooter: {
        prev: '上一项',
        next: '下一项',
    },

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'twitter', link: 'https://twitter.com/JevanTang' },
      { icon: 'github', link: 'https://github.com/jevantang/chatgpt-prompts' }
    ]
  }
})

// sidebarGuide
function sidebarGuide() {
  return [
    {
      text: '指南',
      items: [
        { text: '介绍', link: '/guide/' },
        { text: '策略：编写明确的指导说明', link: '/guide/tactic-1.md' },
        { text: '策略：提供参考文本', link: '/guide/tactic-2.md' },
        { text: '策略：将复杂任务分解成更简单的子任务', link: '/guide/tactic-3.md' },
        { text: '策略：给予模型“思考”的时间', link: '/guide/tactic-4.md' },
        { text: '策略：使用外部工具', link: '/guide/tactic-5.md' },
        { text: '策略：系统地对变更进行测试', link: '/guide/tactic-6.md' },
        { text: '其他资源', link: '/guide/other.md' },
      ]
    }
  ]
}

// sidebarReference
function sidebarReference() {
  return [
    {
      text: '通用技能',
      collapsed: false,
      items: [
        { text: '翻译', link: '/general/translation.md' },
        { text: '办公', link: '/general/office.md' },
        { text: '学习', link: '/general/learn.md' },
      ]
    },
    {
      text: '生活类',
      collapsed: false,
      items: [
        { text: '聊天', link: '/life/chat.md' },
        { text: '帮手', link: '/life/helper.md' },
        { text: '旅游', link: '/life/travel.md' },
      ]
    },
    {
      text: '科技类',
      collapsed: false,
      items: [
        { text: '产品', link: '/it/product.md' },
        { text: '设计', link: '/it/design.md' },
        { text: '技术', link: '/it/technology.md' },
        { text: '运营', link: '/it/operation.md' },
      ]
    },
    {
      text: '文创类',
      collapsed: false,
      items: [
        { text: '音乐', link: '/cultural/music.md' },
        { text: '稿件', link: '/cultural/article.md' },
      ]
    },
    {
      text: '医学类',
      collapsed: false,
      items: [
        { text: '医生', link: '/medicine/doctor.md' },
      ]
    },
  ]
}
