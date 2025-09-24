import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const glassBackground = "rgba(9, 16, 35, 0.82)";
const accentPrimary = "#6fd8ff";
const accentSecondary = "#4e7aff";

export const FormContainer = styled.section`
  position: relative;
  min-height: 100vh;
  padding: clamp(5rem, 8vw, 7rem) clamp(1.5rem, 6vw, 5rem);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: radial-gradient(circle at 12% 18%, rgba(122, 197, 255, 0.14), transparent 58%),
    radial-gradient(circle at 88% 12%, rgba(255, 146, 122, 0.12), transparent 55%),
    linear-gradient(135deg, #030712 0%, #050b19 50%, #040818 100%);
  overflow: hidden;
`;

export const BackgroundGlow = styled(motion.div)`
  position: absolute;
  width: clamp(360px, 45vw, 520px);
  height: clamp(360px, 45vw, 520px);
  background: radial-gradient(circle at center, rgba(116, 189, 255, 0.42), transparent 70%);
  filter: blur(120px);
  opacity: 0.45;
  top: -20%;
  left: -10%;
  pointer-events: none;
`;

export const BackgroundAurora = styled(motion.div)`
  position: absolute;
  width: clamp(420px, 52vw, 640px);
  height: clamp(420px, 52vw, 640px);
  background: radial-gradient(circle at center, rgba(255, 120, 96, 0.2), transparent 72%);
  filter: blur(140px);
  opacity: 0.35;
  bottom: -25%;
  right: -18%;
  pointer-events: none;
`;

export const FormContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: min(960px, 100%);
  display: flex;
  flex-direction: column;
  gap: clamp(1.5rem, 3vw, 2.5rem);
`;

export const BackButtonWrapper = styled.div`
  align-self: flex-start;
`;

export const FormHeader = styled(motion.header)`
  display: grid;
  gap: 0.75rem;
  text-align: left;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.45rem 0.9rem;
  border-radius: 999px;
  background: rgba(80, 129, 255, 0.18);
  border: 1px solid rgba(111, 216, 255, 0.4);
  font-size: 0.78rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: rgba(180, 208, 255, 0.85);
`;

export const BadgeIcon = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(142, 210, 255, 0.45);
  box-shadow: 0 10px 24px rgba(8, 18, 48, 0.45);
`;

export const FormTitle = styled.h1`
  font-size: clamp(2.15rem, 3.6vw, 2.9rem);
  font-weight: 700;
  color: #f5f8ff;
  margin: 0;
  line-height: 1.1;
`;

export const FormSubtitle = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: rgba(205, 216, 255, 0.78);
  max-width: 640px;
  margin: 0;
`;

export const StyledForm = styled(motion.form)`
  background: ${glassBackground};
  border-radius: 28px;
  border: 1px solid rgba(120, 172, 255, 0.24);
  padding: clamp(2rem, 4vw, 2.8rem);
  display: grid;
  gap: clamp(1.8rem, 4vw, 2.4rem);
  box-shadow: 0 30px 70px rgba(4, 10, 28, 0.55);
  backdrop-filter: blur(24px);
`;

export const SectionCard = styled(motion.section)`
  position: relative;
  display: grid;
  gap: 1.35rem;
  padding: clamp(1.4rem, 3vw, 2rem);
  border-radius: 24px;
  background: rgba(7, 13, 30, 0.78);
  border: 1px solid rgba(108, 168, 255, 0.22);
  box-shadow: inset 0 0 0 1px rgba(112, 170, 255, 0.05);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: -35% 40% auto -25%;
    height: 260px;
    background: radial-gradient(circle at center, rgba(125, 211, 255, 0.28), transparent 70%);
    opacity: 0.18;
    transform: rotate(12deg);
    pointer-events: none;
  }
`;

export const SectionHeader = styled.div`
  position: relative;
  display: grid;
  gap: 0.45rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  color: #f2f7ff;
  margin: 0;
`;

export const SectionDescription = styled.p`
  font-size: 0.95rem;
  color: rgba(191, 205, 245, 0.75);
  margin: 0;
`;

export const FieldGrid = styled.div`
  display: grid;
  gap: clamp(1rem, 2.5vw, 1.35rem);
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const FieldWrapper = styled.div<{ $hasError: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 1.05rem 1.1rem 0.85rem;
  background: rgba(6, 12, 26, 0.72);
  border: 1px solid rgba(124, 178, 255, 0.16);
  transition: border 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;

  &:focus-within {
    border-color: rgba(135, 206, 255, 0.9);
    box-shadow: 0 18px 38px rgba(71, 125, 255, 0.22);
    transform: translateY(-2px);
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: rgba(255, 136, 136, 0.85);
      box-shadow: 0 0 0 1px rgba(255, 116, 116, 0.45);
    `}
`;

export const TextInput = styled.input<{ $hasError: boolean }>`
  border: none;
  background: transparent;
  color: #f8fbff;
  font-size: 1rem;
  letter-spacing: 0.01em;
  padding: 1.35rem 0 0.2rem;
  width: 100%;
  z-index: 1;

  &::placeholder {
    color: rgba(198, 211, 246, 0.35);
  }

  &:focus {
    outline: none;
  }

  ${({ $hasError }) =>
    $hasError &&
    css`
      color: #ffe6ea;
    `}
`;

export const FloatingLabel = styled.label<{ $active: boolean; $hasError: boolean }>`
  position: absolute;
  left: 1.1rem;
  top: 1.1rem;
  font-size: 0.95rem;
  color: rgba(198, 211, 246, 0.68);
  pointer-events: none;
  transition: transform 0.25s ease, font-size 0.25s ease, color 0.25s ease, letter-spacing 0.25s ease;

  ${FieldWrapper}:focus-within & {
    transform: translateY(-1.6rem);
    font-size: 0.72rem;
    color: ${accentPrimary};
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  ${({ $active }) =>
    $active &&
    css`
      transform: translateY(-1.6rem);
      font-size: 0.72rem;
      color: ${accentPrimary};
      letter-spacing: 0.08em;
      text-transform: uppercase;
    `}

  ${({ $hasError }) =>
    $hasError &&
    css`
      color: rgba(255, 160, 160, 0.9);
    `}
`;

export const ErrorMessage = styled(motion.span)`
  margin-top: 0.45rem;
  font-size: 0.82rem;
  color: #ff9fb1;
  letter-spacing: 0.015em;
`;

export const SubmitRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SubmitHint = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(195, 207, 245, 0.7);
  max-width: 420px;
`;

export const SubmitTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  max-width: 460px;
`;

export const SubmitTitle = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(129, 198, 255, 0.85);
`;

export const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  padding: 0.85rem 2.55rem;
  border-radius: 999px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  background: linear-gradient(135deg, ${accentPrimary}, ${accentSecondary});
  color: #041126;
  box-shadow: 0 22px 40px rgba(80, 149, 255, 0.35);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    box-shadow: none;
  }
`;

export const ServerMessage = styled(motion.div)<{ $type: "success" | "error" }>`
  padding: 0.95rem 1.3rem;
  border-radius: 18px;
  border: 1px solid
    ${({ $type }) => ($type === "success" ? "rgba(121, 255, 207, 0.35)" : "rgba(255, 138, 138, 0.45)")};
  background: ${({ $type }) =>
    $type === "success"
      ? "rgba(25, 86, 65, 0.55)"
      : "rgba(76, 20, 38, 0.55)"};
  color: ${({ $type }) => ($type === "success" ? "#aaf4d0" : "#ffc4d1")};
  letter-spacing: 0.02em;
  box-shadow: 0 18px 34px rgba(10, 18, 42, 0.42);
`;

export const FormFooterNote = styled.span`
  font-size: 0.82rem;
  color: rgba(188, 202, 241, 0.55);
`;
