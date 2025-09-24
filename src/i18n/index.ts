import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importar archivos de traducción
import esTranslations from './translations/es.json';
import enTranslations from './translations/en.json';

// Configurar recursos de traducción
const resources = {
  es: {
    translation: esTranslations,
  },
  en: {
    translation: enTranslations,
  },
};

i18n
  // Detectar idioma del navegador
  .use(LanguageDetector)
  // Pasar la instancia de i18n a react-i18next
  .use(initReactI18next)
  // Inicializar i18next
  .init({
    resources,
    lng: 'es', // idioma por defecto
    fallbackLng: 'es', // idioma de respaldo
    
    detection: {
      // Orden de detección de idioma
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Cache en localStorage
      caches: ['localStorage'],
    },

    interpolation: {
      // React ya es seguro de XSS
      escapeValue: false,
    },

    // Configuración para desarrollo
    debug: process.env.NODE_ENV === 'development',
  });

export default i18n;
