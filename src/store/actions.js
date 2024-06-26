import axios from 'axios';

export const fetchMovies = async ({ commit }, query) => {
  try {
    const response = await axios.get(
      `https://www.omdbapi.com/?apikey=ca3b10e3&s=${query}`
    );
    commit('setMovies', response.data.Search);
  } catch (error) {
    console.error(error);
  }
};

export const fetchMovieDetails = async ({ commit }, movieId) => {
    try {
        const response = await axios.get(
          `https://www.omdbapi.com/?apikey=ca3b10e3&i=${movieId}`
        );
        commit('setMovie', response.data);
      } catch (error) {
        console.error(error);
      }
};
