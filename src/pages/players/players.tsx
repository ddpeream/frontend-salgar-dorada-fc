import React, { useState, useEffect } from 'react';
import { getPlayers } from '../../service/players/player.service';
import { Grid, TextField } from '@mui/material';
import { formCreatedDto } from '../../service/players/player.interfase';

const PlayerList = () => {
  const [players, setPlayers] = useState<formCreatedDto[]>([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const loadPlayers = async () => {
      const data = await getPlayers();
      setPlayers(data);
    };

    loadPlayers();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
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
      <Grid container spacing={2} sx={{ display: 'flex', flexDirection: 'column' }}>
        {players
          .filter(
            (player) =>
              player.nombre.toLowerCase().includes(searchText.toLowerCase()) ||
              player.apellido.toLowerCase().includes(searchText.toLowerCase()) ||
              player.No.toLowerCase().includes(searchText.toLowerCase()) ||
              player.celular.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((player) => (
            <Grid key={player.No} item xs={12} sx={{ width: '70%', height: '50vh' }}>
              <div style={{ border: '1px solid black', padding: '1rem', height: '100%' }}>
                <h3>{player.nombre} {player.apellido}</h3>
                <p>No: {player.No}</p>
                <p>Celular: {player.celular}</p>
                <p>Direccion: {player.direccion}</p>
              </div>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default PlayerList;
