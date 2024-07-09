import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import menuItems from "../components/menuItems.vue";
import ingredients from "../components/menuIngredients.vue";
import addMenuItem from "../components/addMenuItem.vue";
import addIngredient from "../components/addIngredient.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "menuItems",
    component: menuItems,
  },
  {
    path: "/ingredients",
    name: "ingredients",
    component: ingredients,
  },
  {
    path: "/addMenuItem",
    name: "addMenuItem",
    component: addMenuItem,
  },
  {
    path: "/addIngredient",
    name: "addIngredient",
    component: addIngredient,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
