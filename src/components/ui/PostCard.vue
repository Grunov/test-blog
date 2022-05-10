<template>
    <ui-card 
        tag="article" 
        class="post-card"
    >
        <header class="post-card__header">
            <ui-button :to="{ path: `/edit-post/${post.id}` }">
                Редактировать
            </ui-button>
            <ui-button @click="deletePost(post.id)">
                Удалить
            </ui-button>
        </header>
            <div class="post-card__body">
                <h4 class="post-card__title">
                {{ post.title }}
            </h4>
            <p class="post-card__description">
                {{ post.description}}
            </p>
            <p 
                v-if="commetsCount"
                class="post-card__comments-count">
                  Количество комментриев: {{ commetsCount }} 
            </p>
        </div>
        <div class="post-card__foooter">
            <ui-button 
                :to="`post/${post.id}`"
                class="post-card__more"
            >
                Подробнее...
            </ui-button>
        </div>
    </ui-card>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'PostCard',
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    computed: {
       commetsCount() {
           return this.$store.getters['commentsModule/commentsCountByPostId'](this.post.id)
       }
    },
    methods: {
        ...mapActions({
            deletePost: 'postsModule/deletePost'
        })
    }
}
</script>

<style lang="scss" scoped>
    .post-card {
        &__header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #3f51b575;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        &__comments-count {
            color: #757575;
        }
    }
</style>