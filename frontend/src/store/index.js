import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      invite: {},
    };
  },
  mutations: {
    setIsLoggedIn(state, bool) {
      state.isLoggedIn = bool;
    },
    setInvite(state, data) {
      state.invite = data;
    },
  },
  actions: {
    setInvite({ commit }, data) {
      commit("setInvite", data);
    },
  },
});

export default store;
