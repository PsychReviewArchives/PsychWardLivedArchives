<script setup>
import { data as posts } from './posts.data.mjs'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>日期</th>
        <th>文章</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="post of posts">
        <td>{{ post.date.string }}</td>
        <td><a :href="post.url">{{ post.title }}</a></td>
      </tr>
    </tbody>
  </table>
</template>

<style>
table,
th,
td {
  border: 0 !important;
}
</style>