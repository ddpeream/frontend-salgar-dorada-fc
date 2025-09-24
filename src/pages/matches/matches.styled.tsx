import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const glassBackground = "rgba(9, 16, 35, 0.82)";
const accentPrimary = "#6fd8ff";
const accentSecondary = "#4e7aff";

export const MatchesWrapper = styled.section`
  position: relative;
  min-height: 100vh;
  padding: clamp(5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: radial-gradient(circle at 20% 25%, rgba(122, 197, 255, 0.12), transparent 55%),
    radial-gradient(circle at 80% 15%, rgba(255, 146, 122, 0.1), transparent 50%),
    linear-gradient(135deg, #030712 0%, #050b19 50%, #040818 100%);
  overflow: hidden;
`;

export const BackdropGlow = styled(motion.div)`
  position: absolute;
  width: clamp(400px, 50vw, 600px);
  height: clamp(400px, 50vw, 600px);
  background: radial-gradient(circle at center, rgba(116, 189, 255, 0.35), transparent 68%);
  filter: blur(130px);
  opacity: 0.4;
  top: -15%;
  left: -8%;
  pointer-events: none;
`;

export const BackdropPulse = styled(motion.div)`
  position: absolute;
  width: clamp(450px, 55vw, 700px);
  height: clamp(450px, 55vw, 700px);
  background: radial-gradient(circle at center, rgba(255, 120, 96, 0.18), transparent 70%);
  filter: blur(150px);
  opacity: 0.3;
  bottom: -20%;
  right: -15%;
  pointer-events: none;
`;

export const MatchesContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: min(1100px, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 4vw, 3rem);
`;

export const HeaderSection = styled(motion.header)`
  display: grid;
  gap: 0.85rem;
  text-align: left;
`;

export const PageEyebrow = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: rgba(80, 129, 255, 0.15);
  border: 1px solid rgba(111, 216, 255, 0.35);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(180, 208, 255, 0.8);
  width: fit-content;
`;

export const PageTitle = styled.h1`
  font-size: clamp(2.2rem, 3.8vw, 3.1rem);
  font-weight: 700;
  color: #f5f8ff;
  margin: 0;
  line-height: 1.1;
`;

export const PageSubtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: rgba(205, 216, 255, 0.75);
  max-width: 700px;
  margin: 0;
`;

export const TournamentSelector = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;

  label {
    color: rgba(205, 216, 255, 0.9);
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.025em;
  }

  select {
    background: rgba(7, 13, 30, 0.8);
    border: 1px solid rgba(108, 168, 255, 0.25);
    border-radius: 12px;
    padding: 0.75rem 1rem;
    color: #f5f8ff;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.2s ease;
    min-width: 280px;
    backdrop-filter: blur(10px);

    &:hover {
      background: rgba(7, 13, 30, 0.9);
      border-color: rgba(108, 168, 255, 0.4);
    }

    &:focus {
      outline: none;
      background: rgba(7, 13, 30, 0.95);
      border-color: rgba(111, 216, 255, 0.6);
      box-shadow: 0 0 0 3px rgba(111, 216, 255, 0.1);
    }

    option {
      background: #0a1628;
      color: #f5f8ff;
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    
    select {
      min-width: 240px;
      padding: 0.625rem 0.75rem;
      font-size: 0.875rem;
    }
  }
`;

export const TabsContainer = styled.div`
  position: relative;
  display: flex;
  background: rgba(7, 13, 30, 0.75);
  border: 1px solid rgba(108, 168, 255, 0.2);
  border-radius: 20px;
  padding: 0.5rem;
  backdrop-filter: blur(20px);
  width: fit-content;
  margin: 0 auto;
  gap: 0;
`;

export const TabIndicator = styled(motion.div)`
  position: absolute;
  top: 0.5rem;
  bottom: 0.5rem;
  background: linear-gradient(135deg, ${accentPrimary}, ${accentSecondary});
  border-radius: 16px;
  z-index: 1;
`;

export const TabButton = styled(motion.button)<{ $isActive: boolean }>`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border: none;
  background: transparent;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  transition: color 0.3s ease;
  white-space: nowrap;
  min-width: 120px;
  flex-shrink: 0;

  color: ${({ $isActive }) => ($isActive ? "#041126" : "rgba(205, 216, 255, 0.7)")};

  span {
    font-size: 1.1rem;
    display: flex;
    align-items: center;
  }

  &:hover {
    color: ${({ $isActive }) => ($isActive ? "#041126" : "rgba(235, 246, 255, 0.9)")};
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.25rem;
    font-size: 0.85rem;
    min-width: 100px;
    
    span {
      font-size: 1rem;
    }
  }
`;

export const SectionContainer = styled.div`
  display: grid;
  gap: 2rem;
`;

export const SectionCard = styled(motion.section)`
  background: ${glassBackground};
  border-radius: 28px;
  border: 1px solid rgba(120, 172, 255, 0.22);
  padding: clamp(2rem, 4vw, 2.8rem);
  display: grid;
  gap: clamp(1.8rem, 4vw, 2.2rem);
  box-shadow: 0 25px 60px rgba(4, 10, 28, 0.5);
  backdrop-filter: blur(24px);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -30% 45% auto -20%;
    height: 200px;
    background: radial-gradient(circle at center, rgba(125, 211, 255, 0.25), transparent 65%);
    opacity: 0.15;
    transform: rotate(15deg);
    pointer-events: none;
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  display: grid;
  gap: 0.5rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.35rem, 2.2vw, 1.7rem);
  color: #f2f7ff;
  margin: 0;
  font-weight: 600;
`;

export const SectionDescription = styled.p`
  font-size: 0.98rem;
  color: rgba(191, 205, 245, 0.72);
  margin: 0;
`;

export const MatchCard = styled(motion.div)`
  position: relative;
  background: rgba(6, 12, 26, 0.65);
  border: 1px solid rgba(124, 178, 255, 0.15);
  border-radius: 20px;
  padding: 1.5rem;
  display: grid;
  gap: 1rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(135, 206, 255, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(71, 125, 255, 0.15);
  }
`;

export const MatchDate = styled.div`
  font-size: 0.85rem;
  color: rgba(185, 206, 240, 0.7);
  text-transform: capitalize;
  letter-spacing: 0.05em;
`;

export const MatchTeams = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
`;

export const TeamInfo = styled.div<{ $isHome: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  ${({ $isHome }) => $isHome ? 'justify-content: flex-start;' : 'justify-content: flex-end; flex-direction: row-reverse;'}
`;

export const TeamLogo = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  object-fit: cover;
  border: 1px solid rgba(142, 210, 255, 0.4);
  box-shadow: 0 8px 20px rgba(8, 18, 48, 0.4);
`;

export const TeamName = styled.span`
  font-weight: 600;
  color: #f4f6ff;
  font-size: 0.95rem;
`;

export const MatchVs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MatchResult = styled.div`
  text-align: center;
`;

export const ScoreDisplay = styled.span`
  font-size: 1.4rem;
  font-weight: 700;
  color: ${accentPrimary};
  text-shadow: 0 4px 12px rgba(111, 216, 255, 0.3);
`;

export const MatchStatus = styled.span<{ $color: string }>`
  display: inline-block;
  padding: 0.35rem 0.8rem;
  border-radius: 12px;
  background: rgba(${({ $color }) => $color === "#4ade80" ? "74, 222, 128" : $color === "#60a5fa" ? "96, 165, 250" : "245, 158, 11"}, 0.15);
  border: 1px solid rgba(${({ $color }) => $color === "#4ade80" ? "74, 222, 128" : $color === "#60a5fa" ? "96, 165, 250" : "245, 158, 11"}, 0.4);
  color: ${({ $color }) => $color};
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

export const MatchDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.85rem;
  color: rgba(195, 207, 245, 0.65);
  
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`;

export const MatchVenue = styled.span``;

export const MatchTime = styled.span``;

export const TableContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid rgba(124, 178, 255, 0.15);
  background: rgba(6, 12, 26, 0.5);
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr repeat(8, 60px);
  background: rgba(80, 129, 255, 0.12);
  border-bottom: 1px solid rgba(124, 178, 255, 0.2);
  padding: 0.75rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(180, 208, 255, 0.9);
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

export const TableRow = styled(motion.div)<{ $isOurTeam: boolean }>`
  display: grid;
  grid-template-columns: 50px 1fr repeat(8, 60px);
  align-items: center;
  padding: 0.85rem 0;
  border-bottom: 1px solid rgba(124, 178, 255, 0.08);
  transition: all 0.3s ease;
  
  ${({ $isOurTeam }) => $isOurTeam && css`
    background: rgba(111, 216, 255, 0.08);
    border-bottom-color: rgba(111, 216, 255, 0.2);
    
    &:hover {
      background: rgba(111, 216, 255, 0.12);
    }
  `}

  &:hover {
    background: rgba(124, 178, 255, 0.06);
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const TableCell = styled.div<{ $isPositive?: boolean; $isPoints?: boolean }>`
  text-align: center;
  font-size: 0.9rem;
  color: #f4f6ff;
  
  ${({ $isPositive }) => $isPositive && css`
    color: #4ade80;
  `}
  
  ${({ $isPoints }) => $isPoints && css`
    font-weight: 600;
    color: ${accentPrimary};
  `}
`;

export const TeamPosition = styled.div<{ $position: number }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0 auto;
  
  ${({ $position }) => {
    if ($position <= 3) {
      return css`
        background: linear-gradient(135deg, #fbbf24, #f59e0b);
        color: #92400e;
      `;
    } else if ($position <= 6) {
      return css`
        background: rgba(34, 197, 94, 0.15);
        color: #22c55e;
        border: 1px solid rgba(34, 197, 94, 0.3);
      `;
    } else {
      return css`
        background: rgba(71, 85, 105, 0.3);
        color: #cbd5e1;
      `;
    }
  }}
`;

export const TeamData = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding-left: 1rem;
  font-weight: 500;
  color: #f4f6ff;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 1.2rem;
  margin-top: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(124, 178, 255, 0.15);
`;

export const StatItem = styled.div`
  text-align: center;
  padding: 1rem;
  background: rgba(6, 12, 26, 0.6);
  border-radius: 16px;
  border: 1px solid rgba(124, 178, 255, 0.1);
`;

export const StatValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${accentPrimary};
  margin-bottom: 0.3rem;
`;

export const StatLabel = styled.div`
  font-size: 0.85rem;
  color: rgba(191, 205, 245, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;