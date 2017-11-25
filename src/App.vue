<template>
  <div id="main">
    <app-aside></app-aside>
    <app-main></app-main>
  </div>
</template>

<script>
  import AppMain from './components/AppMain.vue';
  import AppAside from './components/AppAside.vue';
  export default {
    components: {
      AppMain,
      AppAside
    }
  }
</script>

<style lang="scss" scoped>
  #main {
    display: flex;
    width: 100vw !important;
  }
</style>
