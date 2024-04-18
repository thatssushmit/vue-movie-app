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
  .movie-list {
    &.neumorphism {
      background-color: #f0f0f0;
      border-radius: 20px;
      padding: 20px;
      box-shadow: 10px 10px 20px #b7b7b7, -10px -10px 20px #ffffff;
      transition: box-shadow 0.3s ease;
  
      &:hover {
        box-shadow: 14px 14px 28px #b7b7b7, -14px -14px 28px #ffffff;
      }
  
      .neumorphism-heading {
        font-size: 28px;
        margin-bottom: 20px;
        color: #333333;
        text-align: center;
        text-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #e0e0e0;
      }
  
      .neumorphism-item {
        display: block;
        text-decoration: none;
        color: inherit;
        transition: transform 0.2s ease;
  
        &:hover {
          transform: translateY(-3px);
        }
      }
  
      .thumbnail-wrapper {
        position: relative;
        overflow: hidden;
        border-radius: 12px;
        margin-bottom: 10px;
        transition: transform 0.3s ease;
  
        &:hover {
          transform: scale(1.05);
        }
  
        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: opacity 0.3s ease;
        }
  
        &:hover img {
          opacity: 0.8;
        }
  
        &:active img {
          opacity: 0.6;
        }
      }
  
      .neumorphism-text {
        color: #555555;
        text-align: center;
        text-shadow: 1px 1px 2px #ffffff, -1px -1px 2px #e0e0e0;
      }
    }
  
    .movie-list__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      grid-gap: 1.5rem;
    }
  
    .movie-list__item {
      margin-bottom: 25px;
    }
  }
  </style>
  