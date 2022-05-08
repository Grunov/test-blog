<template>
    <main class="app-main">
        <div class="container">
            <slot />
        </div>
    </main>
</template>

<script>
export default {
    name: 'AppMain'
}
</script>

<style lang="scss" scoped>
    .app-main {
        padding: 40px 0;
        min-height: calc(100vh - (40px * 2));
    }
</style>