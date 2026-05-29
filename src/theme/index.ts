export const Colors = {
  // Arrière-plans obsidian profonds
  background: '#131317',
  surface: '#1F1F23',
  surfaceLow: '#1B1B1F',
  surfaceHigh: '#2A292E',
  surfaceHighest: '#353439',

  // Couleurs de marque : Sunset Orange (Primaire) & Ochre (Secondaire)
  primary: '#FF7A00',
  primaryLight: '#FFB68B',
  primaryContainer: 'rgba(255, 122, 0, 0.15)',
  secondary: '#FFB700',
  secondaryLight: '#FFDB9F',

  // Texte & Contraste
  onBackground: '#E4E1E7',
  onSurface: '#E4E1E7',
  onSurfaceVariant: '#E0C0AF',
  textMuted: '#A78B7C',

  // Bordures
  outline: '#A78B7C',
  outlineVariant: '#584235',
  borderSubtle: 'rgba(255, 255, 255, 0.08)',

  // États
  success: '#59DE9B',
  error: '#FFB4AB',

  // Remplacement de blur natif pour Android (Fond opaque de secours)
  tabBarBackground: 'rgba(19, 19, 23, 0.95)',
  playerBackgroundOverlay: 'rgba(19, 19, 23, 0.98)',
};

export const Typography = {
  // Titres : Utilisation de Sora (si non dispo, utilise le fallback système bold)
  displayLg: { fontFamily: 'Sora-Bold', fontSize: 40, lineHeight: 48 },
  headlineLg: { fontFamily: 'Sora-SemiBold', fontSize: 30, lineHeight: 38 },
  headlineMd: { fontFamily: 'Sora-SemiBold', fontSize: 22, lineHeight: 28 },
  headlineSm: { fontFamily: 'Sora-SemiBold', fontSize: 18, lineHeight: 24 },

  // Corps & Descriptions : Utilisation de Inter
  bodyLg: { fontFamily: 'Inter-Regular', fontSize: 18, lineHeight: 26 },
  bodyMd: { fontFamily: 'Inter-Regular', fontSize: 15, lineHeight: 22 },
  bodySm: { fontFamily: 'Inter-Regular', fontSize: 13, lineHeight: 18 },

  // Étiquettes & Boutons
  labelMd: { fontFamily: 'Inter-SemiBold', fontSize: 12, letterSpacing: 0.5 },
  labelSm: { fontFamily: 'Inter-Bold', fontSize: 10 },
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  containerPadding: 20,
};

export const Radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
};
