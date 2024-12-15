import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/components/LoginPage.vue';
import MainPage from "@/components/MainPage.vue";
import registerPage from "@/components/RegisterPage.vue";
import ResetPassword from "@/components/ResetPassword.vue";
import UserProfile from "@/components/UserProfile.vue";
import WeeklySurvey from "@/components/WeeklySurvey.vue";
import HolidayCalendar from "@/components/HolidayCalendar.vue";
import AiChat from "@/components/AiChat.vue";

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
        component:ResetPassword,
    },
    {
        path: "/user-profile",
        name: "UserProfile",
        component:UserProfile,
    },
    {
        path: "/survey",
        name: "WeeklySurvey",
        component:WeeklySurvey,
    },
    {
        path: "/calendar",
        name: "HolidayCalendar",
        component:HolidayCalendar,
    },
    {
        path: "/ai-chat",
        name: "AiChat",
        component:AiChat,
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
