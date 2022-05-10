<template>
  <div class="post-form">
    <form @submit.prevent="submitHandler">

      <div class="form-groupe">
        <label>
          Заголовок
        </label>
        <input 
          type="text" 
          v-model.trim="post.title"
          class="form-input"
        >
        <div v-if="$v.post.title.$error">
          <div 
            class="form-error" 
            v-if="!$v.post.title.required"
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
          v-model="post.description"
          class="form-input"
        />
       <div v-if="$v.post.description.$error">
          <div 
            class="form-error" 
            v-if="!$v.post.description.required"
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
          v-model="post.text"
          class="form-input"
        />
        <div v-if="$v.post.text.$error">
          <div 
            class="form-error" 
            v-if="!$v.post.text.required"
          >
              Обязательно для заполнения
            </div>
        </div>
      </div>

      <ui-button type="submit">
        Сохранить
      </ui-button>

    </form>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'PostForm',
  props: {
      post: {
          type: Object,
          default: () => ({
              id: uuidv4(),
              title: '',
              description: '',
              text: ''
          })
      },
      submitRoute: {
          type: Object,
          default: () => ({ name: 'Home' })
      },
      submitCall: {
          type: Function,
          required: true
      }
  },
  validations: {
    post: {
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
    submitHandler() {
        this.$v.$touch();
        if(!this.$v.$invalid) {
            this.submitCall(this.post)
            this.$router.push(this.submitRoute);
        }
        
    },
  },
};
</script>

<style lang="scss" scoped>
.post-form {

}
</style>