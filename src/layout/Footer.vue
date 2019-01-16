<template>
  <v-footer class="justify-space-between" color="primary" dark height="auto">
    <v-layout align-start column px-3 shrink>
      <v-btn
        v-for="(link, i) in links1"
        :key="i"
        block
        class="ma-0 text-capitalize"
        flat
        small
        :to="link.path"
      >
        <v-layout align-center>
          <span v-text="link.name"/>
        </v-layout>
      </v-btn>
    </v-layout>
    <v-spacer/>
    <v-flex
      align-self-end
      pb-3
      text-xs-center
    >&copy; {{ (new Date()).getFullYear() }} ОРГАНИЗАЦИЯ. Все права защищены.</v-flex>
    <v-spacer/>
    <v-layout align-start column shrink pa-3>
      <v-btn
        v-for="(link, i) in links2"
        :key="i"
        block
        class="ma-0 text-capitalize"
        flat
        small
        :to="link.path"
      >
        <v-layout justify-end>
          <span v-text="link.name"/>
        </v-layout>
      </v-btn>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links1: [
      { name: "О нас", path: "/about" },
      { name: "Контакты", path: "/contacts" },
      { name: "Техподдержка", path: "/support" }
    ],
    links2: [
      { name: "Пользовательское соглашение", path: "/rules" },
      { name: "Персональные данные", path: "/personal-data" },
      { name: "Оферта", path: "/offer" }
    ]
  })
};
</script>
