import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLanguageSwitch } from '../../i18n/hooks';
import {
  LanguageSelectorContainer,
  LanguageButton,
  LanguageDropdown,
  LanguageOption,
  LanguageFlag,
  LanguageName,
  ChevronIcon,
} from './language-selector.styled';

interface LanguageSelectorProps {
  position?: 'header' | 'footer' | 'inline';
  showLabels?: boolean;
  compact?: boolean;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  position = 'header',
  showLabels = true,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { changeLanguage, currentLanguage, availableLanguages } = useLanguageSwitch();

  const currentLangInfo = availableLanguages.find(lang => lang.code === currentLanguage) || availableLanguages[0];

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode as any);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <LanguageSelectorContainer $position={position} $compact={compact}>
      <LanguageButton
        onClick={toggleDropdown}
        $isOpen={isOpen}
        $compact={compact}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <LanguageFlag>{currentLangInfo.flag}</LanguageFlag>
        {showLabels && !compact && (
          <LanguageName>{currentLangInfo.name}</LanguageName>
        )}
        <ChevronIcon $isOpen={isOpen}>
          ⌄
        </ChevronIcon>
      </LanguageButton>

      <AnimatePresence>
        {isOpen && (
          <LanguageDropdown
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {availableLanguages.map((language) => (
              <LanguageOption
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                $isSelected={language.code === currentLanguage}
                whileHover={{ backgroundColor: 'rgba(108, 168, 255, 0.1)' }}
                whileTap={{ scale: 0.98 }}
              >
                <LanguageFlag>{language.flag}</LanguageFlag>
                <LanguageName>{language.name}</LanguageName>
              </LanguageOption>
            ))}
          </LanguageDropdown>
        )}
      </AnimatePresence>
    </LanguageSelectorContainer>
  );
};