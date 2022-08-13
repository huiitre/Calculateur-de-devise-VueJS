import { createRouter, createWebHistory } from "vue-router";

// import HomeView from '@/views/HomeView.vue'
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/convertisseur",
      name: "convertisseur",
      component: () => import("@/views/ConverterView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});
router.resolve({
  name: "not-found",
  params: { pathMatch: "not/found" },
}).href;
export default router;
