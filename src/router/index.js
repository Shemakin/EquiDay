import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import ProfilePage from '@/components/ProfilePage.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: HomePage },
    { path: '/profile', component: ProfilePage }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
