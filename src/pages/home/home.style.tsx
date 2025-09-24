import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: clamp(4rem, 8vw, 6rem);
  padding: clamp(3rem, 6vw, 6rem) clamp(1.5rem, 6vw, 7rem);
  background: radial-gradient(circle at 20% 20%, rgba(34, 96, 246, 0.18), transparent 55%),
    radial-gradient(circle at 80% 0%, rgba(239, 64, 64, 0.12), transparent 50%),
    #04070e;
  color: #f5f7ff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Hero = styled.section`
  position: relative;
  border-radius: 32px;
  overflow: hidden;
  min-height: clamp(460px, 70vh, 720px);
  display: grid;
  align-items: stretch;
  background: linear-gradient(135deg, rgba(7, 12, 24, 0.85), rgba(8, 18, 41, 0.65));
  isolation: isolate;
  box-shadow: 0 28px 60px rgba(7, 12, 24, 0.45);
`;

export const ParallaxImage = styled(motion.div)`
  position: absolute;
  inset: -10%;
  background-size: cover;
  background-position: center;
  filter: saturate(1.2) brightness(0.7);
  z-index: -2;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    120deg,
    rgba(4, 7, 14, 0.85) 20%,
    rgba(4, 7, 14, 0.4) 75%,
    rgba(12, 20, 40, 0.6) 100%
  );
  z-index: -1;
`;

export const HeroContent = styled(motion.div)`
  padding: clamp(2.5rem, 5vw, 4rem);
  display: grid;
  gap: clamp(1.5rem, 3vw, 2.5rem);
  align-content: center;
  max-width: 560px;
`;

export const Accent = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 0.75rem;
  color: #8caaff;
  font-weight: 600;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(2.75rem, 5vw, 3.75rem);
  line-height: 1.05;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(1.05rem, 1.8vw, 1.25rem);
  line-height: 1.6;
  color: rgba(226, 232, 255, 0.8);
  max-width: 480px;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const BaseButton = styled(Link)`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.8rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
`;

export const FilledButton = styled(BaseButton)`
  color: #05070f;
  background: linear-gradient(135deg, #7fe7ff, #4a7dff);
  box-shadow: 0 16px 32px rgba(65, 127, 255, 0.3);

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 26px 44px rgba(65, 127, 255, 0.45);
  }
`;

export const OutlineButton = styled(BaseButton)`
  color: #a6b9ff;
  border: 1px solid rgba(126, 142, 224, 0.6);
  background: rgba(11, 17, 35, 0.45);

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(126, 142, 224, 0.95);
    background: rgba(21, 32, 62, 0.75);
    box-shadow: 0 18px 34px rgba(24, 40, 82, 0.35);
  }
`;

export const StatBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const StatItem = styled.div`
  padding: 1rem 1.2rem;
  backdrop-filter: blur(12px);
  background: rgba(14, 22, 45, 0.5);
  border-radius: 1.2rem;
  border: 1px solid rgba(126, 142, 224, 0.2);
  text-align: left;
`;

export const StatValue = styled.span`
  display: block;
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #7fe7ff;
`;

export const StatLabel = styled.span`
  display: block;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(203, 215, 255, 0.7);
  margin-top: 0.25rem;
`;

export const HighlightsSection = styled.section`
  display: grid;
  gap: 2.5rem;
`;

export const SectionHeading = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 680px;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 3vw, 2.6rem);
  font-weight: 700;
  color: #f8faff;
`;

export const SectionLead = styled.p`
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  color: rgba(198, 208, 255, 0.75);
  line-height: 1.7;
`;

export const HighlightsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const HighlightCard = styled(motion.article)`
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  padding: 2rem;
  background: linear-gradient(160deg, rgba(17, 25, 48, 0.82), rgba(17, 28, 58, 0.62));
  border: 1px solid rgba(127, 163, 255, 0.22);
  backdrop-filter: blur(18px);
  box-shadow: 0 20px 40px rgba(5, 7, 15, 0.35);
`;

export const CardTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.35rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #82a9ff;
  background: rgba(82, 132, 255, 0.12);
`;

export const CardTitle = styled.h3`
  margin-top: 1.4rem;
  font-size: clamp(1.4rem, 2vw, 1.7rem);
  color: #ffffff;
`;

export const CardDescription = styled.p`
  margin-top: 0.8rem;
  color: rgba(208, 219, 255, 0.75);
  line-height: 1.65;
`;

export const CardFooter = styled.div`
  margin-top: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const CardMeta = styled.span`
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(156, 180, 255, 0.55);
`;

export const CardButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #7fe7ff;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  transition: transform 0.3s ease, color 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(8px);
  }
`;

export const CTASection = styled.section`
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  padding: clamp(3rem, 5vw, 4.5rem);
  background: linear-gradient(140deg, rgba(19, 34, 75, 0.9), rgba(50, 94, 201, 0.75));
  box-shadow: 0 24px 48px rgba(9, 16, 33, 0.45);
`;

export const CTAContent = styled.div`
  display: grid;
  gap: 1.25rem;
  max-width: 560px;
  position: relative;
  z-index: 2;
`;

export const CTAAccent = styled.span`
  color: rgba(194, 213, 255, 0.68);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
`;

export const CTATitle = styled.h3`
  font-size: clamp(2rem, 3vw, 2.6rem);
  color: #ffffff;
  line-height: 1.2;
`;

export const CTAText = styled.p`
  color: rgba(218, 227, 255, 0.8);
  font-size: clamp(1rem, 1.5vw, 1.15rem);
  line-height: 1.65;
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.25rem;
`;

export const CTAVisual = styled(motion.div)`
  position: absolute;
  inset: auto 0 -40% 55%;
  width: clamp(220px, 32vw, 320px);
  aspect-ratio: 3 / 4;
  border-radius: 26px;
  background: linear-gradient(160deg, rgba(127, 231, 255, 0.18), rgba(74, 125, 255, 0.05));
  border: 1px solid rgba(138, 196, 255, 0.25);
  filter: blur(0px);
  display: grid;
  place-content: center;
  padding: 1.5rem;
  box-shadow: 0 30px 60px rgba(5, 10, 24, 0.45);
`;

export const CTALogo = styled.img`
  width: 100%;
  height: auto;
  border-radius: 18px;
  object-fit: cover;
`;

export const Divider = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid rgba(128, 155, 242, 0.18);
  margin: 0;
`;

export const SliderSection = styled.section`
  display: grid;
  gap: 2rem;
`;

export const SliderContainer = styled.div`
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  background: rgba(12, 18, 35, 0.75);
  border: 1px solid rgba(96, 132, 222, 0.2);
  box-shadow: 0 24px 60px rgba(4, 6, 14, 0.5);
`;

export const SliderViewport = styled.div`
  position: relative;
  min-height: clamp(320px, 55vh, 460px);
`;

export const SliderItem = styled(motion.figure)`
  position: absolute;
  inset: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  align-items: stretch;
  background: linear-gradient(120deg, rgba(7, 10, 20, 0.75), rgba(12, 19, 36, 0.85));
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(1.15);
`;

export const SliderDetails = styled.div`
  padding: clamp(1.75rem, 3vw, 2.5rem);
  display: grid;
  gap: 0.75rem;
  align-content: center;
`;

export const SliderLabel = styled.span`
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  text-transform: uppercase;
  color: rgba(132, 165, 255, 0.7);
`;

export const SliderTitle = styled.h4`
  font-size: clamp(1.6rem, 2.5vw, 2rem);
  color: #ffffff;
`;

export const SliderText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(205, 214, 255, 0.8);
`;

export const SliderControls = styled.div`
  position: absolute;
  z-index: 5;
  inset: auto 1.75rem 1.75rem auto;
  display: flex;
  gap: 0.75rem;
`;

export const ControlButton = styled.button`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: 1px solid rgba(127, 163, 255, 0.35);
  background: rgba(10, 16, 32, 0.75);
  backdrop-filter: blur(12px);
  color: #d6e0ff;
  cursor: pointer;
  display: grid;
  place-items: center;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: rgba(111, 141, 255, 0.85);
    color: #05070f;
    transform: translateY(-2px);
  }
`;

export const ScrollRevealSection = styled(motion.section)`
  display: grid;
  gap: clamp(1.75rem, 3vw, 2.5rem);
`;
