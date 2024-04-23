<template>
  <div id="app">
    <nav class="neumorphism-navbar">
      <router-link to="/" class="neumorphism-link">Movie List App in VueJS3</router-link>
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
