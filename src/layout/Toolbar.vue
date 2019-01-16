<template>
  <header>
    <v-toolbar app color="accent">
      <v-container fill-height mx-auto pa-0>
        <v-layout align-center>
          <v-toolbar-side-icon v-if="$vuetify.breakpoint.smAndDown" @click="toggleDrawer"/>
          <router-link slot="brand" to="/">
            <!-- <v-img src="img/brand/blue.png" contain class="mr-5" max-width="120" width="120"/> -->
            <!-- <v-img src="img/brand/blue.png" contain class="mr-5" max-width="120" width="120"/> -->
            <v-btn flat color="white" :to="'/'"><big>ЛОГО</big></v-btn>
          </router-link>
          <div class="grow hidden-sm-and-down">
            <v-menu
              attach
              close-delay="0"
              content-class="elevation-0"
              open-on-hover
              offset-y
              bottom
              right
            >
              <v-btn slot="activator" color="white" flat>Услуги</v-btn>
              <v-list color="info"> 
                <v-list-tile v-for="(item, index) in items" :key="index" :to="item.path">
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile>
              </v-list>
            </v-menu>
            <v-btn :to="'/tariffs'" color="white" flat>Тарифы</v-btn>
          </div>
        </v-layout>
      </v-container>
      <v-spacer/>
      <v-btn v-show="loggedIn" flat icon color="white" :to="'/profile'">
        <v-icon>settings</v-icon>
      </v-btn>
      <v-btn v-show="loggedIn" flat icon color="white" :to="'/logout'">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
      <v-btn v-show="!loggedIn" flat icon color="white" :to="'/login'">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
import { mapMutations } from "vuex";
// import BaseNav from "@/components/BaseNav";
// import CloseButton from "@/components/CloseButton";

export default {
  data: () => ({
    isScrolling: false,
    items: [
      { title: "Выписка ЕГРН", path: "/" },
      { title: "Запросы выписки по дому", path: "/" },
      { title: "Подготовка документов для собрания", path: "/" },
      { title: "Подписка на обновления прав", path: "/" }
    ]
  }),

  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  },

  methods: {
    ...mapMutations(["toggleDrawer"]),
    onScroll() {
      this.isScrolling =
        (window.pageYOffset || document.documentElement.scrollTop || 0) > 100;
    }
  },

  components: {
    // BaseNav,
    // CloseButton
  }
};
</script>
<style>
</style>
