<template>
  <v-app>
    <core-toolbar/>
    <core-view/>
    <core-footer/>
    <!-- <router-view name="header"></router-view>
    <main>
      <fade-transition origin="center" mode="out-in" :duration="250">
        <router-view/>
      </fade-transition>
    </main>
    <router-view name="footer"></router-view> -->
  </v-app>
</template>

<script>
// import { FadeTransition } from "vue2-transitions";

export default {
  name: "App",
  components: {
    // FadeTransition,
    CoreToolbar: () => import("@/layout/Toolbar"),
    CoreView: () => import("@/layout/View"),
    CoreFooter: () => import("@/layout/Footer")
  },
  data() {
    return {
      //
    };
  }
};
</script>
