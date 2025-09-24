import { useTranslation } from 'react-i18next';
import { Language, AVAILABLE_LANGUAGES } from './types';

/**
 * Hook personalizado para manejar traducciones
 */
export const useAppTranslation = () => {
  const { t, i18n } = useTranslation();

  // Función para cambiar idioma
  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  // Obtener idioma actual
  const currentLanguage = i18n.language as Language;

  // Obtener información del idioma actual
  const getCurrentLanguageInfo = () => {
    return AVAILABLE_LANGUAGES.find(lang => lang.code === currentLanguage) || AVAILABLE_LANGUAGES[0];
  };

  return {
    t,
    changeLanguage,
    currentLanguage,
    getCurrentLanguageInfo,
    availableLanguages: AVAILABLE_LANGUAGES,
    isLoading: false,
  };
};

/**
 * Hook para obtener solo la función de traducción
 */
export const useT = () => {
  const { t } = useTranslation();
  return t;
};

/**
 * Hook para manejar solo el cambio de idioma
 */
export const useLanguageSwitch = () => {
  const { i18n } = useTranslation();
  
  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language as Language;

  return {
    changeLanguage,
    currentLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
  };
};