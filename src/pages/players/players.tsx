import React, { useState, useEffect } from "react";
import { getPlayers } from "../../service/players/player.service";
import { Grid, TextField } from "@mui/material";
import { formCreatedDto } from "../../service/players/player.interfase";
import { Link } from "react-router-dom";

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
        <Grid
          container
          spacing={2}
          sx={{ width: "70%", margin: "auto", mt: "1rem" }}
        >
          <Grid item xs={12}>
            <TextField
              id="search"
              label="Buscar"
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              sx={{
                backgroundColor: "white",
                borderRadius: "4px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ccc",
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#aaa",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#aaa",
                },
                "& .MuiInputBase-input": {
                  fontSize: "16px",
                  fontWeight: "500",
                  lineHeight: "24px",
                  color: "#333",
                  paddingTop: "15px",
                  paddingBottom: "15px",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#333",
                  transform: "translate(14px, 15px) scale(1)",
                },
              }}
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
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            backgroundColor: "#f2f2f2",
            borderRadius: "4px",
          }}
        >
          <Grid item xs={12} sm={6}>
            <strong style={{ fontSize: "1.2rem" }}>
              Número de jugadores: {filteredPlayers.length}
            </strong>
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ width: "70%", margin: "auto" }}>
          {filteredPlayers.map((player) => (
            <Grid key={player._id} item xs={12}>
              <Link
                to={`/players/${player._id}`}
                state={{ _id: player._id }}
                style={{ textDecoration: "none", outline: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "#f5f5f5",
                    borderRadius: "4px",
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                    padding: "1rem",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  <h3 style={{ marginBottom: "0.5rem" }}>
                    {player.nombre} {player.apellido}
                  </h3>
                  <p style={{ margin: 0 }}>No: {player.No}</p>
                  <p style={{ margin: 0 }}>Celular: {player.celular}</p>
                  <p style={{ margin: 0 }}>Dirección: {player.direccion}</p>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PlayerList;
