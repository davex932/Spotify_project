import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { Colors, Spacing, Typography, Radius } from '../theme';
import { MOCK_GENRES, MOCK_ARTISTS } from '../data/mockData';
import SectionHeader from '../components/SectionHeader';
import GenreCard from '../components/GenreCard';
import MiniPlayer from '../components/MiniPlayer';

export default function ExploreScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explorer</Text>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <SectionHeader title="Genres musicaux" showSeeAll={false} />
          <View style={styles.grid}>
            {MOCK_GENRES.map(genre => (
              <View key={genre.id} style={styles.gridItem}>
                <GenreCard genre={genre} onPress={() => {}} />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Artistes populaires" showSeeAll={false} />
          {MOCK_ARTISTS.map(artist => (
            <TouchableOpacity
              key={artist.id}
              style={styles.artistRow}
              onPress={() =>
                artist.id === '1'
                  ? navigation.navigate('ArtistProfile')
                  : null
              }
              activeOpacity={0.7}
            >
              <View
                style={[styles.artistAvatar, { backgroundColor: artist.color }]}
              >
                <Text style={styles.avatarText}>{artist.initials}</Text>
              </View>
              <View style={styles.artistInfo}>
                <Text style={styles.artistName}>{artist.name}</Text>
                <Text style={styles.artistLocation}>{artist.location}</Text>
              </View>
              <View style={styles.followBtn}>
                <Text style={styles.followBtnText}>Suivre</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: {
    height: 56,
    justifyContent: 'center',
    paddingHorizontal: Spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  headerTitle: { ...Typography.headlineMd, color: Colors.onSurface },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingBottom: 24,
  },
  section: { marginTop: 20 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: { width: '48%', marginBottom: 12 },
  artistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: Radius.lg,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  artistAvatar: {
    width: 44,
    height: 44,
    borderRadius: Radius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  avatarText: { ...Typography.labelMd, color: '#fff' },
  artistInfo: { flex: 1 },
  artistName: {
    ...Typography.bodySm,
    fontFamily: 'Sora-SemiBold',
    color: Colors.onSurface,
  },
  artistLocation: { ...Typography.labelSm, color: Colors.textMuted },
  followBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: Radius.full,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  followBtnText: { ...Typography.labelSm, color: Colors.primary },
});
