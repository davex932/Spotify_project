import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Spacing, Typography, Radius } from '../theme';
import MiniPlayer from '../components/MiniPlayer';

export default function UserProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Mon Profil</Text>
        <TouchableOpacity style={styles.publishBtn} activeOpacity={0.7}>
          <Text style={styles.publishBtnText}>Publish</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.profileSection}>
          <View style={styles.avatarBorderWrapper}>
            <View style={styles.avatarDashedBorder}>
              <View style={styles.avatarCircle}>
                <Text style={styles.avatarText}>CH</Text>
              </View>
            </View>
            <View style={styles.verifiedBadge}>
              <Icon name="checkmark" size={12} color="#000" />
            </View>
          </View>

          <Text style={styles.userName}>Charles Konan</Text>
          <View style={styles.premiumBadge}>
            <Text style={styles.premiumText}>PREMIUM PRO</Text>
          </View>
          <Text style={styles.userLocation}>Abidjan, Côte d'Ivoire</Text>
        </View>

        <View style={styles.bentoContainer}>
          <View style={styles.bentoBox}>
            <Text style={styles.bentoNumber}>14</Text>
            <Text style={styles.bentoLabel}>Playlists</Text>
          </View>
          <View style={styles.bentoBox}>
            <Text style={styles.bentoNumber}>318</Text>
            <Text style={styles.bentoLabel}>Abonnements</Text>
          </View>
          <View style={styles.bentoBox}>
            <Text style={styles.bentoNumber}>1.1K</Text>
            <Text style={styles.bentoLabel}>Écoutes</Text>
          </View>
        </View>

        <View style={styles.heritageCard}>
          <Text style={styles.heritageTitle}>Heritage Creator</Text>
          <Text style={styles.heritageDesc}>
            Vous avez débloqué le badge Bogolan après 1 000 écoutes uniques !
          </Text>
          <TouchableOpacity style={styles.claimBtn} activeOpacity={0.8}>
            <Text style={styles.claimBtnText}>Réclamer le Prix</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Activité récente</Text>
        <View style={styles.activityFeed}>
          <View style={styles.activityItem}>
            <View style={[styles.bullet, { backgroundColor: Colors.primary }]} />
            <Text style={styles.activityText}>
              A liké <Text style={styles.bold}>Afrobeat Pack</Text> · il y a 2h
            </Text>
          </View>
          <View style={styles.activityItem}>
            <View style={[styles.bullet, { backgroundColor: Colors.success }]} />
            <Text style={styles.activityText}>
              A suivi <Text style={styles.bold}>Kofi Kinaata</Text> · hier
            </Text>
          </View>
          <View style={styles.activityItem}>
            <View
              style={[styles.bullet, { backgroundColor: Colors.secondary }]}
            />
            <Text style={styles.activityText}>
              A créé la playlist{' '}
              <Text style={styles.bold}>Late Night Beats</Text> · il y a 3j
            </Text>
          </View>
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
  headerTitle: { ...Typography.headlineMd, color: Colors.onSurface },
  publishBtn: {
    backgroundColor: Colors.primaryContainer,
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: Radius.full,
  },
  publishBtnText: { ...Typography.labelSm, color: Colors.primary },
  scrollContent: {
    paddingHorizontal: Spacing.containerPadding,
    paddingVertical: 20,
  },
  profileSection: { alignItems: 'center', marginVertical: 12 },
  avatarBorderWrapper: { position: 'relative', marginBottom: 12 },
  avatarDashedBorder: {
    borderWidth: 2,
    borderColor: Colors.primary,
    borderStyle: 'dashed',
    borderRadius: Radius.full,
    padding: 6,
  },
  avatarCircle: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.surfaceHigh,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: { ...Typography.headlineMd, fontSize: 28, color: '#fff' },
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
  userName: { ...Typography.headlineMd, color: Colors.onSurface },
  premiumBadge: {
    backgroundColor: 'rgba(255, 183, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255, 183, 0, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: Radius.full,
    marginTop: 6,
  },
  premiumText: {
    ...Typography.labelSm,
    fontSize: 9,
    color: Colors.secondary,
  },
  userLocation: {
    ...Typography.bodySm,
    color: Colors.textMuted,
    marginTop: 4,
  },
  bentoContainer: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 24,
    marginBottom: 24,
  },
  bentoBox: {
    flex: 1,
    backgroundColor: Colors.surface,
    paddingVertical: 16,
    borderRadius: Radius.xl,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  bentoNumber: { ...Typography.headlineMd, color: Colors.primary },
  bentoLabel: {
    ...Typography.labelSm,
    color: Colors.textMuted,
    marginTop: 2,
    textTransform: 'uppercase',
  },
  heritageCard: {
    backgroundColor: 'rgba(255, 122, 0, 0.08)',
    borderWidth: 1,
    borderColor: Colors.outlineVariant,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    marginBottom: 24,
  },
  heritageTitle: {
    ...Typography.headlineSm,
    color: Colors.primary,
    marginBottom: 6,
  },
  heritageDesc: {
    ...Typography.bodySm,
    color: Colors.onSurface,
    lineHeight: 18,
  },
  claimBtn: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingVertical: 8,
    borderRadius: Radius.full,
    alignItems: 'center',
    marginTop: 12,
  },
  claimBtnText: { ...Typography.labelMd, color: Colors.primary },
  sectionTitle: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
    marginBottom: 12,
  },
  activityFeed: {
    backgroundColor: Colors.surface,
    borderRadius: Radius.lg,
    padding: Spacing.md,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bullet: { width: 6, height: 6, borderRadius: 3, marginRight: 10 },
  activityText: { ...Typography.bodySm, color: Colors.onSurface },
  bold: { fontFamily: 'Inter-Bold', color: '#fff' },
});
