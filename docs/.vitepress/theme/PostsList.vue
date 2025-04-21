<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<template>
  <div class="post-list">
    <div
      class="post-item"
      v-for="(post, index) in posts"
      :key="post.url"
    >
      <div 
        class="post-date" 
        :class="{ hidden: index !== 0 && post.date.string === posts[index - 1].date.string }"
      >
        {{ post.date.string }}
      </div>
      <div class="post-title">
        <a :href="post.url">{{ post.title }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-list {
  margin-top: 2rem;
  margin-left: 2rem;
}

.post-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1rem;
  line-height: 2rem;
}

.post-date {
  text-align: right;
  font-feature-settings: "tnum" on;
}

.post-date.hidden {
  visibility: hidden;
}
</style>