import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/DrawingTableView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/FormComponent.vue')
    }
  ]
});

export default router;

