import { createRouter, createWebHistory } from "vue-router";
import Edit from "@/views/Edit.vue";
import Main from "@/views/Main.vue";
import UserProfile from "@/views/UserProfile.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/user/:id",
    name: "UserProfile",
    component: UserProfile,
  },
  {
    path: "/edit/:id",
    name: "Edit",
    component: Edit,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
