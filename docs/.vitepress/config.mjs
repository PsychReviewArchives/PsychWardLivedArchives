import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Psych Ward Lived Archives",
  description: "An oral history for and by psychiatry system survivors",
  lastUpdated: true,

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },

  themeConfig: {
    docFooter: {
      prev: false,
      next: false
    },

    footer: {
      message: '由于各受访者的背景不同且经历敏感，我们强烈建议您在其他平台上引用前咨询我们。<br>Due to the delicate and various backgrounds of our interviewees, we urge you to consult us before citing any content.',
      copyright: 'Copyright © 2025 <a href="https://psychreview.su/">Psych Review Archives</a>. All rights reserved.'
    },
    
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/About' },
      { text: 'Oral History', link: '/OralHistory'}
    ],

    sidebar: false,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PsychReviewArchives/PsychWardLivedArchives' }
    ]
  }
})
