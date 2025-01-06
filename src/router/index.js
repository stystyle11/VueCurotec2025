import { createRouter, createWebHistory } from 'vue-router';

import { useUserStore } from '../stores/user';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/board',
      name: 'board',
      component: () => import('../views/DrawingTableView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../components/FormComponent.vue')
    }
  ]
});

// Add navigation guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();

  // Check localStorage
  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    const parsedUser = JSON.parse(storedUser);
    if (parsedUser.isLoggedIn) {
      userStore.initializeStore();
    }
  }

  // Check authentication for protected routes
  if (to.meta.requiresAuth && !userStore.isLoggedIn) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;

