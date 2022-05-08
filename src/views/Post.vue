<template>
  <app-layout class="post">
    <template v-if="post">
      <h1 class="post__title">
        {{ post.title }}
      </h1>
      <p class="post__text">
        {{ post.text }}
      </p>
    </template>
    <template v-if="!post">
      <h1 class="post__title">
        Запись не найдена
      </h1>
    </template>
    <comments
      :post-id="id" 
      :comments="comments"
    />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import Comments from '@/components/ui/Comments.vue';

export default {
  name: "Post",
  props: ["id"],
  computed: {
    post() {
      return this.$store.getters["postsModule/post"](this.id);
    },
    comments() {
      return this.$store.getters["commentsModule/commentsByPostId"](this.id);
    }
  },
  components: {
    AppLayout,
    Comments
  },
};
</script>
    