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
import { MOCK_GENRES, MOCK_TRACKS, CURRENT_USER } from '../data/mockData';
import SectionHeader from '../components/SectionHeader';
import GenreCard from '../components/GenreCard';
import TrackCard from '../components/TrackCard';
import MiniPlayer from '../components/MiniPlayer';

export default function HomeScreen({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Azonto</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.6}>
            <Icon
              name="notifications-outline"
              size={22}
              color={Colors.onSurface}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.6}>
            <Icon
              name="settings-outline"
              size={22}
              color={Colors.onSurface}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.avatar,
              { backgroundColor: CURRENT_USER.avatarColor },
            ]}
            onPress={() => navigation.navigate('Profile')}
            activeOpacity={0.7}
          >
            <Text style={styles.avatarText}>{CURRENT_USER.initials}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.greetingSection}>
          <Text style={styles.greetingText}>
            {CURRENT_USER.greeting} {CURRENT_USER.name} 👋
          </Text>
          <Text style={styles.greetingSubtitle}>
            Prêt pour votre session rythmique ?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.searchBar}
          onPress={() => navigation.navigate('Search')}
          activeOpacity={0.8}
        >
          <Icon name="search" size={20} color={Colors.primary} />
          <Text style={styles.searchPlaceholder}>
            Rechercher des artistes, des rythmes...
          </Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <SectionHeader title="En tendance" />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.carousel}
          >
            {MOCK_GENRES.map(genre => (
              <GenreCard
                key={genre.id}
                genre={genre}
                onPress={() => navigation.navigate('Explore')}
              />
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <SectionHeader title="Écoutes récentes" showSeeAll={false} />
          {MOCK_TRACKS.slice(0, 3).map(track => (
            <TrackCard key={track.id} track={track} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: Spacing.containerPadding,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderSubtle,
  },
  headerTitle: { ...Typography.headlineMd, color: Colors.primary },
  headerRight: { flexDirection: 'row', alignItems: 'center' },
  iconBtn: { marginRight: 16 },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: Radius.full,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { ...Typography.labelSm, color: '#000' },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingBottom: 24,
  },
  greetingSection: { marginTop: 20 },
  greetingText: { ...Typography.headlineLg, color: Colors.onSurface },
  greetingSubtitle: {
    ...Typography.bodySm,
    color: Colors.textMuted,
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: Radius.xl,
    paddingHorizontal: 16,
    height: 48,
    marginTop: 20,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  searchPlaceholder: {
    ...Typography.bodySm,
    color: Colors.textMuted,
    marginLeft: 12,
  },
  section: { marginTop: 28 },
  carousel: { flexDirection: 'row' },
});
