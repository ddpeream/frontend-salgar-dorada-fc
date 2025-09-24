import React from "react";
import { SearchWrapper, SearchIcon, SearchInput } from "../list/players.styled";
import { useAppTranslation } from "../../../i18n/hooks";

interface SearchProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  searchText,
  setSearchText,
}) => {
  const { t } = useAppTranslation();

  const placeholder = t("players.searchPlaceholder");
  const ariaLabel = t("players.searchAriaLabel");

  return (
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(e.target.value)
        }
        placeholder={placeholder}
        autoComplete="off"
        aria-label={ariaLabel}
      />
    </SearchWrapper>
  );
};
