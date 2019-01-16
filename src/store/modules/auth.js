import { authService } from "../../services/auth.service";
import { EventBus } from "../../eventbus";

const state = {
  token: "", // Vue.localstorage.get("auth-token") || "",
  status: "",
  errors: []
};

const getters = {
  isAuthenticated: authState => !!authState.token,
  authStatus: authState => authState.status,
  authToken: authState => authState.token,
  errors: authState => authState.errors
};

const actions = {
  registerRequest: ({ commit, dispatch }, credentials) => {
    return new Promise((resolve, reject) => {
      commit("registerRequest");
      authService.register(credentials).subscribe(
        result => {
          // Vue.localstorage.set("auth-token", result); // stash the auth token in localStorage
          commit("authSuccess", result);
          EventBus.$emit("logged-in", null);
          dispatch("user/userRequest", null, { root: true });
          resolve(result);
        },
        errors => {
          commit("registerErrors", errors);
          // Vue.localstorage.remove("auth-token");
          reject(errors);
        }
      );
    });
  },
  authRequest: ({ commit, dispatch }, credentials) => {
    return new Promise((resolve, reject) => {
      commit("authRequest");
      authService.login(credentials).subscribe(
        result => {
          // Vue.localstorage.set("auth-token", result); // stash the auth token in localStorage
          commit("authSuccess", result);
          EventBus.$emit("logged-in", null);
          dispatch("user/userRequest", credentials, { root: true });
          resolve(result);
        },
        errors => {
          commit("authError", errors);
          // Vue.localstorage.remove("auth-token");
          reject(errors);
        }
      );
    });
  },
  recoverRequest: ({ commit, dispatch }, credentials) => {
    return new Promise((resolve, reject) => {
      commit("recoverRequest");
      authService.recover(credentials).subscribe(
        result => {
          // Vue.localstorage.set("auth-token", result); // stash the auth token in localStorage
          commit("authSuccess", result);
          EventBus.$emit("logged-in", null);
          dispatch("user/userRequest", null, { root: true });
          resolve(result);
        },
        errors => {
          commit("recoverErrors", errors);
          // Vue.localstorage.remove("auth-token");
          reject(errors);
        }
      );
    });
  },
  authLogout: ({ commit /*, dispatch*/ }) => {
    return new Promise((resolve, reject) => {
      commit("authLogout");
      authService.logout().subscribe(
        result => {
          // Vue.localstorage.set("auth-token", result); // stash the auth token in localStorage
          commit("authSuccess", result);
          EventBus.$emit("logged-out", null);
          resolve(result);
        },
        errors => {
          commit("logoutErrors", errors);
          // Vue.localstorage.remove("auth-token");
          reject(errors);
        }
      );
      resolve();
    });
  }
};

const mutations = {
  recoverRequest: authState => {
    authState.status = "attempting recover request";
  },
  recoverSuccess: authState => {
    authState.status = "recover succeeded";
  },
  recoverErrors: (authState, errors) => {
    authState.status = "error";
    authState.errors = errors;
  },
  registerRequest: authState => {
    authState.status = "attempting registration request";
  },
  registerErrors: (authState, errors) => {
    authState.status = "register error";
    authState.errors = errors;
  },
  authRequest: authState => {
    authState.status = "attempting authentication request";
  },
  authSuccess: (authState, authToken) => {
    authState.status = "authentication succeeded";
    authState.token = authToken;
  },
  authErrors: (authState, errors) => {
    authState.status = "error";
    authState.errors = errors;
  },
  authLogout: authState => {
    authState.status = "logged out";
    authState.token = "";
  },
  logoutErrors: (authState, errors) => {
    authState.status = "logout error";
    authState.errors = errors;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
