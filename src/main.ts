import Vue from "vue";
import App from "./App.vue";

(App as any).mpType = "app";
Vue.config.productionTip = false;

const app = new Vue({
  ...App,
});

app.$mount();
