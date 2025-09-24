import { Button } from "@mui/material";
import styled from "styled-components";

export const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
`;

export const StyledBackButton = styled(Button)`
  color: #0a3d62;
  border-color: #0a3d62;
  text-transform: none;
  font-weight: 600;
  letter-spacing: 0.5px;
  background-color: rgba(10, 61, 98, 0.05);

  &:hover {
    background-color: rgba(10, 61, 98, 0.12);
    border-color: #0a3d62;
  }
`;
