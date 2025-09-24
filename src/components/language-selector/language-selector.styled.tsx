import styled from 'styled-components';
import { motion } from 'framer-motion';

const primaryBlue = '#6CA8FF';
const lightBlue = 'rgba(108, 168, 255, 0.1)';
const textPrimary = '#CDD8FF';
const textSecondary = 'rgba(205, 216, 255, 0.7)';

export const LanguageSelectorContainer = styled.div<{
  $position: 'header' | 'footer' | 'inline';
  $compact: boolean;
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  z-index: 100;

  ${({ $position }) => {
    switch ($position) {
      case 'header':
        return `
          margin-left: auto;
        `;
      case 'footer':
        return `
          margin: 0;
        `;
      case 'inline':
        return `
          margin: 0.5rem 0;
        `;
      default:
        return '';
    }
  }}

  ${({ $compact }) =>
    $compact &&
    `
    scale: 0.9;
  `}
`;

export const LanguageButton = styled(motion.button)<{
  $isOpen: boolean;
  $compact: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: ${({ $compact }) => ($compact ? '0.375rem 0.75rem' : '0.5rem 1rem')};
  background: rgba(7, 13, 30, 0.8);
  border: 1px solid rgba(108, 168, 255, 0.3);
  border-radius: 12px;
  color: ${textPrimary};
  font-size: ${({ $compact }) => ($compact ? '0.8rem' : '0.9rem')};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  min-width: ${({ $compact }) => ($compact ? '60px' : '100px')};

  &:hover {
    background: rgba(7, 13, 30, 0.9);
    border-color: rgba(108, 168, 255, 0.5);
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    border-color: ${primaryBlue};
    box-shadow: 0 0 0 3px rgba(108, 168, 255, 0.2);
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    background: rgba(7, 13, 30, 0.95);
    border-color: ${primaryBlue};
  `}
`;

export const LanguageDropdown = styled(motion.div)`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(7, 13, 30, 0.95);
  border: 1px solid rgba(108, 168, 255, 0.3);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  min-width: 140px;
`;

export const LanguageOption = styled(motion.div)<{
  $isSelected: boolean;
}>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  cursor: pointer;
  color: ${textPrimary};
  transition: all 0.2s ease;
  border-bottom: 1px solid rgba(108, 168, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: ${lightBlue};
    color: ${primaryBlue};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    `
    background: ${lightBlue};
    color: ${primaryBlue};
    font-weight: 600;
  `}
`;

export const LanguageFlag = styled.span`
  font-size: 1.2rem;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LanguageName = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
`;

export const ChevronIcon = styled.span<{ $isOpen: boolean }>`
  font-size: 0.8rem;
  color: ${textSecondary};
  transition: transform 0.2s ease;
  margin-left: auto;

  ${({ $isOpen }) =>
    $isOpen &&
    `
    transform: rotate(180deg);
  `}
`;