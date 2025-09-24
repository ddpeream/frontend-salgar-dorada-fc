import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";
import { getPlayerById } from "../../../service/players/player.service";
import BackButton from "../../../components/back-button";

const PlayerProfile = () => {
  const [player, setPlayer] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const playerId = (location.state as { _id?: string } | undefined)?._id;
  const navigate = useNavigate();

  useEffect(() => {
    if (!playerId) {
      navigate("/players");
      return;
    }

    const fetchPlayer = async (id: string) => {
      try {
        const playerData = await getPlayerById(id);
        setPlayer(playerData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error al obtener jugador:", error);
        setIsLoading(false);
      }
    };
    fetchPlayer(playerId);
  }, [navigate, playerId]);

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  return (
    <Box p={3}>
      <BackButton fallbackPath="/players" />
      <Paper sx={{ padding: 3 }}>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Avatar src={player.fotoPerfil || ''} alt="Player Profile" sx={{ width: 200, height: 200 }} />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', marginTop: 2, marginBottom: 1 }}>
              {`${player.nombre} ${player.apellido}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>No: {player.No}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>Celular: {player.celular}</Typography>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" justifyContent="center">
              <Typography variant="h6" sx={{ color: 'text.secondary' }}>Dirección: {player.direccion}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
   
};

export default PlayerProfile;
