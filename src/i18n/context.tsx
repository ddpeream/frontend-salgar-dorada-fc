import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Language, AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from './types';

interface I18nContextType {
  currentLanguage: Language;
  changeLanguage: (language: Language) => void;
  availableLanguages: typeof AVAILABLE_LANGUAGES;
  t: (key: string, options?: any) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

interface I18nProviderProps {
  children: ReactNode;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    // Configurar el idioma inicial
    const initLanguage = () => {
      const savedLanguage = localStorage.getItem('i18nextLng');
      const browserLanguage = navigator.language.split('-')[0] as Language;
      
      let initialLanguage = DEFAULT_LANGUAGE;
      
      if (savedLanguage && AVAILABLE_LANGUAGES.some(lang => lang.code === savedLanguage)) {
        initialLanguage = savedLanguage as Language;
      } else if (AVAILABLE_LANGUAGES.some(lang => lang.code === browserLanguage)) {
        initialLanguage = browserLanguage;
      }
      
      if (i18n.language !== initialLanguage) {
        i18n.changeLanguage(initialLanguage);
      }
      
      setIsLoading(false);
    };

    // Esperar a que i18n esté listo
    if (i18n.isInitialized) {
      initLanguage();
    } else {
      i18n.on('initialized', initLanguage);
    }

    return () => {
      i18n.off('initialized', initLanguage);
    };
  }, [i18n]);

  const changeLanguage = (language: Language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language as Language;

  const contextValue: I18nContextType = {
    currentLanguage,
    changeLanguage,
    availableLanguages: AVAILABLE_LANGUAGES,
    t,
    isLoading,
  };

  return (
    <I18nContext.Provider value={contextValue}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18nContext = () => {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18nContext must be used within an I18nProvider');
  }
  return context;
};