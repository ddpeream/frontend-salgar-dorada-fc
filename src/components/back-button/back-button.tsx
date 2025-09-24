import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { ReactNode, useCallback } from "react";
import { BackButtonWrapper, StyledBackButton } from "./back-button.styled";

interface BackButtonProps {
  fallbackPath?: string;
  label?: string;
  icon?: ReactNode;
  className?: string;
}

export const BackButton = ({
  fallbackPath = "/",
  label = "Volver",
  icon,
  className,
}: BackButtonProps) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    if (window.history.length > 2) {
      navigate(-1);
    } else {
      navigate(fallbackPath);
    }
  }, [fallbackPath, navigate]);

  return (
    <BackButtonWrapper className={className}>
      <StyledBackButton
        variant="outlined"
        size="small"
        startIcon={icon ?? <ArrowBackIcon />}
        onClick={handleClick}
      >
        {label}
      </StyledBackButton>
    </BackButtonWrapper>
  );
};

export default BackButton;
