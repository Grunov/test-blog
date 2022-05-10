<template>
    <div class="comments">
        <h2 class="comments__title">
            Комментарии    
        </h2>
        <ui-card class="comments__form-card">    
            <form
                @submit.prevent="submitHandler" 
                class="comments__form"
                ref="form"
            >
                <div class="form-groupe">
                    <label>
                        Имя автора
                    </label>
                    <input 
                        type="text" 
                        v-model="form.author"
                        class="form-input"
                    />
                    <div v-if="$v.form.author.$error">
                        <div 
                            class="form-error" 
                            v-if="!$v.form.author.required"
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

                <ui-button type="submit">
                    Добавить
                </ui-button>
            </form>
        </ui-card>
        <div class="comments__list">
            <transition-group name="list">
                <comment-card 
                    v-for="comment in comments"
                    :key="comment.id"
                    :comment="comment"
                    class="comments__list-item" 
                />
            </transition-group>
        </div>
    </div>    
</template>


<script>
import { required } from 'vuelidate/lib/validators';
import { v4 as uuidv4 } from 'uuid';
import {mapActions} from "vuex";
import CommentCard from '@/components/ui/CommentCard.vue';

const defaultForm = () => {
    return {
        id: uuidv4(),
        postId: '',
        author: '',
        text: ''
    }
}

export default {
  components: { CommentCard },
    name: 'Comments',
    props: {
        postId: {
            type: String,
            required: true
        },
        comments: {
            type: Array || null,
            required: true
        }
    },
    data: () => ({
        form: defaultForm()
    }),
    validations: {
        form: {
            author: {
                required
            },
            text: {
                required
            }
        }
    },
    mounted() {
        this.form.postId = this.postId
    },
    methods: {
        ...mapActions({
            addComment: 'commentsModule/addComment'
        }),
        submitHandler() {
            this.$v.$touch();
            if(!this.$v.$invalid) {
                this.addComment(this.form);
                this.form = defaultForm();
                this.$v.$reset();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .comments {

        &__form-card {
            margin-bottom: 20px;
        }

        &__form {
            width: 100%;
        }

        &__list {
            position: relative;
        }

        &__list-item {
            margin-bottom: 20px;
        }
    }
</style>