import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterLogo,
  FooterSocialMedia,
  FooterSocialMediaLink,
  FooterText,
} from "./footer.styled";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo src="logo.png" alt="Logo" />
      <FooterLinks>
        <FooterLink to="/">Inicio</FooterLink>
        <FooterLink to="/players">Plantilla</FooterLink>
        <FooterLink to="/form">Inscripción</FooterLink>
      </FooterLinks>
      <FooterSocialMedia>
        <FooterSocialMediaLink href="#">
          <i className="fab fa-facebook fa-lg" />
        </FooterSocialMediaLink>
        <FooterSocialMediaLink href="#">
          <i className="fab fa-twitter fa-lg" />
        </FooterSocialMediaLink>
        <FooterSocialMediaLink href="#">
          <i className="fab fa-instagram fa-lg" />
        </FooterSocialMediaLink>
        <FooterSocialMediaLink href="#">
          <i className="fab fa-linkedin fa-lg" />
        </FooterSocialMediaLink>
      </FooterSocialMedia>
      <FooterText>
        &copy; 2023 Salgar Dorada FC. All rights reserved.
      </FooterText>
    </FooterContainer>
  );
};
