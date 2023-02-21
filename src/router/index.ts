import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/festival/:id",
      name: "festival",
      component: () => import("../views/ArtisteView.vue"),
      props: true,
    },
    {
      path: "/formulaire/:id",
      name: "formulaire",
      component: () => import("../views/FormView.vue"),
      props: true,
    },
    {
      path: "/recap/:id",
      name: "recap",
      component: () => import("../views/RecapView.vue"),
      props: true,
      
    }


  ],
});

export default router;
