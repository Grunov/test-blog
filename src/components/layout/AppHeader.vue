<template>
    <header class="app-header">
        <div class="app-header__inner container">
            <app-logo />
            <router-link :to="{name: 'AddPost'}">
                Добавить запись
            </router-link>
        </div>
    </header>
</template>

<script>
import AppLogo from '@/components/ui/AppLogo.vue';

export default {
    name: 'AppHeader',
    components: {
        AppLogo
    }
}
</script>

<style lang="scss" scoped>
    .app-header {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        min-width: 100%;
        box-shadow: 0 0 .5rem #3f51b575;
        padding: 20px 0;
        background-color: #fff;
        z-index: 1000;

        &__inner {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
</style>