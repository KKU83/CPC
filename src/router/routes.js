import Home from "../views/Home.vue";
import Components from "../views/Components.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Recover from "../views/Recover.vue";
import NewPassword from "../views/NewPassword.vue";
// import Profile from "../views/Profile.vue";
// import About from "../views/About.vue";

export const routes = [
  {
    path: "/login",
    name: "login",
    components: {
      default: Login
    }
  },
  {
    path: "/register",
    name: "register",
    components: {
      default: Register
    }
  },
  {
    path: "/recover",
    name: "recover",
    components: {
      default: Recover
    }
  },
  {
    path: "/newpassword",
    name: "newpassword",
    components: {
      default: NewPassword
    }
  },
  {
    path: "/",
    name: "home",
    components: {
      default: Home
    }
  },
  {
    path: "/components",
    name: "components",
    components: {
      default: Components
    }
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  },
  {
    path: "/contacts",
    name: "contacts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Contacts.vue")
    }
  },
  {
    path: "/support",
    name: "support",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Support.vue")
    }
  },
  {
    path: "/offer",
    name: "offer",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Offer.vue")
    }
  },
  {
    path: "/personal-data",
    name: "personal-data",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/PersonalData.vue")
    }
  },
  {
    path: "/tariffs",
    name: "tariffs",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Tariffs.vue")
    }
  },

  {
    path: "/rules",
    name: "rules",
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Rules.vue")
    }
  },
  {
    path: "/profile",
    name: "profile",
    components: {
      default: () =>
        import(/* webpackChunkName: "about" */ "../views/Profile.vue")
    }
  }
];
