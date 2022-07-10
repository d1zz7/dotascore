import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import Matches from '@/views/Matches';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/matches',
    name: 'Matches',
    component: Matches,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
