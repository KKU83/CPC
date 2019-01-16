import axios from "axios";

import { mutations } from "./mutations";

// const sleep = ms => {
//   return new Promise(resolve => setTimeout(resolve, ms));
// };

const addAuthHeader = () => {
  return {
    headers: {
      Authorization: "Bearer "
    }
  };
};

export const actions = {
  checkLoggedIn(/*{ commit }*/) {
    // debugger;
    // TODO
  },

  // async login({ dispatch, commit } /*, data*/) {
  //   // TODO
  //   let authResponse;
  //   try {
  //     // authResponse = await oktaAuth.client.signIn({
  //     //   username: data.email,
  //     //   password: data.password
  //     // })
  //   } catch (err) {
  //     let message = err.message || "Login error";
  //     dispatch("loginFailed", message);
  //     return;
  //   }

  //   if (authResponse.status !== "SUCCESS") {
  //     // console.error(
  //     //   "Login unsuccessful, or more info required",
  //     //   authResponse.status
  //     // );
  //     dispatch("loginFailed", "Login error");
  //     return;
  //   }

  //   let tokens;
  //   try {
  //     // tokens = await oktaAuth.client.token.getWithoutPrompt({
  //     //   responseType: ['id_token', 'token'],
  //     //   scopes: ['openid', 'email', 'profile'],
  //     //   sessionToken: authResponse.sessionToken
  //     // })
  //   } catch (err) {
  //     let message = err.message || "Login error";
  //     dispatch("loginFailed", message);
  //     return;
  //   }

  //   // Verify ID token validity
  //   try {
  //     // await oktaAuth.client.token.verify(tokens[0])
  //   } catch (err) {
  //     dispatch("loginFailed", "An error occurred");
  //     // console.error("id_token failed validation");
  //     return;
  //   }

  //   // oktaAuth.client.tokenManager.add('id_token', tokens[0])
  //   // oktaAuth.client.tokenManager.add('access_token', tokens[1])

  //   commit("loggedIn", tokens[0].claims);
  // },

  // async logout({ commit }) {
  //   // oktaAuth.client.tokenManager.clear()
  //   // await oktaAuth.client.signOut()
  //   commit("loggedOut");
  // },

  // async loginFailed({ commit }, message) {
  //   commit("loginError", message);
  //   await sleep(3000);
  //   commit("loginError", null);
  // },

  async getAllTodos({ commit }, data) {
    let response = await axios.get(
      "/api/todo",
      await addAuthHeader(data.$auth)
    );

    if (response && response.data) {
      let updatedTodos = response.data;
      commit("loadTodos", updatedTodos);
    }
  },

  async addTodo({ dispatch }, data) {
    await axios.post(
      "/api/todo",
      { text: data.text },
      addAuthHeader(data.$auth)
    );

    await dispatch("getAllTodos", { $auth: data.$auth });
  },

  async toggleTodo({ dispatch }, data) {
    await axios.post(
      "/api/todo/" + data.id,
      { completed: data.completed },
      addAuthHeader(data.$auth)
    );

    await dispatch("getAllTodos", { $auth: data.$auth });
  },

  async deleteTodo({ dispatch }, id, data) {
    await axios.delete("/api/todo/" + id, addAuthHeader(data.$auth));

    await dispatch("getAllTodos", { $auth: data.$auth });
  },

  setCounter({ commit }, obj) {
    commit(mutations.MAIN_SET_COUNTER, obj);
  }
};
