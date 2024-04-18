import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state: {
    movies: [],
    movie: null,
  },
  mutations: {
    setMovies(state, movies) {
      state.movies = movies;
    },
    setMovie(state, movie) {
      state.movie = movie;
    },
  },
  actions: {
    async fetchMovies({ commit }, query) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=ca3b10e3&s=${query}`
        );
        commit('setMovies', response.data.Search);
      } catch (error) {
        console.error(error);
      }
    },
    async fetchMovieDetails({ commit }, movieId) {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?apikey=ca3b10e3&i=${movieId}`
        );
        commit('setMovie', response.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});

export default store;