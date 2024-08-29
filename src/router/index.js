import { createRouter, createWebHistory } from "vue-router";
import Edit from "@/views/Edit.vue";
import Main from "@/views/Main.vue";
import UserProfile from "@/views/UserProfile.vue";
import Create from "@/views/Create.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
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
