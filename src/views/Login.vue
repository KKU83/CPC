<template>
  <div class="container pt-lg-md">
    <div class="row justify-content-center">
      <div class="col-lg-5">
        <card
          type="secondary"
          shadow
          header-classes="bg-white pb-5"
          body-classes="px-lg-5 py-lg-5"
          class="border-0"
        >
          <form @submit.prevent="handleSubmitLogin">
            <v-text-field
              v-model="user_name"
              v-validate="'required'"
              :error-messages="errors.collect('user_name')"
              label="Имя пользователя"
              data-vv-name="user_name"
            ></v-text-field>
            <v-text-field
              v-model="password"
              v-validate="'required'"
              :error-messages="errors.collect('password')"
              label="Пароль"
              data-vv-name="password"
              type="password"
            ></v-text-field>
            <!-- <base-checkbox>Запомнить меня</base-checkbox> -->
            <v-btn block outline color="primary" type="submit">Войти</v-btn>
            <div v-if="loginErrors.length">
              <ul>
                <li v-for="error in loginErrors" :key="error" class="text-warning">{{error}}</li>
              </ul>
            </div>
          </form>
        </card>
        <div class="row mt-3">
          <div class="col-6">
            <router-link to="/recover" class="text-light">Забыли пароль?</router-link>
          </div>
          <div class="col-6 text-right">
            <router-link to="/register" class="text-light">Регистрация</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </section> -->
</template>

<script>
export default {
  data() {
    return {
      user_name: "",
      password: "",
      // user_name_valid: true,
      // password_valid: true,
      // errors: null,
      submitted: false
    };
  },
  computed: {
    loginErrors() {
      return this.$store.state.auth.errors;
    },
    loggingIn() {
      return this.$store.state.loggingIn;
      // return this.$store.state.authentication.status.loggingIn;
    },
    user_name_valid() {
      if (this.errors == null || !this.errors.has("user_name")) {
        return true;
      } else {
        return false;
      }
    },
    password_valid() {
      if (this.errors == null || !this.errors.has("password")) {
        return true;
      } else {
        return false;
      }
    }
  },
  created() {
    // reset login status
    this.$store.dispatch("auth/authLogout");
  },
  methods: {
    handleSubmitLogin() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        this.submitted = true;

        const { dispatch } = this.$store;
        const { user_name, password, user_name_valid, password_valid } = this;

        if (user_name_valid && password_valid) {
          dispatch("auth/authRequest", { user_name, password });
        }
      });
    }
  }
};
</script>

<style>
</style>
