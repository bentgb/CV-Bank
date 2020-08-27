import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authenticated: false,
    username:"",
    user: 0
  },
  mutations: {
    setAuthentication(state, status) {
      state.authenticated = status;
    },
    setUserId(state,id) {
      state.user = id;
    }
  },
  getters: {},
  actions: {}
});

