import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
} from "vue-router";
import Home from "@/views/home.vue";
import About from "@/views/about.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "about",
        component: About,
    },
    {
        path: "/async",
        name: "async",
        component: () => import("@/views/async.vue"), // 懒加载组件
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;