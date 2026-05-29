import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Spacing, Typography, Radius } from '../theme';
import { MOCK_PLAYLISTS } from '../data/mockData';
import MiniPlayer from '../components/MiniPlayer';

export default function LibraryScreen() {
  const [activeTab, setActiveTab] = useState('playlists');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bibliothèque</Text>
      </View>

      <View style={styles.tabsRow}>
        {['playlists', 'artistes', 'albums'].map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabChip, activeTab === tab && styles.tabChipActive]}
            onPress={() => setActiveTab(tab)}
            activeOpacity={0.7}
          >
            <Text
              style={[styles.tabText, activeTab === tab && styles.tabTextActive]}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <LinearGradient
          colors={['#6B48FF', '#FF7A00']}
          style={styles.likedCard}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View style={styles.likedHeader}>
            <Icon name="heart" size={28} color="#fff" />
            <Text style={styles.likedTitle}>Titres Likés</Text>
          </View>
          <Text style={styles.likedSubtitle}>
            348 morceaux · Dernier ajout il y a 2h
          </Text>
        </LinearGradient>

        <Text style={styles.sectionTitle}>Vos Playlists</Text>
        {MOCK_PLAYLISTS.map(playlist => (
          <View key={playlist.id} style={styles.playlistRow}>
            <View
              style={[styles.playlistCover, { backgroundColor: playlist.color }]}
            >
              <Icon
                name="musical-notes-outline"
                size={22}
                color={Colors.primary}
              />
            </View>
            <View style={styles.playlistInfo}>
              <Text style={styles.playlistName}>{playlist.name}</Text>
              <Text style={styles.playlistCount}>
                Playlist · {playlist.songCount} titres
              </Text>
            </View>
            <Icon name="chevron-forward" size={16} color={Colors.textMuted} />
          </View>
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
    justifyContent: 'center',
    paddingHorizontal: Spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  headerTitle: { ...Typography.headlineMd, color: Colors.onSurface },
  tabsRow: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.containerPadding,
    paddingVertical: 12,
    gap: 8,
  },
  tabChip: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: Radius.full,
    backgroundColor: Colors.surfaceHigh,
  },
  tabChipActive: {
    backgroundColor: Colors.primaryContainer,
  },
  tabText: { ...Typography.labelMd, color: Colors.textMuted },
  tabTextActive: { color: Colors.primary },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingBottom: 24,
  },
  likedCard: {
    borderRadius: Radius.xl,
    padding: 20,
    marginBottom: 24,
    height: 120,
    justifyContent: 'space-between',
  },
  likedHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  likedTitle: { ...Typography.headlineSm, color: '#fff' },
  likedSubtitle: {
    ...Typography.bodySm,
    color: 'rgba(255, 255, 255, 0.8)',
  },
  sectionTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
    marginBottom: 12,
  },
  playlistRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    padding: 12,
    borderRadius: Radius.lg,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  playlistCover: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  playlistInfo: { flex: 1 },
  playlistName: {
    ...Typography.bodySm,
    fontFamily: 'Sora-SemiBold',
    color: Colors.onSurface,
  },
  playlistCount: { ...Typography.labelSm, color: Colors.textMuted },
});
