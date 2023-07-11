<template>
  <div>
    <h1>Blog</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.id">
        <router-link :to="`/post/${post.id}`">
          <h3>{{ post.title }}</h3>
          <img :src="post.image" :alt="post.title" />
          <p>{{ post.content }}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      blogPosts: [],
    };
  },
  mounted() {
    this.fetchBlogPosts();
  },
  methods: {
    fetchBlogPosts() {
      axios
        .get('https://api.example.com/blog-posts') // Replace with your API endpoint
        .then(response => {
          this.blogPosts = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
