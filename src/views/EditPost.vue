<template>
  <app-layout class="edit-post">
    <h1 class="edit__title">
      Редактирование записи
    </h1>
    <post-form 
      :post="this.post"
      :submit-call="updatePost"
      :submit-route="{path: `/post/${this.id}`}"
      class="add-post__form"
    />
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import {mapActions} from "vuex";
import PostForm from '../components/ui/PostForm.vue';

export default {
  name: "EditPost",
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    post() {
      return this.$store.getters["postsModule/post"](this.id);
    },
  },
  methods: {
    ...mapActions({
      updatePost: 'postsModule/updatePost'
    })
  },
  components: {
    AppLayout,
    PostForm
  },
};
</script>