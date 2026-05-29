export interface Track {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  plays: string;
  coverColor: string;
  emoji: string;
}

export const MOCK_TRACKS: Track[] = [
  {
    id: '1',
    title: 'Things Fall Apart',
    artist: 'Kofi Kinaata',
    album: 'Azonto Hits Vol. 1',
    duration: '4:12',
    plays: '5.6M',
    coverColor: '#4A2E1B',
    emoji: '🎸',
  },
  {
    id: '2',
    title: 'Love Nwantiti',
    artist: 'CKay',
    album: 'Romantic Beats',
    duration: '3:45',
    plays: '3.9M',
    coverColor: '#1B4A2E',
    emoji: '🎷',
  },
  {
    id: '3',
    title: 'Susuka',
    artist: 'Kofi Kinaata',
    album: 'Kinaata Classics',
    duration: '3:58',
    plays: '4.2M',
    coverColor: '#2E1B4A',
    emoji: '🥁',
  },
  {
    id: '4',
    title: 'Confession',
    artist: 'Kofi Kinaata',
    album: 'Kinaata Classics',
    duration: '4:30',
    plays: '3.1M',
    coverColor: '#4A1B28',
    emoji: '🎹',
  },
  {
    id: '5',
    title: 'Thy Grace',
    artist: 'Kofi Kinaata',
    album: 'Digital Heritage',
    duration: '5:01',
    plays: '2.4M',
    coverColor: '#1B354A',
    emoji: '🎺',
  },
];

export const MOCK_GENRES = [
  { id: '1', name: 'Afrobeat', badge: 'HOT', color: '#4A2A00', emoji: '🥁' },
  { id: '2', name: 'Amapiano', badge: 'TRENDING', color: '#113F11', emoji: '🎹' },
  { id: '3', name: 'Highlife', badge: 'NEW', color: '#2B1A4A', emoji: '🎸' },
  { id: '4', name: 'Afro-Soul', badge: null, color: '#3A1A1A', emoji: '🎷' },
];

export const MOCK_PLAYLISTS = [
  { id: '1', name: 'Late Night Beats', songCount: 42, color: '#3E2A00' },
  { id: '2', name: 'Focus Flow', songCount: 118, color: '#003E2A' },
  { id: '3', name: 'Acoustic Roots', songCount: 56, color: '#1D003E' },
];

export const MOCK_ARTISTS = [
  { id: '1', name: 'Kofi Kinaata', location: 'Takoradi, Ghana', initials: 'KK', color: '#3D2B1F' },
  { id: '2', name: 'Sarkodie', location: 'Tema, Ghana', initials: 'SK', color: '#1F2B3D' },
  { id: '3', name: 'CKay', location: 'Lagos, Nigeria', initials: 'CK', color: '#2B3D1F' },
];

export const CURRENT_USER = {
  name: 'Charles',
  greeting: 'Bonsoir',
  initials: 'CH',
  avatarColor: '#ff7a00',
};
