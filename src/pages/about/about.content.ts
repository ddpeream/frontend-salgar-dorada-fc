import { TFunction } from 'i18next';

export interface Founder {
  name: string;
  badge: string;
  role: string;
  period: string;
}

export interface LeadershipTimelineEntry {
  badge: string;
  period: string;
  title: string;
  caption: string;
}

export interface MemorialHonour {
  title: string;
  text: string;
  footnote: string;
}

export interface ClubValue {
  icon: string;
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  text: string;
}

export interface MedellinFact {
  label: string;
  value: string;
}

export interface MedellinVenue {
  meta: string;
  title: string;
  description: string;
}

export interface MedellinCommunityHighlight {
  meta: string;
  title: string;
  description: string;
}

export interface AboutContent {
  founders: Founder[];
  leadershipTimeline: LeadershipTimelineEntry[];
  memorialHonours: MemorialHonour[];
  values: ClubValue[];
  achievements: Achievement[];
  medellinStory: string[];
  medellinFacts: MedellinFact[];
  medellinVenues: MedellinVenue[];
  medellinCommunity: MedellinCommunityHighlight[];
}

export const buildAboutContent = (t: TFunction<'translation'>): AboutContent => {
  const founders: Founder[] = [
    {
      name: 'Johan Manuel Santana',
      badge: t('about.founders.badges.origin', {
        defaultValue: 'Fundador',
      }),
      role: t('about.founders.roles.spark', {
        defaultValue: 'Fundador de la comunidad',
      }),
      period: '2013 – 2014',
    },
    {
      name: 'Jeison Montealgre',
      badge: t('about.founders.badges.guardian', {
        defaultValue: 'Guardián',
      }),
      role: t('about.founders.roles.guardian', {
        defaultValue: 'Segundo capitán y líder comunitario',
      }),
      period: '2013 – Presente',
    },
    {
      name: 'Juan Diego Rojas',
      badge: t('about.founders.badges.origin', {
        defaultValue: 'Fundador',
      }),
      role: t('about.founders.roles.connector', {
        defaultValue: 'Fundador y gestor incansable de partidos',
      }),
      period: '2013 – 2020',
    },
    {
      name: 'Deimar Perea',
      badge: t('about.founders.badges.guardian', {
        defaultValue: 'Gestor',
      }),
      role: t('about.founders.roles.guardian', {
        defaultValue: 'Cofundador y guardián del club',
      }),
      period: '2013 – Presente',
    },
    {
      name: 'Francisco',
      badge: t('about.founders.badges.guardian', {
        defaultValue: 'Guardián',
      }),
      role: t('about.founders.roles.guardian', {
        defaultValue: 'Comunidad fundadora activa',
      }),
      period: '2013 – Presente',
    },
    {
      name: 'Jorge Quintero',
      badge: t('about.founders.badges.community', {
        defaultValue: 'Comunidad',
      }),
      role: t('about.founders.roles.community', {
        defaultValue: 'Comunidad fundadora activa',
      }),
      period: '2013 – 2022',
    },
    {
      name: 'Carlos Avendaño “Roma”',
      badge: t('about.founders.badges.community', {
        defaultValue: 'Comunidad',
      }),
      role: t('about.founders.roles.community', {
        defaultValue: 'Comunidad fundadora activa',
      }),
      period: '2013 – Presente',
    },
    {
      name: 'Juan David Garcés',
      badge: t('about.founders.badges.community', {
        defaultValue: 'Comunidad',
      }),
      role: t('about.founders.roles.community', {
        defaultValue: 'Comunidad fundadora activa',
      }),
      period: '2013 – 2024',
    },
    {
      name: 'Leonardo Corrales',
      badge: t('about.founders.badges.visionary', {
        defaultValue: 'Liderazgo',
      }),
      role: t('about.founders.roles.visionary', {
        defaultValue: 'Capitán, director técnico y administrador',
      }),
      period: '2014 – Presente',
    },
  ];

  const leadershipTimeline: LeadershipTimelineEntry[] = [
    {
      badge: t('about.leadership.timeline.foundation.badge', {
        defaultValue: 'Fundacional',
      }),
      period: t('about.leadership.timeline.foundation.period', {
        defaultValue: '2014 – 2016',
      }),
      title: 'Cristian Rueda',
      caption: t('about.leadership.timeline.foundation.caption', {
        defaultValue: 'Capitán que impulsó la primera identidad competitiva',
      }),
    },
    {
      badge: t('about.leadership.timeline.partner.badge', {
        defaultValue: 'Co-fundacional',
      }),
      period: t('about.leadership.timeline.partner.period', {
        defaultValue: '2014 – 2016',
      }),
      title: 'Jeison Montealgre',
      caption: t('about.leadership.timeline.partner.caption', {
        defaultValue: 'El liderazgo compartido que fortaleció la hermandad',
      }),
    },
    {
      badge: t('about.leadership.timeline.transition.badge', {
        defaultValue: 'Transición',
      }),
      period: t('about.leadership.timeline.transition.period', {
        defaultValue: '2016 – 2021',
      }),
      title: 'Leonardo Corrales',
      caption: t('about.leadership.timeline.transition.caption', {
        defaultValue: 'Capitán que conectó generaciones y profesionalización',
      }),
    },
    {
      badge: t('about.leadership.timeline.present.badge', {
        defaultValue: 'Actual',
      }),
      period: t('about.leadership.timeline.present.period', {
        defaultValue: '2023 – Presente',
      }),
      title: 'Miguel Ángel Soto',
      caption: t('about.leadership.timeline.present.caption', {
        defaultValue: 'Capitán que proyecta el legado hacia el futuro',
      }),
    },
  ];

  const memorialHonours: MemorialHonour[] = [
    {
      title: t('about.memorial.cards.pioneers.title', {
        defaultValue: 'Pioneros inolvidables',
      }),
      text: t('about.memorial.cards.pioneers.text', {
        defaultValue:
          'Guardianes de la identidad salgareña que sembraron disciplina y camaradería en cada entrenamiento.',
      }),
      footnote: t('about.memorial.cards.pioneers.footnote', {
        defaultValue: 'Su legado guía cada objetivo del club.',
      }),
    },
    {
      title: t('about.memorial.cards.companions.title', {
        defaultValue: 'Compañeros que trascienden',
      }),
      text: t('about.memorial.cards.companions.text', {
        defaultValue:
          'Jugadores, hinchas y familias que ya no están físicamente, pero siguen alentando desde la memoria colectiva.',
      }),
      footnote: t('about.memorial.cards.companions.footnote', {
        defaultValue: 'Puerto Salgar nunca olvida su entrega.',
      }),
    },
  ];

  const values: ClubValue[] = [
    {
      icon: '🤝',
      title: t('about.values.pillars.respect.title', {
        defaultValue: 'Respeto',
      }),
      description: t('about.values.pillars.respect.description', {
        defaultValue: 'Honor a rivales, árbitros y a la camiseta que nos une.',
      }),
    },
    {
      icon: '🛡️',
      title: t('about.values.pillars.discipline.title', {
        defaultValue: 'Disciplina',
      }),
      description: t('about.values.pillars.discipline.description', {
        defaultValue: 'Rigor competitivo y constancia en cada proceso.',
      }),
    },
    {
      icon: '🌪️',
      title: t('about.values.pillars.intensity.title', {
        defaultValue: 'Intensidad',
      }),
      description: t('about.values.pillars.intensity.description', {
        defaultValue: 'Fútbol vibrante que contagia a Puerto Salgar entero.',
      }),
    },
    {
      icon: '🔥',
      title: t('about.values.pillars.passion.title', {
        defaultValue: 'Pasión',
      }),
      description: t('about.values.pillars.passion.description', {
        defaultValue: 'Energía emocional que convierte cada jornada en ritual.',
      }),
    },
  ];

  const achievements: Achievement[] = [
    {
      title: t('about.achievements.cards.community.title', {
        defaultValue: 'Presencia municipal',
      }),
      text: t('about.achievements.cards.community.text', {
        defaultValue:
          'Polideportivo Municipal, Barrio Primero de Mayo y Puerto Libre como casa de la hinchada.',
      }),
    },
    {
      title: t('about.achievements.cards.talent.title', {
        defaultValue: 'Talento emergente',
      }),
      text: t('about.achievements.cards.talent.text', {
        defaultValue:
          'Procesos juveniles Sub-21, festivales relámpago y semilleros que proyectan a nuevas figuras.',
      }),
    },
    {
      title: t('about.achievements.cards.identity.title', {
        defaultValue: 'Identidad competitiva',
      }),
      text: t('about.achievements.cards.identity.text', {
        defaultValue:
          'Participación en Puerta de Oro de Cundinamarca y representación oficial de Puerto Salgar.',
      }),
    },
  ];

  const medellinStory: string[] = [
    t('about.medellin.story.paragraphs.arrival', {
      defaultValue:
        'Aunque venimos de Puerto Salgar, nuestra vida futbolera se consolidó en Medellín entre 2013 y 2014, cuando una camada de salgareños empezó a encontrarse en las canchas de barrio.',
    }),
    t('about.medellin.story.paragraphs.community', {
      defaultValue:
        'Estudiantes, recién graduados y soñadores del balón formaron el parche que, con el tiempo, se consolidó como comunidad y luego como club formal.',
    }),
    t('about.medellin.story.paragraphs.formalization', {
      defaultValue:
        'A finales de 2022 dimos el salto para oficializar Salgar Dorada FC, manteniendo vivo el vínculo entre Puerto Salgar y la capital antioqueña.',
    }),
  ];

  const medellinFacts: MedellinFact[] = [
    {
      label: t('about.medellin.facts.identity.label', {
        defaultValue: 'Identidad',
      }),
      value: t('about.medellin.facts.identity.value', {
        defaultValue:
          'Club nacido del arraigo de Puerto Salgar pero criado en los escenarios públicos de Medellín.',
      }),
    },
    {
      label: t('about.medellin.facts.leadership.label', {
        defaultValue: 'Capitanes',
      }),
      value: t('about.medellin.facts.leadership.value', {
        defaultValue:
          'Cristian Rueda, Jeison Montealgre, Leonardo Corrales y Miguel Ángel Soto han portado el brazalete.',
      }),
    },
    {
      label: t('about.medellin.facts.ecosystem.label', {
        defaultValue: 'Ecosistema',
      }),
      value: t('about.medellin.facts.ecosystem.value', {
        defaultValue:
          'Entrenamos y competimos en Unidad Deportiva de Belén, Campoamor, Altavista y la red de escenarios de INDER Medellín.',
      }),
    },
  ];

  const medellinVenues: MedellinVenue[] = [
    {
      meta: t('about.medellin.venues.cards.belen.meta', {
        defaultValue: 'Belén Andrés Escobar',
      }),
      title: t('about.medellin.venues.cards.belen.title', {
        defaultValue: 'Unidad Deportiva de Belén',
      }),
      description: t('about.medellin.venues.cards.belen.description', {
        defaultValue:
          'Nuestra casa principal: canchas de grama natural y sintética, programación de INDER y un pulso comunitario que nunca se apaga.',
      }),
    },
    {
      meta: t('about.medellin.venues.cards.campoamor.meta', {
        defaultValue: 'Comuna 15',
      }),
      title: t('about.medellin.venues.cards.campoamor.title', {
        defaultValue: 'Campoamor',
      }),
      description: t('about.medellin.venues.cards.campoamor.description', {
        defaultValue:
          'Cancha tradicional de barrio donde los torneos y las retas mantienen viva la competencia popular.',
      }),
    },
    {
      meta: t('about.medellin.venues.cards.altavista.meta', {
        defaultValue: 'Altavista',
      }),
      title: t('about.medellin.venues.cards.altavista.title', {
        defaultValue: 'Altavista parte baja',
      }),
      description: t('about.medellin.venues.cards.altavista.description', {
        defaultValue:
          'Escenario comunitario clave donde el fútbol de base no se detiene y la colonia salgar se hace sentir.',
      }),
    },
    {
      meta: t('about.medellin.venues.cards.network.meta', {
        defaultValue: 'Red INDER',
      }),
      title: t('about.medellin.venues.cards.network.title', {
        defaultValue: 'Escenarios itinerantes',
      }),
      description: t('about.medellin.venues.cards.network.description', {
        defaultValue:
          'Prácticamente toda la ciudad: canchas públicas, sintéticas y de barrio renovadas para mantener la agenda competitiva.',
      }),
    },
  ];

  const medellinCommunity: MedellinCommunityHighlight[] = [
    {
      meta: t('about.medellin.community.cards.laf.meta', {
        defaultValue: 'Liga Antioqueña',
      }),
      title: t('about.medellin.community.cards.laf.title', {
        defaultValue: 'Competencias federadas',
      }),
      description: t('about.medellin.community.cards.laf.description', {
        defaultValue:
          'Participamos cuando el calendario lo permite en torneos de la Liga Antioqueña de Fútbol, midiendo nuestro ADN frente a la élite departamental.',
      }),
    },
    {
      meta: t('about.medellin.community.cards.barrio.meta', {
        defaultValue: 'Barrio Antioquia',
      }),
      title: t('about.medellin.community.cards.barrio.title', {
        defaultValue: 'Torneos de barrio',
      }),
      description: t('about.medellin.community.cards.barrio.description', {
        defaultValue:
          'Referentes como el Torneo del Barrio muestran cómo la cultura del fútbol callejero transforma territorios y pule talento.',
      }),
    },
    {
      meta: t('about.medellin.community.cards.altavista.meta', {
        defaultValue: 'Altavista & Belén',
      }),
      title: t('about.medellin.community.cards.altavista.title', {
        defaultValue: 'Festivales comunitarios',
      }),
      description: t('about.medellin.community.cards.altavista.description', {
        defaultValue:
          'Una agenda encendida de campeonatos, retas y fútbol playa que mezcla show, comunidad y oportunidad.',
      }),
    },
    {
      meta: t('about.medellin.community.cards.festivals.meta', {
        defaultValue: 'Formativo',
      }),
      title: t('about.medellin.community.cards.festivals.title', {
        defaultValue: 'Festivales juveniles',
      }),
      description: t('about.medellin.community.cards.festivals.description', {
        defaultValue:
          'Copas como Medellín Soccer Cup atraen delegaciones nacionales e internacionales y usan la red pública de escenarios.',
      }),
    },
  ];

  return {
    founders,
    leadershipTimeline,
    memorialHonours,
    values,
    achievements,
    medellinStory,
    medellinFacts,
    medellinVenues,
    medellinCommunity,
  };
};
