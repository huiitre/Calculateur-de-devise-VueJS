import { createRouter, createWebHistory } from "vue-router";

//? pas besoin vu qu'on va compiler le module sous android
// import NotFoundView from "@/views/NotFoundView.vue";

//* Création de notre router
const router = createRouter({
  //* https://router.vuejs.org/guide/essentials/history-mode.html
  history: createWebHistory(process.env.BASE_URL),
  //* Nos routes
  //* Les routes appellent des "composants", moi j'appelle des composants "view"
  //* qui viennent du dossier du même nom
  //* on aurait pu appeler ce dossier "page" que ça serait le même principe
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/ConverterView.vue"),
    },
    //* Route pour la 404 (paramètres d'url sont déclarés plus bas)
    //? pas besoin vu qu'on va compiler le module sous android
    /* {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: NotFoundView,
    }, */
  ],
});
//* En gros, avant que la route ne se finalise, on check ses paramètres
//? pas besoin vu qu'on va compiler le module sous android
/* router.resolve({
  name: "not-found",
  params: { pathMatch: "not/found" },
}).href; */
export default router;
