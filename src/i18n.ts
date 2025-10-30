import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    uk: { translation: {} },
    en: { translation: {} },
  },
  lng: 'en',
  fallbackLng: 'uk',
  interpolation: { escapeValue: false },
});

export default i18n;
