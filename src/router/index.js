import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage";
import PhotoDetail from "../views/PhotoDetail.vue";
import Favorites from "../views/FavoritesPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/photo/:id", component: PhotoDetail },
  { path: "/favorites", component: Favorites },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
