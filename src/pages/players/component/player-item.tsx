import React from "react";
import {
  PlayerGrid,
  PlayerLink,
  PlayerCard,
  PlayerName,
  PlayerInfo,
} from "../list/players.styled";
import { formCreatedDto } from "../../../service/players/player.interfase";

interface PlayerItemProps {
  player: formCreatedDto;
}

const PlayerItem: React.FC<PlayerItemProps> = ({ player }) => {
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
