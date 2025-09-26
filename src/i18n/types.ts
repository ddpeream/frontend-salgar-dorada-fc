// Tipos para el sistema de traducción
export type Language = 'es' | 'en';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}

// Tipos para las claves de traducción
export type TranslationKeys = {
  navigation: {
    home: string;
    about: string;
    players: string;
    matches: string;
    form: string;
    login: string;
  };
  about: {
    hero: {
      badge: string;
      title: string;
      highlight: string;
      subtitle: string;
      scroll: string;
      stats: {
        years: string;
        community: string;
        competitions: string;
      };
    };
    identity: {
      eyebrow: string;
      title: string;
      description: string;
      cards: {
        roots: {
          tag: string;
          title: string;
          text: string;
        };
        structure: {
          tag: string;
          title: string;
          text: string;
        };
        future: {
          tag: string;
          title: string;
          text: string;
        };
      };
    };
    founders: {
      eyebrow: string;
      title: string;
      description: string;
      badges: {
        origin: string;
        guardian: string;
        community: string;
        visionary: string;
      };
      roles: {
        spark: string;
        guardian: string;
        community: string;
        visionary: string;
        connector: string;
      };
    };
    memorial: {
      eyebrow: string;
      title: string;
      description: string;
      cards: {
        pioneers: {
          title: string;
          text: string;
          footnote: string;
        };
        companions: {
          title: string;
          text: string;
          footnote: string;
        };
      };
    };
    leadership: {
      eyebrow: string;
      title: string;
      description: string;
      timeline: {
        foundation: {
          badge: string;
          period: string;
          caption: string;
        };
        partner: {
          badge: string;
          period: string;
          caption: string;
        };
        transition: {
          badge: string;
          period: string;
          caption: string;
        };
        present: {
          badge: string;
          period: string;
          caption: string;
        };
      };
    };
    values: {
      eyebrow: string;
      title: string;
      description: string;
      pillars: {
        respect: {
          title: string;
          description: string;
        };
        discipline: {
          title: string;
          description: string;
        };
        intensity: {
          title: string;
          description: string;
        };
        passion: {
          title: string;
          description: string;
        };
      };
    };
    achievements: {
      eyebrow: string;
      title: string;
      description: string;
      cards: {
        community: {
          title: string;
          text: string;
        };
        talent: {
          title: string;
          text: string;
        };
        identity: {
          title: string;
          text: string;
        };
      };
    };
    medellin: {
      eyebrow: string;
      title: string;
      description: string;
      story: {
        badge: string;
        title: string;
        footnote: string;
        paragraphs: {
          arrival: string;
          community: string;
          formalization: string;
        };
      };
      facts: {
        identity: {
          label: string;
          value: string;
        };
        leadership: {
          label: string;
          value: string;
        };
        ecosystem: {
          label: string;
          value: string;
        };
      };
      venues: {
        marker: string;
        cards: {
          belen: {
            meta: string;
            title: string;
            description: string;
          };
          campoamor: {
            meta: string;
            title: string;
            description: string;
          };
          altavista: {
            meta: string;
            title: string;
            description: string;
          };
          network: {
            meta: string;
            title: string;
            description: string;
          };
        };
      };
      community: {
        marker: string;
        cards: {
          laf: {
            meta: string;
            title: string;
            description: string;
          };
          barrio: {
            meta: string;
            title: string;
            description: string;
          };
          altavista: {
            meta: string;
            title: string;
            description: string;
          };
          festivals: {
            meta: string;
            title: string;
            description: string;
          };
        };
      };
      colonial: {
        title: string;
        description: string;
        note: string;
      };
    };
    manifest: {
      eyebrow: string;
      title: string;
      description: string;
      heading: string;
      text: string;
      closing: string;
    };
    cta: {
      title: string;
      text: string;
      primary: string;
      secondary: string;
    };
  };
  auth: {
    login: string;
    logout: string;
    username: string;
    password: string;
    loginButton: string;
    loginError: string;
    welcomeBack: string;
    pleaseLogin: string;
  };
  home: {
    title: string;
    welcome: string;
    description: string;
    quickActions: string;
    viewPlayers: string;
    viewMatches: string;
    registerPlayer: string;
    hero: {
      accent: string;
      title: string;
      subtitle: string;
      knowTeam: string;
      joinClub: string;
    };
    stats: {
      talents: string;
      staff: string;
      fans: string;
    };
    vision: {
      accent: string;
      title: string;
      subtitle: string;
    };
    highlights: {
      title: string;
      subtitle: string;
      sectionAccent: string;
      sectionTitle: string;
      sectionLead: string;
      methodology: {
        tag: string;
        title: string;
        description: string;
        meta: string;
        action: string;
      };
      academy: {
        tag: string;
        title: string;
        description: string;
        meta: string;
        action: string;
      };
      innovation: {
        tag: string;
        title: string;
        description: string;
        meta: string;
        action: string;
      };
    };
    cta: {
      accent: string;
      title: string;
      text: string;
      applyButton: string;
      discoverButton: string;
    };
    slider: {
      accent: string;
      title: string;
      subtitle: string;
      previousSlide: string;
      nextSlide: string;
      home_matches: {
        label: string;
        title: string;
        text: string;
      };
      away_style: {
        label: string;
        title: string;
        text: string;
      };
      training: {
        label: string;
        title: string;
        text: string;
      };
    };
  };
  players: {
    title: string;
    search: string;
    noResults: string;
    playerProfile: string;
    personalInfo: string;
    contactInfo: string;
    documents: string;
    stats: string;
    name: string;
    age: string;
    position: string;
    email: string;
    phone: string;
    address: string;
    documentType: string;
    documentNumber: string;
    emergencyContact: string;
    back: string;
    pageEyebrow: string;
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    playerSingular: string;
    playerPlural: string;
    searchMatches: string;
    exploreAll: string;
    noMatches: string;
    adjustSearch: string;
    loading: string;
    profileLabels: {
      number: string;
      mobile: string;
      address: string;
      birthDate: string;
      phone: string;
      nickname: string;
      disguise: string;
      "See details": string;
    };
  };
  matches: {
    title: string;
    schedule: string;
    results: string;
    standings: string;
    tournament: string;
    date: string;
    time: string;
    teams: string;
    venue: string;
    result: string;
    vs: string;
    position: string;
    team: string;
    played: string;
    won: string;
    drawn: string;
    lost: string;
    goalsFor: string;
    goalsAgainst: string;
    goalDifference: string;
    points: string;
    upcoming: string;
    completed: string;
    pageEyebrow: string;
    pageTitle: string;
    pageSubtitle: string;
    selectTournament: string;
    tabs: {
      history: string;
      calendar: string;
      table: string;
    };
    sections: {
      lastMatches: string;
      lastMatchesDescription: string;
      upcomingMatches: string;
      upcomingMatchesDescription: string;
      standings: string;
      standingsDescription: string;
    };
    status: {
      finished: string;
      scheduled: string;
      live: string;
      suspended: string;
      unknown: string;
    };
    stats: {
      points: string;
      position: string;
      difference: string;
      goalsFor: string;
    };
  };
  form: {
    title: string;
    badge: string;
    formTitle: string;
    formSubtitle: string;
    personalData: string;
    personalDataDescription: string;
    contactData: string;
    contactDataDescription: string;
    sportsData: string;
    sportsDataDescription: string;
    submitTitle: string;
    submitHint: string;
    submitButton: string;
    submitting: string;
    footerNote: string;
    documents: string;
    save: string;
    cancel: string;
    required: string;
    firstName: string;
    firstNamePlaceholder: string;
    lastName: string;
    lastNamePlaceholder: string;
    birthDate: string;
    birthDatePlaceholder: string;
    documentType: string;
    documentNumber: string;
    email: string;
    phone: string;
    phonePlaceholder: string;
    mobile: string;
    mobilePlaceholder: string;
    address: string;
    addressPlaceholder: string;
    emergencyContact: string;
    emergencyPhone: string;
    position: string;
    positionPlaceholder: string;
    identification: string;
    identificationPlaceholder: string;
    success: string;
    error: string;
    officialCall: string;
    subtitle: string;
    feedback: {
      success: string;
      error: string;
    };
    validation: {
      maxCharacters: string;
      required: string;
      requiredName: string;
      requiredLastName: string;
      requiredAddress: string;
      requiredPlayerType: string;
      requiredId: string;
      requiredBirthDate: string;
      requiredPhone: string;
      requiredLandline: string;
      validDate: string;
      validPhone: string;
      validLandline: string;
    };
  };
  common: {
    loading: string;
    error: string;
    success: string;
    confirm: string;
    cancel: string;
    save: string;
    edit: string;
    delete: string;
    back: string;
    next: string;
    previous: string;
    search: string;
    filter: string;
    reset: string;
    close: string;
    open: string;
    yes: string;
    no: string;
    all: string;
    none: string;
    selectOption: string;
  };
  documentTypes: {
    cc: string;
    ti: string;
    ce: string;
    passport: string;
    other: string;
  };
  positions: {
    Delantero: string;
    Defensa: string;
    Arquero: string;
    Volante: string;
    Extremo: string;
    Mediapunta: string;
    "Director Técnico": string;
  };
  footer: {
    allRightsReserved: string;
    developedBy: string;
    slogan: string;
    location: string;
    contact: string;
    training: string;
    community: string;
  };
};

// Configuración de idiomas disponibles
export const AVAILABLE_LANGUAGES: LanguageOption[] = [
  {
    code: 'es',
    name: 'Español',
    flag: '🇪🇸',
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
  },
];

// Idioma por defecto
export const DEFAULT_LANGUAGE: Language = 'es';