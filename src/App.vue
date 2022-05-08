<template>
  <div id="app" class="app">
    <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
  </div>
</template>

<style lang="scss">
@import '~@/assets/app.scss';
</style>
