import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Result from '../components/Result.vue'
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/results/:query',
    name: 'Result',
    component: Result,
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
