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
          <form @submit.prevent="handleSubmitNewPassword">
            <v-text-field
              v-model="password"
              v-validate="'required|min:6'"
              :error-messages="errors.collect('password')"
              label="Пароль"
              data-vv-name="password"
              type="password"
              ref="password"
            ></v-text-field>
            <v-text-field
              v-model="password_confirm"
              v-validate="'required|confirmed:password'"
              :error-messages="errors.collect('password_confirm')"
              label="Повтор пароля"
              data-vv-name="password_confirm"
              type="password"
            ></v-text-field>
            <v-btn
              block
              outline
              color="primary"
              type="submit"
            >сохранить</v-btn>
            <div v-if="registerErrors.length">
              <ul>
                <li v-for="error in registerErrors" :key="error" class="text-warning">{{error}}</li>
              </ul>
            </div>
          </form>
        </card>
        <div class="row mt-3">
          <div class="col-6">
            <router-link to="/register" class="text-light">Регистрация</router-link>
          </div>
          <div class="col-6 text-right">
            <router-link to="/login" class="text-light">Уже регистрировались</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user_name: "",
      password: "",
      password_confirm: "",
      rules_agreement: false,
      // user_name_valid: true,
      // password_valid: true,
      // password_confirm_valid: true,
      // errors: null,
      submitted: false
    };
  },
  computed: {
    registerErrors() {
      return this.$store.state.auth.errors;
    },
    registering() {
      return this.$store.state.registering;
      // return this.$store.state.authentication.status.loggingIn;
    },
    user_name_error() {
      return this.errors.first("user_name");
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
    },
    password_confirm_valid() {
      if (this.errors == null || !this.errors.has("password_confirm")) {
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
    handleSubmitRegister() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }

        this.submitted = true;

        const { dispatch } = this.$store;
        const {
          user_name,
          password,
          user_name_valid,
          password_valid,
          password_confirm_valid
        } = this;

        if (user_name_valid && password_valid && password_confirm_valid) {
          dispatch("auth/registerRequest", { user_name, password });
        }
      });
    }
  }
};
</script>
<style>
</style>
