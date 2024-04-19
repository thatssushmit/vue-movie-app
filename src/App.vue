<template>
  <div id="app">
    <nav class="neumorphism-navbar">
      <router-link to="/" class="neumorphism-link">Movie List</router-link>
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

.neumorphism-navbar {
  background-color: #f0f0f0;
  border-radius: 20px 20px 0 0; /* Remove bottom corner radius */
  padding: 10px 20px;
  box-shadow: 10px 10px 20px #b7b7b7, -10px -10px 20px #ffffff;
  margin-bottom: 20px;
  text-align: center; /* Align text to center */
  
  .neumorphism-link {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    font-size: 18px;
    text-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #e0e0e0;
    transition: transform 0.2s ease;

    &:hover {
      transform: translateY(-3px);
    }
  }
}
</style>
