import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;

// @ts-ignore
new Vue({
  router,
  store,
  vuetify,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
