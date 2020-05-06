import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import english from './en.js';
import french from './fr.js';
import canada from './ca.js';

const resources = {
  en: {
    translation: english,
  },
  ca: {
    translation: canada,
  },
  fr: {
    translation: french,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
  });


export default i18n;
