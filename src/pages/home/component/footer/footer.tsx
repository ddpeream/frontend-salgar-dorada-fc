import {
  FooterContainer,
  FooterContent,
  FooterBrand,
  FooterBadge,
  FooterMeta,
  FooterClub,
  FooterSlogan,
  FooterInfo,
  InfoItem,
  InfoIcon,
  InfoText,
  FooterDivider,
  FooterCredit,
} from "./footer.styled";
import { useAppTranslation } from "../../../../i18n/hooks";
import escudo from "../../../../assets/escudo-sd.jpg";

export const Footer = () => {
  const { t } = useAppTranslation();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <FooterBadge src={escudo} alt="Escudo Salgar Dorada FC" />
          <FooterMeta>
            <FooterClub>{t('home.title')}</FooterClub>
            <FooterSlogan>{t('footer.slogan')}</FooterSlogan>
          </FooterMeta>
        </FooterBrand>

        <FooterInfo>
          <InfoItem>
            <InfoIcon aria-hidden>📍</InfoIcon>
            <InfoText>{t('footer.location')}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon aria-hidden>📞</InfoIcon>
            <InfoText>{t('footer.contact')}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon aria-hidden>🏟️</InfoIcon>
            <InfoText>{t('footer.training')}</InfoText>
          </InfoItem>
        </FooterInfo>
      </FooterContent>

      <FooterDivider aria-hidden />

      <FooterCredit>
        © {new Date().getFullYear()} {t('home.title')} — {t('footer.community')}
      </FooterCredit>
    </FooterContainer>
  );
};
