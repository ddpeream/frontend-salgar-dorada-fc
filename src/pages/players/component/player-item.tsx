import React from "react";
import { AnimatePresence } from "framer-motion";
import {
  PlayerCard,
  CardHalo,
  CardTop,
  PlayerNumber,
  PlayerAvatar,
  AvatarImage,
  PlayerHeading,
  PlayerName,
  PlayerBadge,
  PlayerSummary,
  PlayerContact,
  ContactRow,
  ContactLabel,
  ContactValue,
  CardFooter,
  DetailButton,
  DetailIcon,
  CardDetails,
  DetailsGrid,
  DetailColumn,
  DetailLabel,
  DetailValue,
} from "../list/players.styled";
import { formCreatedDto } from "../../../service/players/player.interfase";

interface PlayerItemProps {
  player: formCreatedDto;
  index: number;
}

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
  hover: {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -32,
    scale: 0.98,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
};

const buttonVariants = {
  hover: { scale: 1.04 },
  tap: { scale: 0.96 },
};

const PlayerItem: React.FC<PlayerItemProps> = ({ player, index }) => {
  const [expanded, setExpanded] = React.useState(false);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const formattedBirth = React.useMemo(() => {
    if (!player.fecha_nacimiento) {
      return "Sin registro";
    }

    return new Intl.DateTimeFormat("es-CO", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    }).format(new Date(player.fecha_nacimiento));
  }, [player.fecha_nacimiento]);

  const avatarSource = React.useMemo(() => {
    if (player.avatarUrl) {
      return player.avatarUrl;
    }

    const seed = player._id ?? `${player.nombre}-${player.apellido}`;
    return `https://i.pravatar.cc/300?u=${encodeURIComponent(seed)}`;
  }, [player.avatarUrl, player._id, player.nombre, player.apellido]);

  const summaryText = React.useMemo(() => {
    const role = player.tipo ? player.tipo.toLowerCase() : "jugador";
    return `Integrante ${role} que aporta energía y visión competitiva a cada encuentro.`;
  }, [player.tipo]);

  return (
    <PlayerCard
      layout
      custom={index}
      variants={cardVariants}
      initial="initial"
      exit="exit"
      whileInView="animate"
      whileHover="hover"
      viewport={{ once: true, amount: 0.3 }}
    >
      <CardHalo aria-hidden />
      <CardTop>
        <PlayerNumber>#{player.No?.padStart(2, "0")}</PlayerNumber>
        <PlayerAvatar>
          <AvatarImage src={avatarSource} alt={`Jugador ${player.nombre}`} loading="lazy" />
        </PlayerAvatar>
        <PlayerHeading>
          <PlayerName>
            {player.nombre} {player.apellido}
          </PlayerName>
          {player.tipo && <PlayerBadge>{player.tipo}</PlayerBadge>}
        </PlayerHeading>
      </CardTop>

      <PlayerSummary>{summaryText}</PlayerSummary>

      <PlayerContact>
        <ContactRow>
          <ContactLabel>Celular</ContactLabel>
          <ContactValue>{player.celular ?? "Sin registro"}</ContactValue>
        </ContactRow>
        <ContactRow>
          <ContactLabel>Dirección</ContactLabel>
          <ContactValue>{player.direccion ?? "Sin registro"}</ContactValue>
        </ContactRow>
      </PlayerContact>

      <CardFooter>
        <DetailButton
          type="button"
          onClick={toggleExpanded}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span>{expanded ? "Ocultar" : "Ver detalles"}</span>
          <DetailIcon aria-hidden>{expanded ? "−" : "+"}</DetailIcon>
        </DetailButton>
      </CardFooter>

      <AnimatePresence initial={false}>
        {expanded && (
          <CardDetails
            key="details"
            initial={{ height: 0, opacity: 0, y: -12 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -12 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
          >
            <DetailsGrid>
              <DetailColumn>
                <DetailLabel>Fecha de nacimiento</DetailLabel>
                <DetailValue>{formattedBirth}</DetailValue>
              </DetailColumn>
              <DetailColumn>
                <DetailLabel>Teléfono</DetailLabel>
                <DetailValue>{player.telefono ?? "Sin registro"}</DetailValue>
              </DetailColumn>
              <DetailColumn>
                <DetailLabel>Identificador</DetailLabel>
                <DetailValue>{player._id?.slice(0, 8) ?? "N/A"}</DetailValue>
              </DetailColumn>
            </DetailsGrid>
          </CardDetails>
        )}
      </AnimatePresence>
    </PlayerCard>
  );
};

export default PlayerItem;
