<template>
  <app-layout class="edit-post">
    <h1 class="edit__title">
      Редактирование записи
    </h1>
    <form @submit.prevent="submitHandler">

      <label>
        Заголовок
      </label>
      <input 
        type="text" 
        v-model="post.title"
        class="form-input"
      >

      <label>
        Краткое описание
      </label>
      <textarea 
        type="text" 
        v-model="post.description"
        class="form-input"
      />

      <label>
        Текст
      </label>
      <textarea 
        type="text" 
        v-model="post.text"
        class="form-input"
      />

      <button 
        type="submit"
        class="button"
      >
        Сохранить
      </button>

    </form>
  </app-layout>
</template>

<script>
import AppLayout from "@/layouts/AppLayout.vue";
import {mapActions} from "vuex";

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
    }),
    submitHandler() {
      this.updatePost(this.post);
      this.$router.push({path: `/post/${this.id}`})
    }
  },
  components: {
    AppLayout,
  },
};
</script>