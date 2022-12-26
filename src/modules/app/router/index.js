import { createRouter, createWebHistory } from 'vue-router';
import { AppCommonEntryPoint, AppCommonNotFound } from '@/modules/app/ui/components/common';

/**
 * Autoload route
 * Will read file with prefix .route.js
 */
const autoLoadRoute = async () => {
  const routes = [];
  const modules = import.meta.glob('/**/*.route.js');
  for (const path in modules) {
    const module = await modules[path]();
    routes.push(...module.default);
  }

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      // Entry Point
      {
        path: '/',
        component: AppCommonEntryPoint,
      },

      // Auto register routes
      ...routes,

      // Not Found
      {
        path: '/:catchAll(.*)',
        component: AppCommonNotFound,
      },
    ],
  });

  router.beforeEach(() => {
    //
  });

  return router;
};
export default autoLoadRoute;
