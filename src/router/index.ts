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
            path: "/start",
            name: "start",
            component: () => import("../views/start/CreateKeueView.vue"),
        },
        {
            path: "/app/:app/keue/:id",
            name: "keue",
            component: () => import("../views/keue/KeueView.vue"),
        },
    ],
});

export default router;
