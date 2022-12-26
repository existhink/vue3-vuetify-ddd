import * as Sentry from '@sentry/vue';
import { BrowserTracing } from '@sentry/tracing';

const SentryInit = (app, router) => {
  Sentry.init({
    app,
    dsn: window.variables.sentryDsn,
    tracesSampleRate: 1.0,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(router),
        tracePropagationTargets: window.variables.sentryTargetUrls,
      }),
    ],
  });
};

export default SentryInit;
