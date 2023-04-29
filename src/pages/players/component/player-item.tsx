import React from "react";
import {
  PlayerGrid,
  PlayerLink,
  PlayerCard,
  PlayerName,
  PlayerInfo,
} from "../list/players.styled";

const PlayerItem = (props: any) => {
    const { player } = props
  return (
    <PlayerGrid key={player._id} item xs={12}>
      <PlayerLink to={`/players/${player._id}`} state={{ _id: player._id }}>
        <PlayerCard>
          <PlayerName>
            {player.nombre} {player.apellido}
          </PlayerName>
          <PlayerInfo>
            <strong>No:</strong> {player.No}
          </PlayerInfo>
          <PlayerInfo>
            <strong>Celular:</strong> {player.celular}
          </PlayerInfo>
          <PlayerInfo>
            <strong>Dirección:</strong> {player.direccion}
          </PlayerInfo>
        </PlayerCard>
      </PlayerLink>
    </PlayerGrid>
  );
};

export default PlayerItem;
