import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import MainPage from "@/components/MainPage.vue";
import registerPage from "@/components/RegisterPage.vue";
import ResetPasword from "@/components/ResetPasword.vue";
import UserProfile from "@/components/UserProfile.vue";

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
    {
        path: "/register",
        name: "RegisterPage",
        component: registerPage,
    },
    {
        path: "/reset-password",
        name: "ResetPassword",
        component:ResetPasword,
    },
    {
        path: "/user-profile",
        name: "UserProfile",
        component:UserProfile,
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
