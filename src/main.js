import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/modules/app/store';
import autoLoadRoute from '@/modules/app/router';
import vuetify from '@/plugins/vuetify';
import permission from '@/plugins/permission';
import BaseComponentRegister from '@/modules/app/ui/components';
import KeycloakInit from '@/plugins/keycloak';
import SentryInit from '@/plugins/sentry';
import { useAuthStore } from '@/modules/auth/store/auth.store';
import '@/modules/app/helper/autoload-helper';
import '@mdi/font/scss/materialdesignicons.scss';
import '@/modules/app/assets/styles/custom.scss';

const AppInit = async (callback = null) => {
  const app = createApp(App);

  // Autoload Route
  const router = await autoLoadRoute();

  // Libraries
  app.use(pinia);
  app.use(router);
  app.use(vuetify);
  app.use(permission);

  // Base Components
  BaseComponentRegister(app);

  // Custom callback
  callback && callback(app);

  // Sentry
  if (window.variables.sentryEnable) {
    SentryInit(app, router);
  }

  // Mount
  app.mount('#app');
};

(async function () {
  if (window.variables.keycloakEnable) {
    await KeycloakInit(async keycloak => {
      await AppInit(app => {
        // Once keycloak has loaded successfully, inject a keycloak instance for use in the component
        app.provide('keycloak', keycloak);

        // Instance auth store
        const store = useAuthStore();

        // Update current keycloak token to store
        store.$patch({ auth_token: keycloak.token });

        // If the refresh changes successfully, the token will be updated in the store
        keycloak.onAuthRefreshSuccess = () => {
          store.$patch({ auth_token: keycloak.token });
        };
      });
    });
  } else {
    await AppInit();
  }
})();
