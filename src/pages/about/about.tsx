import React from "react";
import { motion } from "framer-motion";
import { useAppTranslation } from "../../i18n/hooks";
import { buildAboutContent } from "./about.content";
import {
  Main,
  Hero,
  HeroBackdrop,
  HeroGrid,
  HeroContent,
  HeroBadge,
  HeroTitle,
  HeroHighlight,
  HeroGlass,
  HeroSubtitle,
  HeroDivider,
  HeroStats,
  StatCard,
  StatValue,
  StatLabel,
  Content,
  SectionShell,
  SectionForeground,
  SectionHeader,
  SectionEyebrow,
  SectionTitle,
  SectionDescription,
  TwoColumn,
  NarrativeCard,
  NarrativeTag,
  NarrativeTitle,
  NarrativeText,
  CityGrid,
  CityStory,
  StoryBadge,
  StoryHeading,
  StoryParagraph,
  StoryFootnote,
  CityFacts,
  FactCard,
  FactLabel,
  FactValue,
  VenueMatrix,
  VenueCard,
  VenueTitle,
  VenueMeta,
  VenueDescription,
  CommunityGrid,
  CommunityCard,
  CommunityTitle,
  CommunityMeta,
  CommunityText,
  ColonialHighlight,
  ColonialTitle,
  ColonialText,
  ColonialNote,
  ManifestShell,
  ManifestTitle,
  ManifestText,
  FounderGrid,
  FounderCard,
  FounderBadge,
  FounderName,
  FounderRole,
  FounderPeriod,
  MemorialGrid,
  MemorialCard,
  MemorialTitle,
  MemorialText,
  MemorialFootnote,
  TimelineMatrix,
  TimelineRow,
  TimelineBadge,
  TimelineTitle,
  TimelineCaption,
  ValueGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDescription,
  AchievementsGrid,
  AchievementCard,
  AchievementTitle,
  AchievementText,
  CTASection,
  CTAWrapper,
  CTATitle,
  CTAText,
  CTAButtons,
  CTAButton,
  CTAButtonGhost,
  CTAOrnament,
  SectionMarker,
  GradientStroke,
  GlowAccent,
  ScrollHint,
} from "./about.styled";

const viewport = { once: true, amount: 0.3 };

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const gentleScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggered = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const AboutPage: React.FC = () => {
  const { t } = useAppTranslation();

  const {
    founders,
    leadershipTimeline,
    memorialHonours,
    values,
    achievements,
    medellinStory,
    medellinFacts,
    medellinVenues,
    medellinCommunity,
  } = buildAboutContent(t);

  return (
    <Main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Hero initial="hidden" animate="visible" variants={gentleScale}>
        <HeroBackdrop
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <HeroGrid>
          <HeroContent>
            <HeroBadge
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
            >
              {t("about.hero.badge", {
                defaultValue: "Puerto Salgar, Cundinamarca",
              })}
            </HeroBadge>
            <HeroTitle>
              {t("about.hero.title", {
                defaultValue: "Una historia que vibra con cada latido dorado",
              })}
            </HeroTitle>
            <HeroHighlight>
              {t("about.hero.highlight", {
                defaultValue:
                  "De una pasión barrial en 2013 a un club formal en 2022. Somos comunidad, competitividad y familia de fútbol.",
              })}
            </HeroHighlight>
            <ScrollHint>
              {t("about.hero.scroll", {
                defaultValue: "Desliza para descubrir el legado",
              })}
            </ScrollHint>
          </HeroContent>

          <HeroGlass
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6, ease: "easeOut" }}
          >
            <HeroSubtitle>
              {t("about.hero.subtitle", {
                defaultValue: "Más de una década trazando un ADN competitivo",
              })}
            </HeroSubtitle>
            <HeroDivider />
            <HeroStats>
              <StatCard
                as={motion.div}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
              >
                <StatValue>12+</StatValue>
                <StatLabel>
                  {t("about.hero.stats.years", {
                    defaultValue: "Años de comunidad",
                  })}
                </StatLabel>
              </StatCard>
              <StatCard
                as={motion.div}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.52 }}
              >
                <StatValue>150+</StatValue>
                <StatLabel>
                  {t("about.hero.stats.community", {
                    defaultValue: "Familias vinculadas",
                  })}
                </StatLabel>
              </StatCard>
              <StatCard
                as={motion.div}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.64 }}
              >
                <StatValue>30</StatValue>
                <StatLabel>
                  {t("about.hero.stats.competitions", {
                    defaultValue: "Participaciones oficiales",
                  })}
                </StatLabel>
              </StatCard>
            </HeroStats>
          </HeroGlass>
        </HeroGrid>
      </Hero>

      <Content
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
        variants={staggered}
      >
        <SectionShell variants={fadeUp} viewport={viewport}>
          <GlowAccent initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.identity.eyebrow", { defaultValue: "Identidad" })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.identity.title", {
                  defaultValue: "Un club que nace de la calle y crece con visión",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.identity.description", {
                  defaultValue:
                    "Salgar Dorada FC se forja en los barrios y se proyecta con estructura profesional: organización, pasión y pertenencia al servicio del talento local.",
                })}
              </SectionDescription>
            </SectionHeader>

            <TwoColumn>
              <NarrativeCard variants={gentleScale}>
                <NarrativeTag>
                  {t("about.identity.cards.roots.tag", {
                    defaultValue: "Raíces",
                  })}
                </NarrativeTag>
                <NarrativeTitle>
                  {t("about.identity.cards.roots.title", {
                    defaultValue: "2013: la chispa comunitaria",
                  })}
                </NarrativeTitle>
                <NarrativeText>
                  {t("about.identity.cards.roots.text", {
                    defaultValue:
                      "Partidos espontáneos, balón compartido y amigos que decidieron convertir la pasión en un proyecto serio para Puerto Salgar.",
                  })}
                </NarrativeText>
              </NarrativeCard>

              <NarrativeCard variants={gentleScale}>
                <NarrativeTag>
                  {t("about.identity.cards.structure.tag", {
                    defaultValue: "Estructura",
                  })}
                </NarrativeTag>
                <NarrativeTitle>
                  {t("about.identity.cards.structure.title", {
                    defaultValue: "2022: oficialización y ADN competitivo",
                  })}
                </NarrativeTitle>
                <NarrativeText>
                  {t("about.identity.cards.structure.text", {
                    defaultValue:
                      "El club adopta metodologías, uniformes oficiales y planificación deportiva para competir en torneos de jerarquía.",
                  })}
                </NarrativeText>
              </NarrativeCard>

              <NarrativeCard variants={gentleScale}>
                <NarrativeTag>
                  {t("about.identity.cards.future.tag", {
                    defaultValue: "Proyección",
                  })}
                </NarrativeTag>
                <NarrativeTitle>
                  {t("about.identity.cards.future.title", {
                    defaultValue: "Futuro: cantera, familia y comunidad",
                  })}
                </NarrativeTitle>
                <NarrativeText>
                  {t("about.identity.cards.future.text", {
                    defaultValue:
                      "Un modelo integral que forma jugadores, potencia líderes barriales y crea experiencias inolvidables para la afición.",
                  })}
                </NarrativeText>
              </NarrativeCard>
            </TwoColumn>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.medellin.eyebrow", { defaultValue: "Medellín" })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.medellin.title", {
                  defaultValue: "La ciudad que nos convirtió en club",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.medellin.description", {
                  defaultValue:
                    "Llegamos desde Puerto Salgar y encontramos en Medellín el ecosistema perfecto para crecer: canchas públicas vibrantes, cultura de barrio y torneos que no dan tregua.",
                })}
              </SectionDescription>
            </SectionHeader>

            <CityGrid>
              <CityStory variants={gentleScale}>
                <StoryBadge>
                  {t("about.medellin.story.badge", {
                    defaultValue: "Historia en Medellín",
                  })}
                </StoryBadge>
                <StoryHeading>
                  {t("about.medellin.story.title", {
                    defaultValue: "Nuestra vida alrededor del balón",
                  })}
                </StoryHeading>
                {medellinStory.map((paragraph, index) => (
                  <StoryParagraph key={index}>{paragraph}</StoryParagraph>
                ))}
                <StoryFootnote>
                  {t("about.medellin.story.footnote", {
                    defaultValue:
                      "El núcleo inicial lo encendieron Johan Manuel Santana, Cristian Rueda, Jeison Montealgre, Juan David Garcés, Deimar Perea, Francisco, Jorge Quintero, Carlos Avendaño “Roma” y Leonardo Corrales.",
                  })}
                </StoryFootnote>
              </CityStory>

              <CityFacts>
                {medellinFacts.map((fact) => (
                  <FactCard key={fact.label} variants={gentleScale}>
                    <FactLabel>{fact.label}</FactLabel>
                    <FactValue>{fact.value}</FactValue>
                  </FactCard>
                ))}
              </CityFacts>
            </CityGrid>

            <SectionMarker>
              {t("about.medellin.venues.marker", {
                defaultValue: "Canchas donde nos hicimos equipo",
              })}
            </SectionMarker>

            <VenueMatrix as={motion.div} variants={staggered}>
              {medellinVenues.map((venue) => (
                <VenueCard key={venue.title} variants={gentleScale}>
                  <VenueMeta>{venue.meta}</VenueMeta>
                  <VenueTitle>{venue.title}</VenueTitle>
                  <VenueDescription>{venue.description}</VenueDescription>
                </VenueCard>
              ))}
            </VenueMatrix>

            <GradientStroke />

            <SectionMarker>
              {t("about.medellin.community.marker", {
                defaultValue: "Torneos, parches y cultura",
              })}
            </SectionMarker>

            <CommunityGrid as={motion.div} variants={staggered}>
              {medellinCommunity.map((item) => (
                <CommunityCard key={item.title} variants={gentleScale}>
                  <CommunityMeta>{item.meta}</CommunityMeta>
                  <CommunityTitle>{item.title}</CommunityTitle>
                  <CommunityText>{item.description}</CommunityText>
                </CommunityCard>
              ))}
            </CommunityGrid>

            <ColonialHighlight variants={gentleScale}>
              <ColonialTitle>
                {t("about.medellin.colonial.title", {
                  defaultValue: "Torneo Intercolonias",
                })}
              </ColonialTitle>
              <ColonialText>
                {t("about.medellin.colonial.description", {
                  defaultValue:
                    "El torneo colonial de Medellín integra colonias municipales y es el espacio donde representamos a Puerto Salgar junto a equipos de toda la ciudad.",
                })}
              </ColonialText>
              <ColonialNote>
                {t("about.medellin.colonial.note", {
                  defaultValue:
                    "Si tienes el nombre exacto de la versión en la que participamos, lo sumamos para dejar el registro histórico completo.",
                })}
              </ColonialNote>
            </ColonialHighlight>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.founders.eyebrow", {
                  defaultValue: "Fundadores y comunidad",
                })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.founders.title", {
                  defaultValue: "La guardia que encendió y sostiene el sueño",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.founders.description", {
                  defaultValue:
                    "Sus nombres están tatuados en la historia del club. Son líderes, amigos y referentes que abrieron las puertas al talento salgareño.",
                })}
              </SectionDescription>
            </SectionHeader>

            <FounderGrid as={motion.div} variants={staggered}>
              {founders.map((person) => (
                <FounderCard key={person.name} variants={gentleScale}>
                  <FounderBadge>{person.badge}</FounderBadge>
                  <FounderName>{person.name}</FounderName>
                  <FounderRole>{person.role}</FounderRole>
                  <FounderPeriod>{person.period}</FounderPeriod>
                </FounderCard>
              ))}
            </FounderGrid>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.memorial.eyebrow", {
                  defaultValue: "Memorial",
                })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.memorial.title", {
                  defaultValue: "Guardia eterna del club",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.memorial.description", {
                  defaultValue:
                    "Recordamos con gratitud a quienes dejaron una huella imborrable sobre la cancha y en la tribuna.",
                })}
              </SectionDescription>
            </SectionHeader>

            <MemorialGrid>
              {memorialHonours.map((item) => (
                <MemorialCard key={item.title} variants={gentleScale}>
                  <MemorialTitle>{item.title}</MemorialTitle>
                  <MemorialText>{item.text}</MemorialText>
                  <MemorialFootnote>{item.footnote}</MemorialFootnote>
                </MemorialCard>
              ))}
            </MemorialGrid>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.leadership.eyebrow", {
                  defaultValue: "Capitanes",
                })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.leadership.title", {
                  defaultValue: "Liderazgo que trasciende generaciones",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.leadership.description", {
                  defaultValue:
                    "Cada capitán fue la voz del vestuario y el puente con la comunidad. Su legado continúa inspirando.",
                })}
              </SectionDescription>
            </SectionHeader>

            <TimelineMatrix as={motion.div} variants={staggered}>
              {leadershipTimeline.map((item) => (
                <TimelineRow key={item.title} variants={gentleScale}>
                  <div>
                    <SectionMarker>{item.period}</SectionMarker>
                    <GradientStroke />
                  </div>
                  <div>
                    <TimelineBadge>{item.badge}</TimelineBadge>
                    <TimelineTitle>{item.title}</TimelineTitle>
                    <TimelineCaption>{item.caption}</TimelineCaption>
                  </div>
                </TimelineRow>
              ))}
            </TimelineMatrix>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.values.eyebrow", { defaultValue: "ADN" })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.values.title", {
                  defaultValue: "Valores que nos posicionan en la región",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.values.description", {
                  defaultValue:
                    "Cultura de alto compromiso, identidad barrial y excelencia deportiva para cada generación de futbolistas.",
                })}
              </SectionDescription>
            </SectionHeader>

            <ValueGrid>
              {values.map((pillar) => (
                <ValueCard key={pillar.title} variants={gentleScale}>
                  <ValueIcon>{pillar.icon}</ValueIcon>
                  <ValueTitle>{pillar.title}</ValueTitle>
                  <ValueDescription>{pillar.description}</ValueDescription>
                </ValueCard>
              ))}
            </ValueGrid>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.achievements.eyebrow", {
                  defaultValue: "Participaciones",
                })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.achievements.title", {
                  defaultValue: "Nuestro recorrido competitivo",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.achievements.description", {
                  defaultValue:
                    "El club participa en torneos clave que refuerzan la identidad salgareña y proyectan nuevos talentos.",
                })}
              </SectionDescription>
            </SectionHeader>

            <AchievementsGrid>
              {achievements.map((item) => (
                <AchievementCard key={item.title} variants={gentleScale}>
                  <AchievementTitle>{item.title}</AchievementTitle>
                  <AchievementText>{item.text}</AchievementText>
                </AchievementCard>
              ))}
            </AchievementsGrid>
          </SectionForeground>
        </SectionShell>

        <SectionShell variants={fadeUp} viewport={viewport}>
          <SectionForeground>
            <SectionHeader>
              <SectionEyebrow>
                {t("about.manifest.eyebrow", {
                  defaultValue: "Manifiesto",
                })}
              </SectionEyebrow>
              <SectionTitle>
                {t("about.manifest.title", {
                  defaultValue: "Creemos en el fútbol como escuela de vida",
                })}
              </SectionTitle>
              <SectionDescription>
                {t("about.manifest.description", {
                  defaultValue:
                    "Una declaración que honra a quienes nos trajeron hasta aquí y a quienes seguirán escribiendo la historia.",
                })}
              </SectionDescription>
            </SectionHeader>

            <ManifestShell variants={gentleScale}>
              <ManifestTitle>
                {t("about.manifest.heading", {
                  defaultValue: "Nuestro manifiesto",
                })}
              </ManifestTitle>
              <ManifestText>
                {t("about.manifest.text", {
                  defaultValue:
                    "Creemos en el fútbol como ascensor social y escuela de vida. Entre estudio, trabajo y canchas de barrio aprendimos que Medellín es el lugar donde un parche de amigos puede volverse equipo y un equipo puede volverse club.",
                })}
              </ManifestText>
              <ManifestText>
                {t("about.manifest.closing", {
                  defaultValue:
                    "Salgar Dorada FC es la historia de un pueblo escrita en las canchas de una ciudad que vive para el fútbol. Ese legado lo honramos en cada entrenamiento, en cada torneo y en cada abrazo con la hinchada.",
                })}
              </ManifestText>
            </ManifestShell>
          </SectionForeground>
        </SectionShell>

        <CTASection
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <CTAOrnament
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 0.85, scale: 1 }}
            viewport={viewport}
            transition={{ duration: 0.9, ease: "easeOut" }}
          />
          <CTAWrapper>
            <CTATitle>
              {t("about.cta.title", {
                defaultValue:
                  "La puerta sigue abierta para escribir las próximas páginas",
              })}
            </CTATitle>
            <CTAText>
              {t("about.cta.text", {
                defaultValue:
                  "Súmate como jugador, aliado o parte de la hinchada. Cada rostro suma para que Salgar Dorada FC siga brillando.",
              })}
            </CTAText>
            <CTAButtons>
              <CTAButton to="/players">
                {t("about.cta.primary", {
                  defaultValue: "Conoce al plantel",
                })}
              </CTAButton>
              <CTAButtonGhost to="/form">
                {t("about.cta.secondary", {
                  defaultValue: "Aplica a la cantera",
                })}
              </CTAButtonGhost>
            </CTAButtons>
          </CTAWrapper>
        </CTASection>
      </Content>
    </Main>
  );
};

export default AboutPage;
