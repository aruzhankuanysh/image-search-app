import { createStore } from "vuex";

export default createStore({
  state: {
    favorites: [],
  },
  mutations: {
    addToFavorites(state, photo) {
      state.favorites.push(photo);
    },
    removeFromFavorites(state, photo) {
      const index = state.favorites.findIndex((item) => item.id === photo.id);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },
  },
  actions: {},
  modules: {},
});
