import DefaultTheme from 'vitepress/theme-without-fonts'
import './my-fonts.css'

import PostsList from './PostsList.vue'
import EnglishPostsList from './EnglishPostsList.vue'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostsList', PostsList)
    app.component('EnglishPostsList', EnglishPostsList)
  }
}