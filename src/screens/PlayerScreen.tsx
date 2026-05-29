import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import { usePlayer } from '../navigation';
import { Colors, Typography, Spacing } from '../theme';
import { MOCK_TRACKS } from '../data/mockData';

export default function PlayerScreen({ navigation }: any) {
  const { currentTrack, isPlaying, togglePlay } = usePlayer();
  const track = currentTrack || MOCK_TRACKS[0];

  const waveBars = [
    12, 28, 40, 20, 8, 32, 24, 16, 28, 36, 12, 8, 20, 32, 28, 14, 8, 24, 30,
    40, 16, 12, 28, 32, 10,
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.6}
        >
          <Icon name="chevron-down" size={28} color={Colors.onSurface} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Lecteur</Text>
        <View style={{ width: 28 }} />
      </View>

      <View style={styles.visualContainer}>
        <View
          style={[styles.albumCover, { backgroundColor: track.coverColor }]}
        >
          <Text style={styles.albumEmoji}>{track.emoji}</Text>
        </View>
      </View>

      <View style={styles.trackInfo}>
        <Text style={styles.trackTitle} numberOfLines={1}>
          {track.title}
        </Text>
        <Text style={styles.trackArtist} numberOfLines={1}>
          {track.artist} · {track.album}
        </Text>
      </View>

      <View style={styles.waveformContainer}>
        {waveBars.map((height, i) => (
          <View
            key={i}
            style={[
              styles.waveBar,
              { height },
              i < 12
                ? { backgroundColor: Colors.primary }
                : { backgroundColor: Colors.surfaceHigh },
            ]}
          />
        ))}
      </View>

      <View style={styles.progressSection}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          value={45}
          minimumTrackTintColor={Colors.primary}
          maximumTrackTintColor={Colors.surfaceHigh}
          thumbTintColor={Colors.primary}
        />
        <View style={styles.timeRow}>
          <Text style={styles.timeText}>1:52</Text>
          <Text style={styles.timeText}>{track.duration}</Text>
        </View>
      </View>

      <View style={styles.controlsRow}>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="shuffle" size={24} color={Colors.textMuted} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="play-skip-back" size={28} color={Colors.onSurface} />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.playBtn}
          onPress={togglePlay}
          activeOpacity={0.8}
        >
          <Icon
            name={isPlaying ? 'pause' : 'play'}
            size={32}
            color="#000"
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="play-skip-forward" size={28} color={Colors.onSurface} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="repeat" size={24} color={Colors.textMuted} />
        </TouchableOpacity>
      </View>

      <View style={styles.footerActions}>
        <TouchableOpacity style={styles.footerActionBtn}>
          <Icon name="heart-outline" size={20} color={Colors.onSurface} />
          <Text style={styles.footerActionText}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerActionBtn}>
          <Icon name="add-circle-outline" size={20} color={Colors.onSurface} />
          <Text style={styles.footerActionText}>Playlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerActionBtn}>
          <Icon
            name="share-social-outline"
            size={20}
            color={Colors.onSurface}
          />
          <Text style={styles.footerActionText}>Partager</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.containerPadding,
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  header: {
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: { ...Typography.headlineMd, color: Colors.primary },
  visualContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  albumCover: {
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 16,
    elevation: 8,
  },
  albumEmoji: { fontSize: 80 },
  trackInfo: { alignItems: 'center' },
  trackTitle: { ...Typography.headlineMd, color: Colors.onSurface },
  trackArtist: {
    ...Typography.bodySm,
    color: Colors.primaryLight,
    marginTop: 4,
  },
  waveformContainer: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  waveBar: {
    width: 3,
    borderRadius: 2,
  },
  progressSection: {},
  slider: {
    width: '100%',
    height: 40,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  timeText: { ...Typography.labelSm, color: Colors.textMuted },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 12,
  },
  playBtn: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerActionBtn: {
    alignItems: 'center',
    gap: 4,
  },
  footerActionText: { ...Typography.labelSm, color: Colors.textMuted },
});
