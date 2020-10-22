import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { RouterMount } from "uni-simple-router";

Vue.config.productionTip = false;

const app = new Vue({
  ...App,
});

RouterMount(app, "#app");
