import { createStore } from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';

export default createStore({
  state: {
    movies: [],
    movie: null,
    currentComponent: null
  },
  mutations,
  actions,
});
