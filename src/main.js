import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

//* l'équivalent de redux pour la gestion d'un store global, pas encore testé
// app.use(createPinia())

//* branchement de notre router
app.use(router);

app.mount("#app");
