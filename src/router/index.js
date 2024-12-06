import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import MainPage from "@/components/MainPage.vue";

const routes = [
    {
        path: '/',
        name: 'Main',
        component: MainPage,
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
