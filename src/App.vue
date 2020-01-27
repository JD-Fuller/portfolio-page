<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./views/Home";
export default {
  name: "App",
  data() {
    return {
      menu: [
        { icon: "home", title: "About" },
        { icon: "info", title: "Projects" },
        { icon: "warning", title: "Warning" }
      ]
    };
  },

  components: {
    Home
  },
  methods: {
    menuItems() {
      return this.menu;
    }
  },

  data: () => ({
    //
  })
};
</script>
<style>
main {
  background-image: url("./assets/gridPaper.jpg");
  background-size: cover;
  filter: invert(1);
}
</style>
