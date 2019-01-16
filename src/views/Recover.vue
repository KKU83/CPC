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
          <template>
            <form role="form">
              <v-text-field
                v-model="user_name"
                v-validate="'required'"
                :error-messages="errors.collect('user_name')"
                label="Имя пользователя"
                data-vv-name="user_name"
              ></v-text-field>
              <v-btn block outline color="primary" type="submit">Восстановить пароль</v-btn>
            </form>
          </template>
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
export default {};
</script>
<style>
</style>
