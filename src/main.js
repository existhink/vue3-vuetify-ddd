import { createApp } from 'vue';
import App from './App.vue';
import pinia from '@/modules/app/store';
import autoLoadRoute from '@/modules/app/router';
import vuetify from '@/plugins/vuetify';
import permission from '@/plugins/permission';
import BaseComponentRegister from '@/modules/app/ui/components';
import i18n from './plugins/i18n';

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
  app.use(i18n);

  // Base Components
  BaseComponentRegister(app);

  // Custom callback
  callback && callback(app);

  // Mount
  app.mount('#app');
};

(async function () {
  await AppInit();
})();
