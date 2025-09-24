import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #212121;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
`;

export const FooterLogo = styled.img`
  width: 100px;
  margin-bottom: 16px;
`;

export const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 16px;
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const FooterSocialMediaLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin: 0 16px;
`;

export const FooterText = styled.p`
  margin-bottom: 16px;
`;
