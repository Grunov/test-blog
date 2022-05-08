import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import AddPost from '@/views/AddPost.vue';
import EditPost from '@/views/EditPost.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post/:id',
    name: 'Post',
    component: Post,
    props: true
  },
  {
    path: '/add-post',
    name: 'AddPost',
    component: AddPost
  },
  {
    path: '/edit-post/:id',
    name: 'EditPost',
    component: EditPost,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
