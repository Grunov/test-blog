<template>
    <app-layout class="not-found">
        <h1 class="not-found__title">
            Страница не найдена
        </h1>
    </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout.vue';

export default {
    name: 'NotFound',
    components: {
        AppLayout
    }
}
</script>

<style lang="scss" scoped>
    .not-found {

        &__title {

        }
    }
</style>