import { Grid } from "@mui/material";
import { SearchBar, SearchContainer } from "../list/players.styled";

export const Search = (props: any) => {
    const { searchText, setSearchText } = props;
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
