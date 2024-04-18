<template>
  <div class="movie-list neumorphism">
    <h1 class="neumorphism-heading">Movie List</h1>
    <div class="movie-list__grid">
      <div v-for="movie in movies" :key="movie.imdbID" class="movie-list__item">
        <router-link :to="{ name: 'MovieDetails', params: { movieId: movie.imdbID } }" class="neumorphism-item">
          <img :src="movie.Poster" :alt="movie.Title" class="movie-list__thumbnail neumorphism-img" />
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
    box-shadow: 8px 8px 16px #c2c2c2, -8px -8px 16px #ffffff;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 12px 12px 24px #c2c2c2, -12px -12px 24px #ffffff;
    }

    .neumorphism-heading {
      font-size: 24px;
      margin-bottom: 20px;
      color: #555555;
      text-align: center;
      text-shadow: 2px 2px 4px #ffffff, -2px -2px 4px #e0e0e0;
    }

    .neumorphism-item {
      display: block;
      text-decoration: none;
      color: inherit;
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .neumorphism-img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      margin-bottom: 10px;
      box-shadow: 4px 4px 8px #c2c2c2, -4px -4px 8px #ffffff;
    }

    .neumorphism-text {
      color: #666666;
      text-align: center;
      text-shadow: 1px 1px 2px #ffffff, -1px -1px 2px #e0e0e0;
    }
  }

  .movie-list__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 1rem;
  }

  .movie-list__item {
    margin-bottom: 20px;
  }
}
</style>
