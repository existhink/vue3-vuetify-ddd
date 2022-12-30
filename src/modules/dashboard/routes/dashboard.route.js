import { LAYOUT } from '@/modules/app/constants/layout.constant';
import { PERMISSION } from '@/modules/app/constants/permission.constant';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {
      layout: LAYOUT.DEFAULT,
      breadcrumb: 'Dashboard',
      permission: [PERMISSION.DASHBOARD.READ],
    },
    component: () => import('../ui/DashboardUI.vue'),
  },
];

export default routes;
