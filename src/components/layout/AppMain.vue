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
        $verticalPadding: 40px;

        padding: $verticalPadding 0;
        min-height: calc(100vh - ($verticalPadding * 2));
    }
</style>