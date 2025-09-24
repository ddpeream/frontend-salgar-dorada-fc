import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  padding: clamp(2.5rem, 6vw, 3.5rem);
  background: linear-gradient(160deg, rgba(5, 10, 22, 0.96), rgba(12, 24, 46, 0.92));
  border-top: 1px solid rgba(116, 189, 255, 0.18);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
  color: rgba(224, 236, 255, 0.86);
`;

export const FooterContent = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 720px) {
    grid-template-columns: minmax(220px, 1fr) minmax(280px, 2fr);
    align-items: center;
    justify-content: space-between;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const FooterBadge = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  object-fit: cover;
  border: 1px solid rgba(118, 187, 255, 0.35);
  box-shadow: 0 18px 40px rgba(10, 20, 44, 0.45);
`;

export const FooterMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const FooterClub = styled.span`
  font-size: 1.05rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #f4f6ff;
`;

export const FooterSlogan = styled.span`
  font-size: 0.92rem;
  color: rgba(185, 206, 240, 0.75);
`;

export const FooterInfo = styled.div`
  display: grid;
  gap: 0.75rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.94rem;
  color: rgba(203, 218, 248, 0.78);
`;

export const InfoIcon = styled.span`
  font-size: 1.1rem;
  filter: drop-shadow(0 6px 16px rgba(118, 187, 255, 0.35));
`;

export const InfoText = styled.span`
  line-height: 1.45;
`;

export const FooterDivider = styled.span`
  display: block;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, rgba(118, 187, 255, 0), rgba(118, 187, 255, 0.45), rgba(118, 187, 255, 0));
`;

export const FooterCredit = styled.small`
  text-align: center;
  font-size: 0.82rem;
  color: rgba(189, 205, 235, 0.6);
`;
