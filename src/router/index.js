import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import ProductPage from "../pages/ProductPage.vue";
import ChooseColorPage from "../pages/ChooseColorPage.vue";
import TogglePage from "../pages/TogglePage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/product/:product",
    name: "ProductPage",
    component: ProductPage,
  },
  {
    path: "/choosecolor/:choosecolor",
    name: "ChooseColorPage",
    component: ChooseColorPage,
  },
  {
    path: "/toggle",
    name: "TogglePage",
    component: TogglePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
