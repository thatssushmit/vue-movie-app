<template>
    <article>
      <section class="movie-details neumorphism" v-if="movie">
        <figure class="movie-details__poster neumorphism-img">
          <img :src="movie.Poster" :alt="movie.Title" />
        </figure>
        <section class="movie-details__info">
          <h2 class="neumorphism-heading">{{ movie.Title }}</h2>
          <p class="neumorphism-text">{{ movie.Plot }}</p>
          <div class="details">
            <p class="detail"><span class="label">Rating:</span> {{ movie.imdbRating }}</p>
            <p class="detail"><span class="label">Year:</span> {{ movie.Year }}</p>
            <p class="detail"><span class="label">Runtime:</span> {{ movie.Runtime }}</p>
            <p class="detail"><span class="label">Genre:</span> {{ movie.Genre }}</p>
            <p class="detail"><span class="label">Director:</span> {{ movie.Director }}</p>
            <p class="detail"><span class="label">Actors:</span> {{ movie.Actors }}</p>
          </div>
        </section>
      </section>
    </article>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex';
  
  export default {
    name: 'MovieDetails',
    computed: {
      ...mapState(['movie']),
    },
    mounted() {
      this.fetchMovieDetails(this.$route.params.movieId);
    },
    watch: {
      $route: {
        immediate: true,
        handler(to) {
          this.fetchMovieDetails(to.params.movieId);
        },
      },
    },
    methods: {
      ...mapActions(['fetchMovieDetails']),
    },
  };
  </script>
  
  <style lang="scss" scoped>
  
  </style>
  