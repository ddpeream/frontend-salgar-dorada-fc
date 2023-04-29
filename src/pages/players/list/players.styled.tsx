import { Grid, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const PlayersContainer = styled.div`
  display: flex;
  justify-content: space-between;

  & > div {
    width: 100%;
  }

  & .info {
    width: 70%;
    margin: auto;
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: #f2f2f2;
    border-radius: 4px;

    & strong {
      font-size: 1.2rem;
    }
  }

  & .player-grid {
    width: 70%;
    margin: auto;
  }

  & .player-item {
    background-color: #f5f5f5;
    border-radius: 4px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    transition: all 0.3s ease-in-out;

    & h3 {
      margin-bottom: 0.5rem;
    }

    & p {
      margin: 0;
    }
  }
`;

export const SearchContainer = styled(Grid)`
  position: fixed;
  top: 2%;
  left: 51.5%;
  transform: translateX(-50%);
  max-width: 70%;
  margin-top: 2rem;
  z-index: 999;

  @media (max-width: 600px) {
    max-width: 90%;
  }
`;

export const SearchBar = styled(TextField)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  & .MuiOutlinedInput-notchedOutline {
    border-color: #ccc;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: #aaa;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: #aaa;
  }

  & .MuiInputBase-input {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: #333;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  & .MuiInputLabel-root {
    font-size: 16px;
    font-weight: 500;
    color: #333;
    transform: translate(14px, 15px) scale(1);
  }
`;

export const PlayerCountContainer = styled.div`
  width: 60%;
  margin: auto;
  margin-top: 5rem; /* ajustar según preferencia */
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 4px;
`;

export const PlayerCountText = styled.strong`
  font-size: 1.2rem;
`;

export const PlayersListContainer = styled.div`
  width: 70%;
  margin: auto;
`;

export const PlayerGrid = styled(Grid)`
  margin: 0 !important;
`;

export const PlayerLink = styled(Link)`
  text-decoration: none;
  outline: none;
`;

export const PlayerCard = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const PlayerName = styled.h3`
  margin-bottom: 0.5rem;
`;

export const PlayerInfo = styled.p`
  margin: 0;
`;
