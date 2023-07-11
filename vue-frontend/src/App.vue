<template>
  <div id="app">
    <h1>Blog</h1>
    <div class="container">
      <BlogPost v-for="post in blogPosts" :key="post.id" :post="post" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import BlogPost from './components/BlogPost.vue';

export default {
  name: 'App',
  components: {
    BlogPost,
  },
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

<style>
.container {
  max-width: 800px;
  margin: 0 auto;
}
</style>
