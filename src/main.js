import "@babel/polyfill";
import Vue from "vue";
import Vuetify from "vuetify";
import VeeValidate from "vee-validate";
import App from "./App.vue";
import Argon from "./plugins/argon-kit";
import router from "./router/index";
import store from "./store/index";
import "./registerServiceWorker";
import "vuetify/dist/vuetify.min.css"; // Ensure you are using css-loader

Vue.use(VeeValidate, { validity: true });

Vue.use(Argon);

Vue.use(Vuetify, {
  theme: {
    primary: "#1976D2",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
