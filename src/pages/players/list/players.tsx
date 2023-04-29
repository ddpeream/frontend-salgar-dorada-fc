import { useState, useEffect } from "react";
import { getPlayers } from "../../../service/players/player.service";
import { Grid } from "@mui/material";
import { formCreatedDto } from "../../../service/players/player.interfase";
import { Search } from '../component/search'
import {
  PlayersContainer,
  PlayerCountContainer,
  PlayerCountText,
  PlayersListContainer,
  PlayerGrid,
  PlayerLink,
  PlayerCard,
  PlayerName,
  PlayerInfo,
} from "./players.styled";
import PlayerItem from "../component/player-item";

const PlayerList = () => {
  const [players, setPlayers] = useState<formCreatedDto[]>([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const loadPlayers = async () => {
      const data = await getPlayers();
      setPlayers(data);
    };

    loadPlayers();
  }, []);

  const filteredPlayers = players.filter(
    (player) =>
      player.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
      player.apellido.toLowerCase().includes(searchText.toLowerCase()) ||
      player.No.toLowerCase().includes(searchText.toLowerCase()) ||
      player.celular.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <PlayersContainer style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%" }}>        
      <Search searchText={searchText} setSearchText={setSearchText} />

        <PlayerCountContainer>
          <Grid item xs={12} sm={6}>
            <PlayerCountText>
              Número de jugadores: {filteredPlayers.length}
            </PlayerCountText>
          </Grid>
        </PlayerCountContainer>

        <PlayersListContainer>
          <Grid container spacing={2}>
            {filteredPlayers.map((player) => (
              <PlayerItem key={player._id} player={player} />
            ))}
          </Grid>
        </PlayersListContainer>
      </div>
    </PlayersContainer>
  );
};

export default PlayerList;
