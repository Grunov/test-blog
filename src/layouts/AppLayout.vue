<template>
    <div class="app-layout">
        <app-header />
        <app-main>
            <slot />
        </app-main>
    </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppMain from '@/components/layout/AppMain.vue';

export default {
    name: 'AppLayoyt',
    components: {
        AppHeader,
        AppMain
    }
}
</script>