import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useAppTranslation } from "../../i18n/hooks";
import {
  MatchesWrapper,
  BackdropGlow,
  BackdropPulse,
  MatchesContent,
  HeaderSection,
  PageEyebrow,
  PageTitle,
  PageSubtitle,
  TournamentSelector,
  TabsContainer,
  TabButton,
  TabIndicator,
  SectionContainer,
  SectionCard,
  SectionHeader,
  SectionTitle,
  SectionDescription,
  MatchCard,
  MatchDate,
  MatchTeams,
  TeamInfo,
  TeamLogo,
  TeamName,
  MatchVs,
  MatchResult,
  ScoreDisplay,
  MatchStatus,
  MatchDetails,
  MatchVenue,
  MatchTime,
  TableContainer,
  TableHeader,
  TableRow,
  TableCell,
  TeamPosition,
  TeamData,
  StatsGrid,
  StatItem,
  StatValue,
  StatLabel,
} from "./matches.styled";
import BackButton from "../../components/back-button";
import escudo from "../../assets/escudo-sd.jpg";

type TabType = "historial" | "calendario" | "tabla";

interface Tournament {
  id: string;
  name: string;
  year: number;
}

interface Match {
  id: string;
  date: string;
  time: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  venue: string;
  status: "finalizado" | "programado" | "en_vivo" | "suspendido";
  tournamentId: string;
}

interface TableTeam {
  position: number;
  name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  tournamentId: string;
}

const tournaments: Tournament[] = [
  { id: "corporacion-punto-coma-2025", name: "Corporación Deportiva Punto y Coma", year: 2025 },
];

const matchesHistory: Match[] = [
  {
    id: "match-1",
    date: "2025-09-15",
    time: "16:00",
    homeTeam: "Salgar Dorada FC",
    awayTeam: "Gremio FC",
    homeScore: 0,
    awayScore: 2,
    venue: "Cancha Salgar Dorada",
    status: "finalizado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-2",
    date: "2025-09-08",
    time: "18:00",
    homeTeam: "Real Academia FC",
    awayTeam: "Salgar Dorada FC",
    homeScore: 1,
    awayScore: 1,
    venue: "Polideportivo Real Academia",
    status: "finalizado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-3",
    date: "2025-09-01",
    time: "15:30",
    homeTeam: "Salgar Dorada FC",
    awayTeam: "Family Caché FC",
    homeScore: 3,
    awayScore: 0,
    venue: "Cancha Salgar Dorada",
    status: "finalizado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-4",
    date: "2025-08-25",
    time: "17:00",
    homeTeam: "Cacique FC",
    awayTeam: "Salgar Dorada FC",
    homeScore: 2,
    awayScore: 1,
    venue: "Polideportivo Cacique",
    status: "finalizado",
    tournamentId: "corporacion-punto-coma-2025",
  },
];

const upcomingMatches: Match[] = [
  {
    id: "match-5",
    date: "2025-09-29",
    time: "16:00",
    homeTeam: "Salgar Dorada FC",
    awayTeam: "Sahagun FC",
    venue: "Cancha Salgar Dorada",
    status: "programado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-6",
    date: "2025-10-06",
    time: "14:30",
    homeTeam: "Forza United FC",
    awayTeam: "Salgar Dorada FC",
    venue: "Complejo Forza United",
    status: "programado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-7",
    date: "2025-10-13",
    time: "18:00",
    homeTeam: "Salgar Dorada FC",
    awayTeam: "Esmeraldas FC",
    venue: "Cancha Salgar Dorada",
    status: "programado",
    tournamentId: "corporacion-punto-coma-2025",
  },
  {
    id: "match-8",
    date: "2025-10-20",
    time: "15:30",
    homeTeam: "City FC",
    awayTeam: "Salgar Dorada FC",
    venue: "Polideportivo City FC",
    status: "programado",
    tournamentId: "corporacion-punto-coma-2025",
  },
];

const tournamentTables: Record<string, TableTeam[]> = {
  "corporacion-punto-coma-2025": [
    { position: 1, name: "Sahagun FC", played: 8, won: 8, drawn: 0, lost: 0, goalsFor: 39, goalsAgainst: 8, goalDifference: 31, points: 24, tournamentId: "corporacion-punto-coma-2025" },
    { position: 2, name: "City FC", played: 8, won: 7, drawn: 1, lost: 0, goalsFor: 28, goalsAgainst: 11, goalDifference: 17, points: 22, tournamentId: "corporacion-punto-coma-2025" },
    { position: 3, name: "Forza United FC", played: 8, won: 5, drawn: 0, lost: 3, goalsFor: 21, goalsAgainst: 17, goalDifference: 4, points: 15, tournamentId: "corporacion-punto-coma-2025" },
    { position: 4, name: "Egresados UNAL FC", played: 7, won: 4, drawn: 2, lost: 1, goalsFor: 22, goalsAgainst: 13, goalDifference: 9, points: 14, tournamentId: "corporacion-punto-coma-2025" },
    { position: 5, name: "Esmeraldas FC", played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 39, goalsAgainst: 11, goalDifference: 28, points: 13, tournamentId: "corporacion-punto-coma-2025" },
    { position: 6, name: "Real Academia FC", played: 7, won: 4, drawn: 1, lost: 2, goalsFor: 23, goalsAgainst: 19, goalDifference: 4, points: 13, tournamentId: "corporacion-punto-coma-2025" },
    { position: 7, name: "Lico Bar La 57 FC", played: 8, won: 4, drawn: 1, lost: 3, goalsFor: 21, goalsAgainst: 22, goalDifference: -1, points: 13, tournamentId: "corporacion-punto-coma-2025" },
    { position: 8, name: "Gremio FC", played: 8, won: 3, drawn: 1, lost: 4, goalsFor: 18, goalsAgainst: 22, goalDifference: -4, points: 10, tournamentId: "corporacion-punto-coma-2025" },
    { position: 9, name: "Cacique FC", played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 16, goalsAgainst: 15, goalDifference: 1, points: 9, tournamentId: "corporacion-punto-coma-2025" },
    { position: 10, name: "Guaranda FC", played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 15, goalsAgainst: 22, goalDifference: -7, points: 9, tournamentId: "corporacion-punto-coma-2025" },
    { position: 11, name: "Sistemas Udea FC", played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 17, goalsAgainst: 34, goalDifference: -17, points: 9, tournamentId: "corporacion-punto-coma-2025" },
    { position: 12, name: "Family Caché FC", played: 8, won: 3, drawn: 0, lost: 5, goalsFor: 13, goalsAgainst: 31, goalDifference: -18, points: 9, tournamentId: "corporacion-punto-coma-2025" },
    { position: 13, name: "Salgar Dorada FC", played: 8, won: 2, drawn: 2, lost: 4, goalsFor: 21, goalsAgainst: 22, goalDifference: -1, points: 8, tournamentId: "corporacion-punto-coma-2025" },
    { position: 14, name: "Alejandro Echavarria FC", played: 7, won: 2, drawn: 1, lost: 4, goalsFor: 19, goalsAgainst: 19, goalDifference: 0, points: 7, tournamentId: "corporacion-punto-coma-2025" },
    { position: 15, name: "Las Barras U D B FC", played: 8, won: 1, drawn: 0, lost: 7, goalsFor: 23, goalsAgainst: 31, goalDifference: -8, points: 3, tournamentId: "corporacion-punto-coma-2025" },
    { position: 16, name: "R.J. Antioquia FC", played: 7, won: 1, drawn: 0, lost: 6, goalsFor: 9, goalsAgainst: 47, goalDifference: -38, points: 3, tournamentId: "corporacion-punto-coma-2025" },
  ],
};

export const Matches: React.FC = () => {
  const { t } = useAppTranslation();
  const [activeTab, setActiveTab] = useState<TabType>("historial");
  const [selectedTournament, setSelectedTournament] = useState<string>("corporacion-punto-coma-2025");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 8, width: 110 });
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const currentTournament = tournaments.find(t => t.id === selectedTournament);
  const filteredHistoryMatches = matchesHistory.filter(match => match.tournamentId === selectedTournament);
  const filteredUpcomingMatches = upcomingMatches.filter(match => match.tournamentId === selectedTournament);
  const currentTable = tournamentTables[selectedTournament] || [];

  const tabs = [
    { id: "historial" as const, label: t('matches.tabs.history'), icon: "📊" },
    { id: "calendario" as const, label: t('matches.tabs.calendar'), icon: "📅" },
    { id: "tabla" as const, label: t('matches.tabs.table'), icon: "🏆" },
  ];

  // Actualizar posición del indicador cuando cambia el tab activo
  useEffect(() => {
    const activeIndex = tabs.findIndex(t => t.id === activeTab);
    const activeTabElement = tabRefs.current[activeIndex];
    
    if (activeTabElement) {
      const containerPadding = 8;
      setIndicatorStyle({
        left: activeTabElement.offsetLeft - containerPadding,
        width: activeTabElement.offsetWidth,
      });
    }
  }, [activeTab]);

  const formatMatchDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat("es-CO", {
      weekday: "long",
      day: "numeric",
      month: "long",
    }).format(date);
  };

  const getStatusColor = (status: Match["status"]) => {
    switch (status) {
      case "finalizado": return "#4ade80";
      case "programado": return "#60a5fa";
      case "en_vivo": return "#f59e0b";
      case "suspendido": return "#ef4444";
      default: return "#94a3b8";
    }
  };

  const getStatusLabel = (status: Match["status"]) => {
    switch (status) {
      case "finalizado": return t('matches.status.finished');
      case "programado": return t('matches.status.scheduled');
      case "en_vivo": return t('matches.status.live');
      case "suspendido": return t('matches.status.suspended');
      default: return t('matches.status.unknown');
    }
  };

  const renderMatch = (match: Match, index: number) => (
    <MatchCard
      key={match.id}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <MatchDate>
        {formatMatchDate(match.date)} • {match.time}
      </MatchDate>
      <MatchTeams>
        <TeamInfo $isHome={match.homeTeam === "Salgar Dorada FC"}>
          {match.homeTeam === "Salgar Dorada FC" && (
            <TeamLogo src={escudo} alt="Salgar Dorada FC" />
          )}
          <TeamName>{match.homeTeam}</TeamName>
        </TeamInfo>
        <MatchVs>
          {match.status === "finalizado" ? (
            <MatchResult>
              <ScoreDisplay>
                {match.homeScore} - {match.awayScore}
              </ScoreDisplay>
            </MatchResult>
          ) : (
            <MatchStatus $color={getStatusColor(match.status)}>
              {getStatusLabel(match.status)}
            </MatchStatus>
          )}
        </MatchVs>
        <TeamInfo $isHome={match.awayTeam === "Salgar Dorada FC"}>
          <TeamName>{match.awayTeam}</TeamName>
          {match.awayTeam === "Salgar Dorada FC" && (
            <TeamLogo src={escudo} alt="Salgar Dorada FC" />
          )}
        </TeamInfo>
      </MatchTeams>
      <MatchDetails>
        <MatchVenue>📍 {match.venue}</MatchVenue>
        <MatchTime>🕒 {match.time}</MatchTime>
      </MatchDetails>
    </MatchCard>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "historial":
        return (
          <SectionContainer>
            <SectionCard>
              <SectionHeader>
                <SectionTitle>{t('matches.sections.lastMatches')}</SectionTitle>
                <SectionDescription>
                  {t('matches.sections.lastMatchesDescription')}
                </SectionDescription>
              </SectionHeader>
              {filteredHistoryMatches.map(renderMatch)}
            </SectionCard>
          </SectionContainer>
        );

      case "calendario":
        return (
          <SectionContainer>
            <SectionCard>
              <SectionHeader>
                <SectionTitle>{t('matches.sections.upcomingMatches')}</SectionTitle>
                <SectionDescription>
                  {t('matches.sections.upcomingMatchesDescription')}
                </SectionDescription>
              </SectionHeader>
              {filteredUpcomingMatches.map(renderMatch)}
            </SectionCard>
          </SectionContainer>
        );

      case "tabla":
        return (
          <SectionContainer>
            <SectionCard>
              <SectionHeader>
                <SectionTitle>{t('matches.sections.standings')}</SectionTitle>
                <SectionDescription>
                  {t('matches.sections.standingsDescription', { 
                    tournament: currentTournament?.name, 
                    year: currentTournament?.year 
                  })}
                </SectionDescription>
              </SectionHeader>
              <TableContainer>
                <TableHeader>
                  <TableCell>{t('matches.position')}</TableCell>
                  <TableCell>{t('matches.team')}</TableCell>
                  <TableCell>{t('matches.played')}</TableCell>
                  <TableCell>{t('matches.won')}</TableCell>
                  <TableCell>{t('matches.drawn')}</TableCell>
                  <TableCell>{t('matches.lost')}</TableCell>
                  <TableCell>{t('matches.goalsFor')}</TableCell>
                  <TableCell>{t('matches.goalsAgainst')}</TableCell>
                  <TableCell>{t('matches.goalDifference')}</TableCell>
                  <TableCell>{t('matches.points')}</TableCell>
                </TableHeader>
                {currentTable.map((team: TableTeam) => (
                  <TableRow
                    key={team.position}
                    $isOurTeam={team.name === "Salgar Dorada FC"}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: team.position * 0.05 }}
                  >
                    <TeamPosition $position={team.position}>
                      {team.position}
                    </TeamPosition>
                    <TeamData>
                      {team.name === "Salgar Dorada FC" && (
                        <TeamLogo src={escudo} alt="Salgar Dorada FC" />
                      )}
                      {team.name}
                    </TeamData>
                    <TableCell>{team.played}</TableCell>
                    <TableCell>{team.won}</TableCell>
                    <TableCell>{team.drawn}</TableCell>
                    <TableCell>{team.lost}</TableCell>
                    <TableCell>{team.goalsFor}</TableCell>
                    <TableCell>{team.goalsAgainst}</TableCell>
                    <TableCell $isPositive={team.goalDifference > 0}>
                      {team.goalDifference > 0 ? "+" : ""}{team.goalDifference}
                    </TableCell>
                    <TableCell $isPoints>{team.points}</TableCell>
                  </TableRow>
                ))}
              </TableContainer>
              <StatsGrid>
                <StatItem>
                  <StatValue>23</StatValue>
                  <StatLabel>{t('matches.stats.points')}</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>3°</StatValue>
                  <StatLabel>{t('matches.stats.position')}</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>+9</StatValue>
                  <StatLabel>{t('matches.stats.difference')}</StatLabel>
                </StatItem>
                <StatItem>
                  <StatValue>18</StatValue>
                  <StatLabel>{t('matches.stats.goalsFor')}</StatLabel>
                </StatItem>
              </StatsGrid>
            </SectionCard>
          </SectionContainer>
        );

      default:
        return null;
    }
  };

  return (
    <MatchesWrapper>
      <BackdropGlow
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <BackdropPulse
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.02, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <MatchesContent>
        <HeaderSection
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BackButton fallbackPath="/" />
          <PageEyebrow>{t('matches.pageEyebrow')}</PageEyebrow>
          <PageTitle>{t('matches.pageTitle')}</PageTitle>
          <PageSubtitle>
            {t('matches.pageSubtitle')}
          </PageSubtitle>
          
          <TournamentSelector>
            <label htmlFor="tournament-select">{t('matches.selectTournament')}</label>
            <select 
              id="tournament-select"
              value={selectedTournament} 
              onChange={(e) => setSelectedTournament(e.target.value)}
            >
              {tournaments.map((tournament) => (
                <option key={tournament.id} value={tournament.id}>
                  {tournament.name} {tournament.year}
                </option>
              ))}
            </select>
          </TournamentSelector>
        </HeaderSection>

        <TabsContainer>
          <TabIndicator
            animate={indicatorStyle}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
          {tabs.map((tab, index) => (
            <TabButton
              key={tab.id}
              ref={(el: HTMLButtonElement | null) => (tabRefs.current[index] = el)}
              $isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{tab.icon}</span>
              {tab.label}
            </TabButton>
          ))}
        </TabsContainer>

        <AnimatePresence mode="wait">
          <div key={activeTab}>
            {renderContent()}
          </div>
        </AnimatePresence>
      </MatchesContent>
    </MatchesWrapper>
  );
};