<template>
  <div id="app">
    <nav>
      <router-link to="/">Movie List</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import './assets/styles/main.scss';
</style>