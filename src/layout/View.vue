<template>
  <v-content class="pt-5">
    <v-fade-transition mode="out-in">
      <router-view/>
    </v-fade-transition>
  </v-content>
</template>

<script>
export default {
  metaInfo() {
    return {
      titleTemplate: "%s — Alpha Theme"
    };
  },

  watch: {
    $route: function() {
      this.$vuetify.goTo(0);
    }
  }
};
</script>
