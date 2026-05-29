import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Spacing, Typography, Radius } from '../theme';
import { MOCK_TRACKS, MOCK_GENRES } from '../data/mockData';
import TrackCard from '../components/TrackCard';
import GenreCard from '../components/GenreCard';
import MiniPlayer from '../components/MiniPlayer';

export default function SearchScreen() {
  const [query, setQuery] = useState('');

  const filteredTracks = MOCK_TRACKS.filter(
    track =>
      track.title.toLowerCase().includes(query.toLowerCase()) ||
      track.artist.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchHeader}>
        <View style={styles.searchWrapper}>
          <Icon
            name="search"
            size={20}
            color={Colors.primary}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Artistes, chansons, rythmes..."
            placeholderTextColor={Colors.textMuted}
            value={query}
            onChangeText={setQuery}
            autoCorrect={false}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {query.trim() === '' ? (
          <View>
            <Text style={styles.sectionTitle}>Rechercher par genres</Text>
            <View style={styles.genreGrid}>
              {MOCK_GENRES.map(genre => (
                <View key={genre.id} style={styles.gridItem}>
                  <GenreCard genre={genre} />
                </View>
              ))}
            </View>
          </View>
        ) : (
          <View>
            <Text style={styles.sectionTitle}>
              Résultats ({filteredTracks.length})
            </Text>
            {filteredTracks.length > 0 ? (
              filteredTracks.map(track => (
                <TrackCard key={track.id} track={track} />
              ))
            ) : (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>
                  Aucun morceau ne correspond à votre recherche.
                </Text>
              </View>
            )}
          </View>
        )}
      </ScrollView>

      <MiniPlayer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  searchHeader: {
    padding: Spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    paddingHorizontal: 12,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, color: Colors.onSurface, ...Typography.bodySm },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingVertical: 16,
  },
  sectionTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
    marginBottom: 16,
  },
  genreGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: { width: '48%', marginBottom: 12 },
  noResults: { alignItems: 'center', marginTop: 40 },
  noResultsText: { ...Typography.bodySm, color: Colors.textMuted },
});
