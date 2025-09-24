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
import escudo from "../../../../assets/escudo-sd.jpg";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterBrand>
          <FooterBadge src={escudo} alt="Escudo Salgar Dorada FC" />
          <FooterMeta>
            <FooterClub>Salgar Dorada FC</FooterClub>
            <FooterSlogan>Pasi&oacute;n dorada que ilumina el Magdalena Medio.</FooterSlogan>
          </FooterMeta>
        </FooterBrand>

        <FooterInfo>
          <InfoItem>
            <InfoIcon aria-hidden>📍</InfoIcon>
            <InfoText>Medellín &nbsp;•&nbsp; Unidad Deportiva de Belén</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon aria-hidden>📞</InfoIcon>
            <InfoText>+57 604 555 2200 &nbsp;|&nbsp; contacto@salgar-dorada-fc.com</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoIcon aria-hidden>🏟️</InfoIcon>
            <InfoText>Entrenamientos martes y jueves · 8:00 p.m. - 10:00 p.m.</InfoText>
          </InfoItem>
        </FooterInfo>
      </FooterContent>

      <FooterDivider aria-hidden />

      <FooterCredit>
        © {new Date().getFullYear()} Salgar Dorada FC — Comunidad, talento y compromiso.
      </FooterCredit>
    </FooterContainer>
  );
};
