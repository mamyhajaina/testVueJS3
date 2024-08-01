import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import AdminPage from '../views/AdminPage.vue';
import HomePage from '../views/HomePage.vue';

const routes = [
  { path: '/', component: HomePage, name: 'home' },
  { path: '/login', component: LoginPage, name: 'login' },
  { path: '/admin', component: AdminPage, name: 'admin' },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
