import { Grid } from "@mui/material";
import { SearchBar, SearchContainer } from "../list/players.styled";

interface SearchProps {
  searchText: string;
  setSearchText: (value: string) => void;
}

export const Search: React.FC<SearchProps> = ({ searchText, setSearchText }) => {
  return (
    <SearchContainer container spacing={2}>
      <Grid item xs={12}>
        <SearchBar
          id="search"
          label="Buscar"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
      </Grid>
    </SearchContainer>
  );
};
