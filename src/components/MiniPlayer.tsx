import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { usePlayer } from '../navigation';
import { Colors, Radius, Typography, Spacing } from '../theme';

export default function MiniPlayer() {
  const { currentTrack, isPlaying, togglePlay } = usePlayer();
  const navigation = useNavigation<any>();

  if (!currentTrack) return null;

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Player')}
    >
      <View
        style={[styles.cover, { backgroundColor: currentTrack.coverColor }]}
      >
        <Text style={styles.emoji}>{currentTrack.emoji}</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {currentTrack.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {currentTrack.artist}
        </Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          onPress={togglePlay}
          style={styles.playBtn}
          activeOpacity={0.8}
        >
          <Icon
            name={isPlaying ? 'pause' : 'play'}
            size={18}
            color="#000"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.progressContainer}>
        <View style={styles.progressFill} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.tabBarBackground,
    borderTopWidth: 1,
    borderTopColor: Colors.outlineVariant,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm,
    height: 64,
    position: 'relative',
  },
  cover: {
    width: 40,
    height: 40,
    borderRadius: Radius.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  emoji: { fontSize: 18 },
  info: { flex: 1 },
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
  controls: {
    justifyContent: 'center',
  },
  playBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: Colors.surfaceHigh,
  },
  progressFill: {
    width: '45%',
    height: '100%',
    backgroundColor: Colors.primary,
  },
});
