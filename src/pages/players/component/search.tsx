import React from "react";
import { SearchWrapper, SearchIcon, SearchInput } from "../list/players.styled";

interface SearchProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchText, setSearchText }) => (
  <SearchWrapper
    htmlFor="player-search"
    initial={{ opacity: 0, y: 18 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.01 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <SearchIcon aria-hidden>🔍</SearchIcon>
    <SearchInput
      id="player-search"
      name="player-search"
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
      placeholder="Buscar jugador por nombre o dorsal"
      autoComplete="off"
      aria-label="Buscar jugador por nombre o número"
    />
  </SearchWrapper>
);
