import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      isLoggedIn: false,
      invite: {},
      readPages: null,
    };
  },
  mutations: {
    setIsLoggedIn(state, bool) {
      state.isLoggedIn = bool;
    },
    setInvite(state, data) {
      state.invite = data;
    },
    setReadPages(state, value) {
      state.readPages = value;
    },
  },
  actions: {
    setInvite({ commit }, data) {
      commit("setInvite", data);
    },
  },
});

export default store;
