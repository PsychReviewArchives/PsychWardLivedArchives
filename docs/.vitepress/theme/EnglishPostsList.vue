<script setup>
import { data as posts } from './englishposts.data.mjs'
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Article</th>
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