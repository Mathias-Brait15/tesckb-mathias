import { createRouter, createWebHistory } from "vue-router";
import registerView from "../views/registerView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: registerView,
    },
  ],
});

export default router;
