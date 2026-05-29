import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { usePlayer } from '../navigation';
import { Colors, Radius, Typography } from '../theme';
import { Track } from '../data/mockData';

interface Props {
  track: Track;
}

export default function TrackCard({ track }: Props) {
  const { currentTrack, isPlaying, setCurrentTrack } = usePlayer();
  const isCurrent = currentTrack?.id === track.id;

  return (
    <TouchableOpacity
      style={[styles.container, isCurrent && styles.activeContainer]}
      onPress={() => setCurrentTrack(track)}
      activeOpacity={0.7}
    >
      <View style={[styles.cover, { backgroundColor: track.coverColor }]}>
        <Text style={styles.emoji}>{track.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text
          style={[styles.title, isCurrent && { color: Colors.primary }]}
          numberOfLines={1}
        >
          {track.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {track.artist}
        </Text>
      </View>
      <View style={styles.playBtn}>
        <Icon
          name={isCurrent && isPlaying ? 'pause' : 'play'}
          size={16}
          color={isCurrent ? Colors.primary : Colors.onSurface}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surfaceLow,
    borderRadius: Radius.lg,
    padding: 12,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.borderSubtle,
  },
  activeContainer: {
    borderColor: Colors.outlineVariant,
  },
  cover: {
    width: 48,
    height: 48,
    borderRadius: Radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  emoji: {
    fontSize: 20,
  },
  info: {
    flex: 1,
  },
  title: {
    ...Typography.bodySm,
    fontFamily: 'Sora-SemiBold',
    color: Colors.onSurface,
  },
  artist: {
    ...Typography.labelSm,
    color: Colors.primaryLight,
    marginTop: 2,
  },
  playBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surfaceHigh,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
