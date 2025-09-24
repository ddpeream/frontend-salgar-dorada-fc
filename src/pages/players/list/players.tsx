import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
import { Search } from "../component/search";
import {
  PlayersWrapper,
  BackdropGlow,
  BackdropPulse,
  PlayersContent,
  HeaderSection,
  PageEyebrow,
  PageTitle,
  PageSubtitle,
  TopBar,
  ResultSummary,
  ResultCount,
  ResultHint,
  PlayersGrid,
  EmptyState,
  EmptyTitle,
  EmptySubtitle,
} from "./players.styled";
import PlayerItem from "../component/player-item";
import { formCreatedDto } from "../../../service/players/player.interfase";
import BackButton from "../../../components/back-button";

const rosterData: formCreatedDto[] = [
  {
    _id: "miguel-coarte",
    nombre: "Miguel",
    apellido: "Coarte",
    tipo: "Delantero",
    No: "10",
    fecha_nacimiento: new Date("1998-04-17"),
    direccion: "Salgar, Antioquia",
    telefono: "+57 604 555 2201",
    celular: "+57 313 359 7247",
    avatarUrl: "https://ui-avatars.com/api/?name=Miguel+Coarte&background=0d1b2a&color=ffffff",
  },
  {
    _id: "leo-corrales",
    nombre: "Leo",
    apellido: "Corrales",
    tipo: "Director Técnico",
    No: "DT",
    fecha_nacimiento: new Date("1983-05-14"),
    direccion: "Zona técnica, Estadio Municipal",
    telefono: "+57 604 555 2200",
    celular: "+57 300 880 7722",
    avatarUrl: "https://ui-avatars.com/api/?name=Leo+Corrales&background=122544&color=ffffff",
  },
  {
    _id: "andres-gonzalez",
    nombre: "Andrés",
    apellido: "González",
    tipo: "Defensa",
    No: "02",
    fecha_nacimiento: new Date("2000-07-05"),
    direccion: "Medellín, Antioquia",
    telefono: "+57 604 555 2203",
    celular: "+57 312 768 2360",
    avatarUrl: "https://ui-avatars.com/api/?name=Andres+Gonzalez&background=0f1f38&color=ffffff",
  },
  {
    _id: "oscar-gonzalez",
    nombre: "Oscar",
    apellido: "Gonzalez",
    tipo: "Arquero",
    No: "01",
    fecha_nacimiento: new Date("1997-09-12"),
    direccion: "Manizales, Caldas",
    telefono: "+57 604 555 2204",
    celular: "+57 311 686 0092",
    avatarUrl: "https://ui-avatars.com/api/?name=Oscar+Gonzalez&background=141f2d&color=ffffff",
  },
  {
    _id: "jheison-montealegre",
    nombre: "Jheison",
    apellido: "Montealegre",
    tipo: "Delantero",
    No: "11",
    fecha_nacimiento: new Date("2002-02-08"),
    direccion: "Bogotá, Cundinamarca",
    telefono: "+57 601 555 2205",
    celular: "+57 323 289 5666",
    avatarUrl: "https://ui-avatars.com/api/?name=Jheison+Montealegre&background=1a2c4a&color=ffffff",
  },
  {
    _id: "nicolas-rodriguez",
    nombre: "Nicolás",
    apellido: "Rodríguez",
    tipo: "Extremo",
    No: "07",
    fecha_nacimiento: new Date("2001-11-30"),
    direccion: "La Dorada, Caldas",
    telefono: "+57 606 555 2206",
    celular: "+57 300 458 9052",
    avatarUrl: "https://ui-avatars.com/api/?name=Nicolas+Rodriguez&background=173258&color=ffffff",
  },
  {
    _id: "sebastian-solorzano",
    nombre: "Sebastián",
    apellido: "Solorzano",
    tipo: "Volante",
    No: "06",
    fecha_nacimiento: new Date("1999-06-14"),
    direccion: "Rionegro, Antioquia",
    telefono: "+57 604 555 2207",
    celular: "+57 304 625 0590",
    avatarUrl: "https://ui-avatars.com/api/?name=Sebastian+Solorzano&background=102040&color=ffffff",
  },
  {
    _id: "sebastian-mozo",
    nombre: "Sebastián",
    apellido: "Mozo",
    tipo: "Defensa",
    No: "15",
    fecha_nacimiento: new Date("2003-03-03"),
    direccion: "Cali, Valle del Cauca",
    telefono: "+57 602 555 2208",
    celular: "+57 315 800 9132",
    avatarUrl: "https://ui-avatars.com/api/?name=Sebastian+Mozo&background=162a4b&color=ffffff",
  },
  {
    _id: "luis-ricardo",
    nombre: "Luis",
    apellido: "Ricardo",
    tipo: "Mediapunta",
    No: "17",
    fecha_nacimiento: new Date("1998-12-19"),
    direccion: "Bello, Antioquia",
    telefono: "+57 604 555 2209",
    celular: "+57 315 245 5133",
    avatarUrl: "https://ui-avatars.com/api/?name=Luis+Ricardo&background=15243f&color=ffffff",
  },
];

const normalizeText = (value: string) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

const PlayerList: React.FC = () => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  const wrapperRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const pulseY = useTransform(scrollYProgress, [0, 1], ["20%", "-10%"]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("search") ?? "";
    setSearchText((prev) => (prev === query ? prev : query));
  }, [location.search]);

  const normalizedSearch = normalizeText(searchText.trim());

  const filteredPlayers = useMemo(() => {
    if (!normalizedSearch) {
      return rosterData;
    }

    return rosterData.filter((player) => {
      const jersey = (player.No ?? "").toLowerCase();
      const nombreCompleto = normalizeText(`${player.nombre} ${player.apellido}`);
      return (
        nombreCompleto.includes(normalizedSearch) ||
        jersey.includes(normalizedSearch)
      );
    });
  }, [normalizedSearch]);

  const totalPlayersLabel = `${filteredPlayers.length} jugador${
    filteredPlayers.length === 1 ? "" : "es"
  }`;

  const filterHint = normalizedSearch
    ? `Coincidencias con “${searchText.trim()}”`
    : "Explora toda la plantilla";

  return (
    <PlayersWrapper ref={wrapperRef}>
      <BackdropGlow style={{ y: glowY }} />
      <BackdropPulse style={{ y: pulseY }} />

      <PlayersContent>
        <HeaderSection
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BackButton fallbackPath="/" />
          <PageEyebrow>Plantilla 2025 · Salgar Dorada FC</PageEyebrow>
          <PageTitle>Talento que vibra con cada minuto de juego.</PageTitle>
          <PageSubtitle>
            Descubre a los protagonistas de nuestro club: jóvenes que combinan disciplina, energía y una visión ofensiva que contagia a la hinchada.
          </PageSubtitle>
        </HeaderSection>

        <TopBar>
          <Search searchText={searchText} setSearchText={setSearchText} />
          <ResultSummary
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          >
            <ResultCount>{totalPlayersLabel}</ResultCount>
            <ResultHint>{filterHint}</ResultHint>
          </ResultSummary>
        </TopBar>

        {filteredPlayers.length === 0 ? (
          <EmptyState
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <EmptyTitle>No encontramos coincidencias</EmptyTitle>
            <EmptySubtitle>
              Ajusta tu búsqueda o descubre otra posición dentro de la plantilla.
            </EmptySubtitle>
          </EmptyState>
        ) : (
          <PlayersGrid>
            <AnimatePresence mode="popLayout">
              {filteredPlayers.map((player, index) => (
                <PlayerItem key={player._id} player={player} index={index} />
              ))}
            </AnimatePresence>
          </PlayersGrid>
        )}
      </PlayersContent>
    </PlayersWrapper>
  );
};

export default PlayerList;