import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Spacing, Typography, Radius } from '../theme';
import { MOCK_TRACKS } from '../data/mockData';
import TrackCard from '../components/TrackCard';
import MiniPlayer from '../components/MiniPlayer';

export default function ArtistProfileScreen({ navigation }: any) {
  const artistTracks = MOCK_TRACKS.filter(t => t.artist === 'Kofi Kinaata');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <Icon name="arrow-back" size={24} color={Colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Fiche Artiste</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.artistSection}>
          <View style={styles.avatarWrapper}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>KK</Text>
            </View>
            <View style={styles.verifiedBadge}>
              <Icon name="checkmark" size={12} color="#000" />
            </View>
          </View>

          <Text style={styles.artistName}>Kofi Kinaata</Text>
          <Text style={styles.artistMeta}>
            Takoradi, Ghana · 1.2M abonnés
          </Text>
        </View>

        <View style={styles.bioCard}>
          <Text style={styles.bioTitle}>Biographie</Text>
          <Text style={styles.bioText}>
            Musicien et auteur-compositeur ghanéen primé. Réputé pour sa
            dextérité lyrique et sa fusion unique de Highlife et de Rap.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Chansons populaires</Text>
        {artistTracks.map(track => (
          <TrackCard key={track.id} track={track} />
        ))}
      </ScrollView>

      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
    gap: 16,
  },
  headerTitle: { ...Typography.headlineMd, color: Colors.onSurface },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingVertical: 20,
  },
  artistSection: { alignItems: 'center', marginBottom: 24 },
  avatarWrapper: { position: 'relative', marginBottom: 12 },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3D2B1F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { ...Typography.headlineMd, fontSize: 32, color: '#fff' },
  verifiedBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: Colors.primary,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.background,
  },
  artistName: { ...Typography.headlineLg, color: Colors.onSurface },
  artistMeta: { ...Typography.bodySm, color: Colors.textMuted, marginTop: 4 },
  bioCard: {
    backgroundColor: Colors.surface,
    padding: Spacing.md,
    borderRadius: Radius.lg,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
    marginBottom: 24,
  },
  bioTitle: {
    ...Typography.headlineSm,
    color: Colors.primary,
    marginBottom: 6,
  },
  bioText: {
    ...Typography.bodySm,
    color: Colors.onSurface,
    lineHeight: 18,
  },
  sectionTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
    marginBottom: 12,
  },
});
