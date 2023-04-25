import React, { useState, useEffect } from "react";
import { getPlayers } from "../../service/players/player.service";
import { Grid, TextField } from "@mui/material";
import { formCreatedDto } from "../../service/players/player.interfase";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%" }}>
        <Grid container spacing={2} sx={{ width: "70%", margin: "auto" }}>
          <Grid item xs={12}>
            <TextField
              id="search"
              label="Buscar"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
            />
          </Grid>
        </Grid>

        <Grid
          container
          spacing={2}
          sx={{
            width: "70%",
            margin: "auto",
            mt: "1rem",
            mb: "1rem",
            pb: "1rem",
            borderBottom: "1px solid #ccc",
          }}
        >
          <Grid item xs={12}>
            <strong>Número de jugadores: {filteredPlayers.length}</strong>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ width: "70%", margin: "auto" }}>
          {filteredPlayers.map((player) => (
            <Grid key={player._id} item xs={12}>
              <div
                style={{
                  border: "1px solid black",
                  padding: "1rem",
                  height: "100%",
                }}
              >
                <h3>
                  {player.nombre} {player.apellido}
                </h3>
                <p>No: {player.No}</p>
                <p>Celular: {player.celular}</p>
                <p>Dirección: {player.direccion}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};


export default PlayerList;
