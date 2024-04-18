<template>
    <div class="movie-details neumorphism" v-if="movie">
      <div class="movie-details__poster neumorphism-img">
        <img :src="movie.Poster" :alt="movie.Title" />
      </div>
      <div class="movie-details__info">
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
    flex-wrap: wrap; /* Allow items to wrap to the next line */
    background-color: #f0f0f0;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 10px 10px 20px #b7b7b7, -10px -10px 20px #ffffff;
  
    &__poster {
      flex: 0 0 300px;
      margin-right: 1rem;
  
      img {
        display: block;
        width: 100%;
        height: auto;
        border-radius: 12px;
        box-shadow: 6px 6px 12px #b7b7b7, -6px -6px 12px #ffffff;
      }
    }
  
    &__info {
      flex: 1;
  
      .neumorphism-heading {
        font-size: 24px;
        color: #333333;
        text-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #e0e0e0;
        margin-bottom: 1rem;
      }
  
      .neumorphism-text {
        color: #555555;
        text-shadow: 1px 1px 2px #ffffff, -1px -1px 2px #e0e0e0;
        margin-bottom: 0.5rem;
      }
  
      .details {
        .detail {
          margin-bottom: 0.5rem;
  
          .label {
            font-weight: bold;
            color: #666666;
            margin-right: 0.5rem;
          }
        }
      }
    }
  
    // Media query for smaller screens
    @media screen and (max-width: 768px) {
      flex-direction: column; /* Stack items vertically */
      align-items: center; /* Center items horizontally */
      
      &__poster {
        margin-bottom: 1rem; /* Add some space between poster and info */
      }
    }
  }
  </style>
  