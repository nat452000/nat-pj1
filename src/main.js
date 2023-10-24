import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "./app.scss";
import Aos from "aos";

const app = createApp(App);
app.use(router);
app.use(Aos)
app.mount("#app");
