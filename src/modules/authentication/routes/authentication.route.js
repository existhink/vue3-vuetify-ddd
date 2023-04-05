// Components
import AppBaseWrapper from '@/modules/app/ui/components/base/AppBaseWrapper.vue';

// Constant
import { LAYOUT } from '@/modules/app/constants/layout.constant';

const routes = [
  {
    path: '/authentication',
    component: AppBaseWrapper,
    children: [
      {
        path: 'login',
        name: 'authenticationLogin',
        component: () => import('../ui/AuthenticationLoginUI.vue'),
        meta: {
          layout: LAYOUT.AUTHENTICATION,
        },
      },
      {
        path: 'register',
        name: 'authenticationRegister',
        component: () => import('../ui/AuthenticationRegisterUI.vue'),
        meta: {
          layout: LAYOUT.AUTHENTICATION,
        },
      },
      {
        path: 'forgot-password',
        name: 'authenticationForgotPassword',
        component: () => import('../ui/AuthenticationForgotPasswordUI.vue'),
        meta: {
          layout: LAYOUT.AUTHENTICATION,
        },
      },
      {
        path: 'reset-password',
        name: 'authenticationResetPassword',
        component: () => import('../ui/AuthenticationResetPasswordUI.vue'),
        meta: {
          layout: LAYOUT.AUTHENTICATION,
        },
      },
    ],
  },
];

export default routes;
