<template>
    <div>
      <h2>{{ post.title }}</h2>
      <img :src="post.image" :alt="post.title" />
      <p>{{ post.content }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: null,
      };
    },
    mounted() {
      this.fetchPost();
    },
    methods: {
      fetchPost() {
        const postId = this.$route.params.id;
        axios
          .get(`https://api.example.com/blog-posts/${postId}`) // Replace with your API endpoint
          .then(response => {
            this.post = response.data;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  