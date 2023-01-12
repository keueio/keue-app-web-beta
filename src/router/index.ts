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
            path: "/login",
            name: "login",
            component: () => import("../views/auth/LoginView.vue"),
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("../views/auth/LogoutView.vue"),
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
