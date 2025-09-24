import styled from "styled-components";
import { motion } from "framer-motion";

export const PlayersWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: clamp(4.5rem, 6vw, 7rem) clamp(1.5rem, 6vw, 6rem) clamp(6rem, 8vw, 8rem);
  background: radial-gradient(circle at 12% 20%, rgba(132, 178, 255, 0.14), transparent 55%),
    radial-gradient(circle at 82% 8%, rgba(255, 108, 74, 0.12), transparent 55%),
    linear-gradient(135deg, #04060e, #060c1c 55%, #050b17 100%);
  color: #f1f5ff;
  overflow: hidden;
`;

export const BackdropGlow = styled(motion.div)`
  position: absolute;
  inset: -35% -20% auto;
  height: 120%;
  transform: skewY(-8deg);
  background: radial-gradient(circle at center, rgba(82, 140, 255, 0.35), transparent 65%);
  filter: blur(140px);
  opacity: 0.7;
  z-index: 0;
`;

export const BackdropPulse = styled(motion.div)`
  position: absolute;
  inset: auto -30% -45% -30%;
  height: 80%;
  background: radial-gradient(circle at center, rgba(255, 143, 94, 0.18), transparent 70%);
  filter: blur(160px);
  opacity: 0.6;
  z-index: 0;
`;

export const PlayersContent = styled.div`
  position: relative;
  z-index: 2;
  display: grid;
  gap: clamp(2rem, 4vw, 3.75rem);
  max-width: 1240px;
  margin: 0 auto;
`;

export const HeaderSection = styled(motion.header)`
  display: grid;
  gap: 1rem;
  text-align: left;
`;

export const PageEyebrow = styled.span`
  font-size: 0.78rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(134, 193, 255, 0.85);
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.8rem, 5vw, 3.8rem);
  font-weight: 700;
  color: #ffffff;
  margin: 0;
  line-height: 1.08;
`;

export const PageSubtitle = styled.p`
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.7;
  color: rgba(211, 222, 255, 0.78);
  max-width: 720px;
`;

export const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const SearchWrapper = styled(motion.label)`
  position: relative;
  display: flex;
  align-items: center;
  width: min(420px, 100%);
  background: rgba(9, 14, 30, 0.8);
  border: 1px solid rgba(133, 167, 255, 0.28);
  border-radius: 999px;
  padding: 0.35rem 1.1rem 0.35rem 1.1rem;
  gap: 0.75rem;
  box-shadow: inset 0 0 0 1px rgba(82, 120, 255, 0.08), 0 18px 38px rgba(7, 11, 24, 0.35);
  transition: border 0.3s ease, box-shadow 0.3s ease;

  &:focus-within {
    border-color: rgba(133, 167, 255, 0.65);
    box-shadow: inset 0 0 0 1px rgba(122, 194, 255, 0.35), 0 22px 44px rgba(9, 15, 32, 0.45);
  }
`;

export const SearchIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.9rem;
  height: 1.9rem;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(132, 193, 255, 0.28), rgba(83, 121, 255, 0.32));
  color: #cfe2ff;
  font-size: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  color: #f5f8ff;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  padding: 0.65rem 0;

  &::placeholder {
    color: rgba(195, 205, 238, 0.55);
  }

  &:focus {
    outline: none;
  }
`;

export const ResultSummary = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  color: rgba(189, 203, 247, 0.82);

  @media (min-width: 768px) {
    align-items: flex-end;
    text-align: right;
  }
`;

export const ResultCount = styled.span`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  font-weight: 600;
  color: #7fe7ff;
`;

export const ResultHint = styled.span`
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(179, 193, 238, 0.55);
`;

export const PlayersGrid = styled.div`
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: stretch;
`;

export const PlayerCard = styled(motion.article)`
  position: relative;
  display: grid;
  gap: 1.5rem;
  padding: clamp(1.75rem, 3vw, 2.15rem);
  border-radius: 26px;
  background: linear-gradient(155deg, rgba(17, 28, 55, 0.92), rgba(10, 18, 40, 0.85));
  border: 1px solid rgba(117, 156, 255, 0.24);
  box-shadow: 0 26px 52px rgba(6, 10, 24, 0.45);
  overflow: hidden;
  height: 100%;
  min-height: 360px;
`;

export const CardHalo = styled.div`
  position: absolute;
  inset: -30% -40% auto -40%;
  height: 220px;
  background: radial-gradient(circle at center, rgba(127, 231, 255, 0.2), transparent 70%);
  filter: blur(60px);
  opacity: 0.55;
`;

export const CardTop = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: clamp(1.1rem, 2.5vw, 1.6rem);
  flex-wrap: wrap;
`;

export const PlayerNumber = styled.span`
  font-family: "Space Grotesk", "Poppins", sans-serif;
  font-size: clamp(2.8rem, 4vw, 3.4rem);
  font-weight: 700;
  color: rgba(132, 206, 255, 0.7);
  line-height: 1;
  text-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
`;

export const PlayerAvatar = styled.div`
  position: relative;
  width: clamp(70px, 6vw, 90px);
  height: clamp(70px, 6vw, 90px);
  border-radius: 24px;
  overflow: hidden;
  border: 2px solid rgba(132, 193, 255, 0.45);
  box-shadow: 0 16px 34px rgba(4, 10, 26, 0.45);
  flex-shrink: 0;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const PlayerHeading = styled.div`
  display: grid;
  gap: 0.35rem;
  min-width: 0;
`;

export const PlayerName = styled.h3`
  font-size: clamp(1.35rem, 2vw, 1.65rem);
  font-weight: 600;
  color: #ffffff;
  margin: 0;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const PlayerBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(133, 208, 255, 0.85);
  background: rgba(40, 76, 162, 0.35);
`;

export const PlayerSummary = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(206, 216, 255, 0.76);
  margin: 0;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const PlayerContact = styled.div`
  display: grid;
  gap: 0.65rem;
`;

export const ContactRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
  color: rgba(198, 208, 245, 0.72);
  gap: 0.65rem;
  flex-wrap: wrap;
`;

export const ContactLabel = styled.span`
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
  color: rgba(129, 162, 231, 0.65);
`;

export const ContactValue = styled.span`
  font-weight: 500;
  font-size: 0.95rem;
  color: #f1f5ff;
  flex: 1 1 55%;
  max-width: 65%;
  text-align: right;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const DetailButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.65rem 1.4rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  background: linear-gradient(135deg, #7fe7ff, #4e7aff);
  color: #051024;
  font-weight: 600;
  font-size: 0.92rem;
  letter-spacing: 0.03em;
  box-shadow: 0 18px 36px rgba(76, 133, 255, 0.35);
`;

export const DetailIcon = styled.span`
  display: inline-flex;
  font-weight: 700;
  font-size: 1rem;
`;

export const CardDetails = styled(motion.div)`
  display: grid;
  gap: 0.75rem;
  border-radius: 20px;
  padding: 1rem 1.35rem;
  background: rgba(14, 25, 52, 0.8);
  border: 1px solid rgba(105, 150, 248, 0.22);
  overflow: hidden;
`;

export const DetailsGrid = styled.div`
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
`;

export const DetailColumn = styled.div`
  display: grid;
  gap: 0.35rem;
`;

export const DetailLabel = styled.span`
  text-transform: uppercase;
  font-size: 0.68rem;
  letter-spacing: 0.12em;
  color: rgba(144, 173, 241, 0.6);
`;

export const DetailValue = styled.span`
  font-size: 0.95rem;
  color: rgba(219, 230, 255, 0.86);
  font-weight: 500;
  word-break: break-word;
  overflow-wrap: anywhere;
`;

export const EmptyState = styled(motion.div)`
  display: grid;
  place-items: center;
  gap: 0.75rem;
  padding: clamp(2.5rem, 6vw, 3.5rem);
  border-radius: 24px;
  background: rgba(9, 16, 34, 0.85);
  border: 1px dashed rgba(121, 154, 242, 0.35);
`;

export const EmptyTitle = styled.h3`
  font-size: 1.4rem;
  color: #ffffff;
  margin: 0;
`;

export const EmptySubtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(196, 207, 241, 0.72);
  margin: 0;
  text-align: center;
`;
