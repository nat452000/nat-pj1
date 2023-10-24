import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";
// import "aos/dist/aos.scss";
import "./app.scss";

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

const app = createApp(App);
app.use(router);
app.mount("#app");
