<template>
  <app-layout class="add-post">
    <h1 class="add-post__title">
      Добавление записи
    </h1>
    <form @submit.prevent="submitHandler">

      <div class="form-groupe">
        <label>
          Заголовок
        </label>
        <input 
          type="text" 
          v-model.trim="form.title"
          class="form-input"
        >
        <div v-if="$v.form.title.$error">
          <div 
            class="form-error" 
            v-if="!$v.form.title.required"
          >
              Обязательно для заполнения
            </div>
        </div>
      </div>

      <div class="form-groupe">
        <label>
          Краткое описание
        </label>
        <textarea 
          type="text" 
          v-model="form.description"
          class="form-input"
        />
       <div v-if="$v.form.description.$error">
          <div 
            class="form-error" 
            v-if="!$v.form.description.required"
          >
              Обязательно для заполнения
            </div>
        </div>
      </div>

      <div class="form-groupe">
        <label>
          Текст
        </label>
        <textarea 
          type="text" 
          v-model="form.text"
          class="form-input"
        />
        <div v-if="$v.form.text.$error">
          <div 
            class="form-error" 
            v-if="!$v.form.text.required"
          >
              Обязательно для заполнения
            </div>
        </div>
      </div>

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
import { required } from 'vuelidate/lib/validators';
import { v4 as uuidv4 } from 'uuid';
import AppLayout from "@/layouts/AppLayout.vue";
import {mapActions} from "vuex";

export default {
  name: "AddPost",
  data: () => ({
    form: {
      id: uuidv4(),
      title: '',
      description: '',
      text: ''
    }
  }),
  validations: {
    form: {
      title: {
        required
      },
      description: {
        required
      },
      text: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      addPost: 'postsModule/addPost'
    }),
    submitHandler() {
      this.$v.$touch();
      if(!this.$v.$invalid) {
        this.addPost(this.form);
        this.$router.push({name: 'Home'})
      }
    }
  },
  components: {
    AppLayout,
  },
};
</script>