<template>
    <div class="comments">
        <h2 class="comments__title">
            Комментарии    
        </h2>    
        <form
            @submit.prevent="submitHandler" 
            class="comments__form"
            ref="form"
        >
            <label>
                Имя автора
            </label>
            <input 
                type="text" 
                v-model="form.author"
                class="form-input"
            />

            <label>
                Текст
            </label>
            <textarea 
                type="text" 
                v-model="form.text"
                class="form-input"
            />
            <button 
                type="submit"
                class="button"
            >
                Добавить
            </button>
        </form>
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
    mounted() {
        this.form.postId = this.postId
    },
    methods: {
        ...mapActions({
            addComment: 'commentsModule/addComment'
        }),
        submitHandler() {
            this.addComment(this.form);
            this.form = defaultForm();
        }
    }
}
</script>

<style lang="scss" scoped>
    .comments {

        &__form {
            width: 100%;
            box-shadow: 0 0 .5rem #3f51b575;
            border-radius: .25rem;
            padding: 1rem;
            margin-bottom: 20px;
        }

        &__list {
            position: relative;
        }

        &__list-item {
            margin-bottom: 20px;
        }
    }
</style>