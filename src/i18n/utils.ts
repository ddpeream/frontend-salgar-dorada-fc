import { Language } from './types';

/**
 * Formatea fechas según el idioma actual
 */
export const formatDate = (date: Date | string, language: Language, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const locale = language === 'es' ? 'es-ES' : 'en-US';
  
  return dateObj.toLocaleDateString(locale, { ...defaultOptions, ...options });
};

/**
 * Formatea números según el idioma actual
 */
export const formatNumber = (number: number, language: Language, options?: Intl.NumberFormatOptions): string => {
  const locale = language === 'es' ? 'es-ES' : 'en-US';
  
  return number.toLocaleString(locale, options);
};

/**
 * Formatea tiempo según el idioma actual
 */
export const formatTime = (date: Date | string, language: Language, options?: Intl.DateTimeFormatOptions): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const locale = language === 'es' ? 'es-ES' : 'en-US';
  
  return dateObj.toLocaleTimeString(locale, { ...defaultOptions, ...options });
};

/**
 * Obtiene el formato de fecha corta según el idioma
 */
export const getShortDateFormat = (language: Language): string => {
  return language === 'es' ? 'dd/MM/yyyy' : 'MM/dd/yyyy';
};

/**
 * Pluralización manual para casos específicos
 */
export const pluralize = (count: number, singular: string, plural: string, language: Language): string => {
  if (language === 'es') {
    return count === 1 ? singular : plural;
  } else {
    return count === 1 ? singular : plural;
  }
};

/**
 * Obtiene el separador decimal según el idioma
 */
export const getDecimalSeparator = (language: Language): string => {
  return language === 'es' ? ',' : '.';
};

/**
 * Obtiene el separador de miles según el idioma
 */
export const getThousandsSeparator = (language: Language): string => {
  return language === 'es' ? '.' : ',';
};

/**
 * Convierte texto a título según las reglas del idioma
 */
export const toTitleCase = (text: string, language: Language): string => {
  return text.toLowerCase().replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
};

/**
 * Obtiene el código de idioma del navegador
 */
export const getBrowserLanguage = (): Language => {
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'es' ? 'es' : 'en';
};

/**
 * Valida si un código de idioma es soportado
 */
export const isValidLanguage = (language: string): language is Language => {
  return language === 'es' || language === 'en';
};