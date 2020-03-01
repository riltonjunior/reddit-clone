import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Subreddits from '../views/Subreddits.vue';
import Subreddit from '../views/Subreddit.vue';
import Post from '../views/Post.vue';
import Register from '../views/Register.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/subreddits',
    name: 'Subreddits',
    component: Subreddits,

  },
  {
    path: '/r/:name',
    name: 'subreddit',
    component: Subreddit,
  },
  {
    path: '/r/:name/:post_id',
    name: 'post',
    component: Post,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
