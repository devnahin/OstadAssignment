import Vue from 'vue';
import VueRouter from 'vue-router';
import BlogPostList from '../components/BlogPostList.vue';
import SinglePost from '../components/SinglePost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: BlogPostList,
  },
  {
    path: '/post/:id',
    name: 'SinglePost',
    component: SinglePost,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
