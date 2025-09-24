import 'react-i18next';
import { TranslationKeys } from '../types';

// Extender el módulo react-i18next con nuestros tipos personalizados
declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation';
    resources: {
      translation: TranslationKeys;
    };
    returnNull: false;
  }
}