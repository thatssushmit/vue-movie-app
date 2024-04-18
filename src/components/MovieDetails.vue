<template>
    <div class="movie-details" v-if="movie">
      <div class="movie-details__poster">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="movie-details__info">
        <h2>{{ movie.Title }}</h2>
        <p>{{ movie.Plot }}</p>
        <p>Rating: {{ movie.imdbRating }}</p>
        <p>Year: {{ movie.Year }}</p>
        <p>Runtime: {{ movie.Runtime }}</p>
        <p>Genre: {{ movie.Genre }}</p>
        <p>Director: {{ movie.Director }}</p>
        <p>Actors: {{ movie.Actors }}</p>
      </div>
    </div>
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
  .movie-details {
    display: flex;
    flex-wrap: wrap;
  
    &__poster {
      flex: 0 0 300px;
      margin-right: 1rem;
  
      img {
        width: 100%;
        height: auto;
      }
    }
  
    &__info {
      flex: 1;
    }
  }
  </style>