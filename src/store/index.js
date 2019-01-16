import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import user from "./modules/user";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

// STATE
const state = {
  drawer: null,
  counter: 1,
  loggedIn: false,
  loggingIn: false,
  loginError: null,
  errors: [],
  userName: null,
  token: null
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    auth: {
      namespaced: true,
      state: auth.state,
      mutations: auth.mutations,
      getters: auth.getters,
      actions: auth.actions
    },
    user: {
      namespaced: true,
      state: user.state,
      actions: user.actions,
      mutations: user.mutations,
      getters: user.getters
    }
  }
});
