<template>
  <div class="movie-list neumorphism">
    <h1 class="neumorphism-heading">Movie List</h1>
    <div class="movie-list__grid">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie-list__item">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.imdbID } }" class="neumorphism-item">
          <div class="thumbnail-wrapper">
            <img :src="movie.Poster" :alt="movie.Title" class="movie-list__thumbnail neumorphism-img" />
          </div>
          <h3 class="movie-list__title neumorphism-text">{{ movie.Title }}</h3>
          <p class="movie-list__year neumorphism-text">{{ movie.Year }}</p>
        </router-link>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'MovieList',
    computed: {
      ...mapState(['movies']),
    },
    mounted() {
      this.fetchMovies('iron man');
    },
    methods: {
      ...mapActions(['fetchMovies']),
    },
  };
  </script>
  
  <style lang="scss" scoped>

  </style>
  