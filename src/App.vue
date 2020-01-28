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
  background-color: rgb(47, 47, 47);
  /* background-image: url("./assets/desk-view.jpg"); */
  background-size: cover;
  /* -webkit-filter: grayscale(4); */
  /* filter: grayscale(4);
  -webkit-filter: brightness(0.5);
  filter: brightness(0.5); */
}
</style>
