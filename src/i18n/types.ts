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
    players: string;
    matches: string;
    form: string;
    login: string;
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
    goalkeeper: string;
    defender: string;
    midfielder: string;
    forward: string;
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