<template>
  <app-layout class="home">
      <h1 class="home__title">Мои записи</h1>
      <section 
        v-if="posts.length"
        class="home__posts"
      >
        <transition-group name="list">
          <post-card 
            v-for="post in posts" 
            :key="post.id"
            :post="post"
            class="home__post" />
        </transition-group>
      </section>
      <section
        v-if="!posts.length"
        class="home__empty"
      >
        <p>Тут пока нету записей.</p>
        <ui-button class="button" @click="initData">
          Добавить посты в localStorage
        </ui-button>
      </section>
  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';
import PostCard from '@/components/ui/PostCard.vue';
import { mapGetters } from 'vuex'; 

import posts from '@/posts.json';
import comments from '@/comments.json';

export default {
  name: 'Home',
  computed: {
    ...mapGetters({
      posts: 'postsModule/posts'
    })
  },
  methods: {
    initData() {
      localStorage.setItem('posts', JSON.stringify(posts));
      localStorage.setItem('comments', JSON.stringify(comments));
      window.location.reload();
    }
  },
  components: {
    AppLayout,
    PostCard
  }
}
</script>

<style lang="scss" scoped>
  .home {
    &__posts {
      position: relative;
    }

    &__post {
      margin-bottom: 20px;
    }
  }
</style>
