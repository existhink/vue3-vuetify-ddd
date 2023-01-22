import { createI18n } from 'vue-i18n';

const modules = import.meta.glob('/**/*.locale.json');
const messages = {};

for (const path in modules) {
  const matched = path.match(/([A-Za-z0-9-_]+)\./gi);
  if (matched && matched.length > 1) {
    const locale = matched[1].replace('.', '');

    const module = await modules[path]();
    if (!messages?.[locale]) {
      messages[locale] = module.default;
    } else {
      messages[locale] = { ...messages[locale], ...module.default };
    }
  }
}

const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'id',
  fallbackLocale: 'id',
  messages,
  legacy: false,
});

export default i18n;
