import router from "../router/index";

import { set, toggle } from "./utils";

// TYPES
const MAIN_SET_COUNTER = "MAIN_SET_COUNTER";

// MUTATIONS
export const mutations = {
  [MAIN_SET_COUNTER](state, obj) {
    state.counter = obj.counter;
  },

  setDrawer() {
    set("drawer");
  },

  toggleDrawer() {
    toggle("drawer");
  },

  loggedIn(state, data) {
    state.loggedIn = true;
    state.userName = (data.name || "").split(" ")[0] || "Hello";

    let redirectTo = state.route.query.redirect || "/";
    router.push(redirectTo);
  },

  loggedOut(state) {
    state.loggedIn = false;
    router.push("/login");
  },

  loginError(state, message) {
    state.loginError = message;
  },

  loadTodos(state, todos) {
    state.todos = todos || [];
  },

  clearTodos(state) {
    state.todos = [];
  }
};
