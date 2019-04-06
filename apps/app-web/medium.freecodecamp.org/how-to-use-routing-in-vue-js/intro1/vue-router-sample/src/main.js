// https://vuejs.org/v2/api/
import Vue from "vue";
import App from "./App";
import router from "./router";

Vue.config.productionTip = false;

let options = {
  render: h => h(App),
  router
};

new Vue(options).$mount("#app");
