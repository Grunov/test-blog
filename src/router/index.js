import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Post from '@/views/Post.vue';
import AddPost from '@/views/AddPost.vue';
import EditPost from '@/views/EditPost.vue';
import NotFound from '@/views/NotFound.vue';


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
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
