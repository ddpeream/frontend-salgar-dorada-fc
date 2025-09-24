import { useState, useEffect } from "react";
import { faker } from "@faker-js/faker";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Search } from "../component/search";
import {
  PlayersContainer,
  PlayerCountContainer,
  PlayerCountText,
  PlayersListContainer,
  PlayersContent,
} from "./players.styled";
import PlayerItem from "../component/player-item";
import { formCreatedDto } from "../../../service/players/player.interfase";
import BackButton from "../../../components/back-button";

const generateFakePlayers = (numPlayers: number): formCreatedDto[] => {
  const positions = ["Defensa", "Delantero", "Arquero", "Volante"] as const;
  return Array.from({ length: numPlayers }, () => ({
    _id: faker.string.uuid(),
    nombre: faker.person.firstName(),
    apellido: faker.person.lastName(),
    tipo: positions[faker.number.int({ min: 0, max: positions.length - 1 })],
    No: faker.number.int({ min: 1, max: 99 }).toString(),
    fecha_nacimiento: faker.date.birthdate({ min: 16, max: 35, mode: "age" }),
    direccion: faker.location.streetAddress(),
    telefono: faker.phone.number(),
    celular: faker.phone.number(),
  }));
};

const PlayerList = () => {
  const [players, setPlayers] = useState<formCreatedDto[]>([]);
  const [searchText, setSearchText] = useState("");
  const location = useLocation();

  useEffect(() => {
    const loadPlayers = async () => {
      const data = generateFakePlayers(20);
      setPlayers(data);
    };

    loadPlayers();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") ?? "";
    setSearchText((prev) => (prev === query ? prev : query));
  }, [location.search]);

  const normalizedSearch = searchText.toLowerCase();
  const filteredPlayers = players.filter((player) => {
    const jersey = player.No?.toString().toLowerCase() ?? "";
    return (
      player.nombre.toLowerCase().includes(normalizedSearch) ||
      player.apellido.toLowerCase().includes(normalizedSearch) ||
      jersey.includes(normalizedSearch) ||
      player.celular.toLowerCase().includes(normalizedSearch)
    );
  });

  return (
    <PlayersContainer>
      <PlayersContent>
        <BackButton fallbackPath="/" />
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
      </PlayersContent>
    </PlayersContainer>
  );
};

export default PlayerList;