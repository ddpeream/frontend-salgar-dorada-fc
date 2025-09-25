import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Main = styled(motion.main)`
  min-height: 100vh;
  background: radial-gradient(circle at top left, #0b1f4b 0%, #070c1a 55%, #020307 100%);
  color: #f8fafc;
`;

export const Hero = styled(motion.section)`
  position: relative;
  overflow: hidden;
  padding: clamp(120px, 18vh, 200px) 0 120px;
`;

export const HeroBackdrop = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 15% 20%, rgba(13, 110, 253, 0.32), transparent 45%),
    radial-gradient(circle at 85% 15%, rgba(16, 185, 129, 0.18), transparent 50%),
    radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.22), transparent 45%);
  filter: blur(0px);
  opacity: 0.9;
`;

export const HeroGrid = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(1.5rem, 5vw, 3.5rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: clamp(2rem, 6vw, 4rem);
  align-items: center;
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 4vw, 2.75rem);
`;

export const HeroBadge = styled(motion.span)`
  align-self: flex-start;
  padding: 0.75rem 1.4rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.18);
  backdrop-filter: blur(12px);
  font-size: 0.82rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #dbeafe;
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(2.8rem, 5vw, 4.5rem);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-shadow: 0 20px 40px rgba(8, 47, 73, 0.35);
`;

export const HeroHighlight = styled(motion.p)`
  font-size: clamp(1.05rem, 2vw, 1.3rem);
  color: #c7d2fe;
  max-width: 32rem;
  line-height: 1.7;
`;

export const HeroGlass = styled(motion.div)`
  position: relative;
  border-radius: 28px;
  padding: clamp(2rem, 3vw, 2.75rem);
  background: rgba(10, 20, 40, 0.65);
  border: 1px solid rgba(148, 163, 184, 0.15);
  box-shadow: 0 35px 60px rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(24px);
  display: grid;
  gap: 1.75rem;
`;

export const HeroSubtitle = styled.h2`
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  margin: 0;
  font-weight: 600;
  color: #e2e8f0;
`;

export const HeroDivider = styled.div`
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #38bdf8 0%, #818cf8 50%, #f472b6 100%);
  border-radius: 999px;
`;

export const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1.25rem;
`;

export const StatCard = styled(motion.div)`
  padding: 1.4rem 1.6rem;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.2);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const StatValue = styled.span`
  font-size: clamp(1.8rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #f8fafc;
  letter-spacing: -0.02em;
`;

export const StatLabel = styled.span`
  font-size: 0.92rem;
  color: #cbd5f5;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const Content = styled(motion.div)`
  position: relative;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(1.75rem, 5vw, 3.5rem) 120px;
  display: flex;
  flex-direction: column;
  gap: clamp(3rem, 8vw, 6rem);
`;

export const SectionShell = styled(motion.section)`
  position: relative;
  border-radius: 40px;
  padding: clamp(2.5rem, 6vw, 4rem);
  background: rgba(8, 15, 35, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.12);
  box-shadow: 0 25px 65px rgba(8, 11, 29, 0.45);
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: radial-gradient(circle at top right, rgba(129, 140, 248, 0.12), transparent 55%),
      radial-gradient(circle at bottom left, rgba(236, 72, 153, 0.12), transparent 55%);
    opacity: 0.9;
  }
`;

export const SectionForeground = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(1.8rem, 4vw, 2.75rem);
`;

export const SectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  max-width: 720px;
`;

export const SectionEyebrow = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: #38bdf8;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  margin: 0;
  font-weight: 700;
  color: #f8fafc;
`;

export const SectionDescription = styled.p`
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: #cbd5f5;
  margin: 0;
  line-height: 1.7;
`;

export const TwoColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(1.8rem, 4vw, 3rem);
  align-items: start;
`;

export const NarrativeCard = styled(motion.div)`
  padding: clamp(1.5rem, 3vw, 2.1rem);
  border-radius: 28px;
  background: rgba(11, 19, 43, 0.85);
  border: 1px solid rgba(148, 163, 184, 0.16);
  backdrop-filter: blur(22px);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;

export const NarrativeTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #a5b4fc;
`;

export const NarrativeTitle = styled.h3`
  margin: 0;
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 600;
  color: #e2e8f0;
`;

export const NarrativeText = styled.p`
  font-size: 1rem;
  color: #bcc6f7;
  line-height: 1.6;
`;

export const FounderGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.4rem, 4vw, 2.5rem);
`;

export const FounderCard = styled(motion.div)`
  position: relative;
  padding: 1.75rem;
  border-radius: 24px;
  background: rgba(11, 23, 52, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 20px 45px rgba(7, 11, 31, 0.45);
  backdrop-filter: blur(18px);
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
`;

export const FounderBadge = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #38bdf8;
`

export const FounderName = styled.h4`
  font-size: 1.15rem;
  margin: 0;
  color: #f8fafc;
`;

export const FounderRole = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #c7d2fe;
`;

export const FounderPeriod = styled.span`
  font-size: 0.82rem;
  color: #94a3b8;
`;

export const MemorialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: clamp(1.4rem, 4vw, 2.5rem);
`;

export const MemorialCard = styled(motion.div)`
  background: rgba(15, 23, 42, 0.72);
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 24px;
  padding: 1.8rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top right, rgba(148, 163, 184, 0.15), transparent 60%);
    pointer-events: none;
  }
`;

export const MemorialTitle = styled.h4`
  font-size: 1.1rem;
  margin: 0 0 0.6rem;
  color: #e2e8f0;
`;

export const MemorialText = styled.p`
  font-size: 0.95rem;
  color: #cbd5f5;
  margin: 0 0 0.8rem;
`;

export const MemorialFootnote = styled.span`
  font-size: 0.85rem;
  color: #94a3b8;
`;

export const TimelineMatrix = styled.div`
  display: grid;
  gap: 1.6rem;
`;

export const TimelineRow = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(120px, 160px) 1fr;
  gap: 1.6rem;
  align-items: center;
  padding: 1.4rem 1.8rem;
  border-radius: 24px;
  background: rgba(12, 21, 47, 0.78);
  border: 1px solid rgba(148, 163, 184, 0.16);

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineBadge = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1rem;
  border-radius: 999px;
  font-size: 0.9rem;
  color: #f8fafc;
  background: linear-gradient(90deg, rgba(129, 140, 248, 0.35) 0%, rgba(236, 72, 153, 0.35) 100%);
`;

export const TimelineTitle = styled.h4`
  font-size: 1.15rem;
  margin: 0 0 0.4rem;
  color: #f8fafc;
`;

export const TimelineCaption = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #cbd5f5;
`;

export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
`;

export const ValueCard = styled(motion.div)`
  padding: 1.8rem 1.6rem;
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.75);
  border: 1px solid rgba(96, 165, 250, 0.2);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const ValueIcon = styled.span`
  font-size: 1.6rem;
`;

export const ValueTitle = styled.h4`
  margin: 0;
  font-size: 1.1rem;
  color: #f1f5f9;
`;

export const ValueDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: #c7d2fe;
`;

export const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: clamp(1.25rem, 3vw, 2rem);
`;

export const AchievementCard = styled(motion.div)`
  padding: 1.6rem 1.4rem;
  border-radius: 20px;
  background: rgba(12, 23, 50, 0.82);
  border: 1px solid rgba(56, 189, 248, 0.18);
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const AchievementTitle = styled.h4`
  font-size: 1.05rem;
  margin: 0;
  color: #bae6fd;
`;

export const AchievementText = styled.p`
  margin: 0;
  font-size: 0.92rem;
  color: #cbd5f5;
  line-height: 1.6;
`;

export const CTASection = styled(motion.section)`
  position: relative;
  overflow: hidden;
  border-radius: 36px;
  background: linear-gradient(135deg, rgba(14, 165, 233, 0.18) 0%, rgba(129, 140, 248, 0.18) 50%, rgba(236, 72, 153, 0.22) 100%);
  border: 1px solid rgba(148, 163, 184, 0.16);
  padding: clamp(2.8rem, 6vw, 4rem);
  box-shadow: 0 35px 80px rgba(7, 17, 33, 0.55);
`;

export const CTAWrapper = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  max-width: 680px;
`;

export const CTATitle = styled.h3`
  margin: 0;
  font-size: clamp(1.75rem, 3vw, 2.4rem);
  color: #ffffff;
`;

export const CTAText = styled.p`
  margin: 0;
  font-size: 1rem;
  color: #e5edff;
  line-height: 1.7;
`;

export const CTAButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.65rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
  text-decoration: none;
  color: #0b1221;
  background: rgba(248, 250, 252, 0.95);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.25);
  }
`;

export const CTAButtonGhost = styled(CTAButton)`
  background: transparent;
  color: #f4f4ff;
  border: 1px solid rgba(248, 250, 252, 0.35);
`;

export const CTAOrnament = styled(motion.div)`
  position: absolute;
  inset: -20% -10% auto auto;
  width: clamp(280px, 30vw, 420px);
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, rgba(248, 250, 252, 0.28), transparent 65%);
  filter: blur(0px);
`;

export const SectionMarker = styled.span`
  font-size: 0.72rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #94a3b8;
`;

export const GradientStroke = styled.div`
  height: 1px;
  width: 100%;
  background: linear-gradient(90deg, rgba(56, 189, 248, 0) 0%, rgba(56, 189, 248, 0.45) 35%, rgba(236, 72, 153, 0.45) 65%, rgba(236, 72, 153, 0) 100%);
`;

export const GlowAccent = styled(motion.div)`
  position: absolute;
  inset: auto 5% -60px auto;
  width: clamp(180px, 20vw, 240px);
  height: 140px;
  background: linear-gradient(180deg, rgba(96, 165, 250, 0.4) 0%, rgba(129, 140, 248, 0.18) 100%);
  filter: blur(45px);
`;

export const ScrollHint = styled.span`
  font-size: 0.75rem;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: rgba(148, 163, 184, 0.75);
`;
