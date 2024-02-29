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
      path: "/courses",
      name: "CourseIndex",
      component: () => import("../views/courses/CourseIndex.vue"),
    },
    {
      path: "/courses/create",
      name: "CourseCreate",
      component: () => import("../views/courses/CourseCreate.vue"),
    },
    {
      path: "/courses/:id/edit",
      name: "CourseEdit",
      component: () => import("../views/courses/CourseEdit.vue"),
      props: true,
    },
  ],
});

export default router;
