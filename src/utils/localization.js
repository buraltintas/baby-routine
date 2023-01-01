import * as i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import tr from '../languages/tr.json';
import en from '../languages/en.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'tr',
  lng: 'tr',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    tr: {
      translation: tr,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
