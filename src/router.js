import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home';
import Matches from '@/views/Matches';
import MatchInfo from '@/views/MatchInfo';

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
  },
  {
    path: '/matches/:id',
    name: 'MatchInfo',
    component: MatchInfo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
