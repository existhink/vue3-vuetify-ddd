import { LAYOUT } from '@/modules/app/constants/layout.constant';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      layout: LAYOUT.DEFAULT,
    },
    component: () => import('../ui/DashboardUI.vue'),
  },
];

export default routes;
