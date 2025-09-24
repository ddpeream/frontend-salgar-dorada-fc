import React from 'react';
import { useAppTranslation } from '../../i18n/hooks';
import { LanguageSelector } from '../language-selector';
import { formatDate, formatTime } from '../../i18n/utils';

/**
 * Componente de ejemplo que demuestra cómo usar el sistema de traducciones
 * Este componente puede ser usado como referencia para implementar traducciones en otros componentes
 */
export const TranslationExample: React.FC = () => {
  const { t, currentLanguage } = useAppTranslation();

  const currentDate = new Date();

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1>{t('common.example')}</h1>
        <LanguageSelector />
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h2>{t('navigation.home')}</h2>
        <p>{t('home.welcome')}</p>
        <p>{t('home.description')}</p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>{t('common.loading')}</h3>
        <p>
          <strong>{t('common.search')}:</strong> {t('players.search')}
        </p>
        <p>
          <strong>{t('common.save')}:</strong> {t('form.save')}
        </p>
        <p>
          <strong>{t('common.cancel')}:</strong> {t('form.cancel')}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>Formateo de fechas y tiempo</h3>
        <p>
          <strong>Fecha actual:</strong> {formatDate(currentDate, currentLanguage)}
        </p>
        <p>
          <strong>Hora actual:</strong> {formatTime(currentDate, currentLanguage)}
        </p>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>{t('documentTypes.cc')}</h3>
        <ul>
          <li>{t('documentTypes.cc')}</li>
          <li>{t('documentTypes.ti')}</li>
          <li>{t('documentTypes.ce')}</li>
          <li>{t('documentTypes.passport')}</li>
        </ul>
      </div>

      <div style={{ marginBottom: '2rem' }}>
        <h3>{t('positions.goalkeeper')}</h3>
        <ul>
          <li>{t('positions.goalkeeper')}</li>
          <li>{t('positions.defender')}</li>
          <li>{t('positions.midfielder')}</li>
          <li>{t('positions.forward')}</li>
        </ul>
      </div>

      <div style={{ 
        background: 'rgba(108, 168, 255, 0.1)', 
        padding: '1rem', 
        borderRadius: '8px',
        border: '1px solid rgba(108, 168, 255, 0.3)'
      }}>
        <h4>Información del idioma actual:</h4>
        <p><strong>Código:</strong> {currentLanguage}</p>
        <p><strong>Texto de ejemplo:</strong> {t('footer.allRightsReserved')}</p>
      </div>
    </div>
  );
};