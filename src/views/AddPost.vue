<template>
  <app-layout class="add-post">
    <h1 class="add-post__title">
      Добавление записи
    </h1>
    <post-form 
      :submit-call="addPost"
      class="add-post__form"
    />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import {mapActions} from "vuex";
import PostForm from '../components/ui/PostForm.vue';

export default {
  name: "AddPost",
  methods: {
    ...mapActions({
      addPost: 'postsModule/addPost'
    })
  },
  components: {
    AppLayout,
    PostForm
  },
};
</script>