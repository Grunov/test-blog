<template>
    <ui-card class="comment-card">
        <div class="comment-card__header">
            <h4 class="comment-card__author">
                {{ comment.author }}
            </h4>
            <ui-button 
                @click="deleteComment(comment.id)"
                class="comment-card__delete"
            >
                Удалить
            </ui-button>
        </div>
        <p class="comment-card__text">
            {{ comment.text }}
        </p>
    </ui-card>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'CommentCard',
    props: {
        comment: {
            type: Object,
            required: true
        }
    },
    methods: {
        ...mapActions({
            deleteComment: 'commentsModule/deleteComment'
        })
    }
}
</script>

<style lang="scss" scoped>
    .comment-card {
        width: 100%;
        box-shadow: 0 0 .5rem #3f51b575;
        border-radius: .25rem;
        padding: 1rem;

        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding-bottom: 10px;
            margin-bottom: 10px;
            border-bottom: 1px solid #3f51b575;
        }

        &__author {
            margin-bottom: 0;
        }
    }
</style>