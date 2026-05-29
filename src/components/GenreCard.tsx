import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Radius, Typography, Spacing } from '../theme';

interface Props {
  genre: {
    id: string;
    name: string;
    badge: string | null;
    color: string;
    emoji: string;
  };
  onPress?: () => void;
}

export default function GenreCard({ genre, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: genre.color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {genre.badge && (
        <View
          style={[
            styles.badge,
            {
              backgroundColor:
                genre.badge === 'HOT' ? Colors.primary : Colors.success,
            },
          ]}
        >
          <Text style={styles.badgeText}>{genre.badge}</Text>
        </View>
      )}
      <View style={styles.emojiContainer}>
        <Text style={styles.emojiText}>{genre.emoji}</Text>
      </View>
      <Text style={styles.name}>{genre.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    height: 160,
    borderRadius: Radius.xl,
    padding: Spacing.md,
    justifyContent: 'flex-end',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.05)',
  },
  badge: {
    position: 'absolute',
    top: 10,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: Radius.full,
  },
  badgeText: {
    ...Typography.labelSm,
    color: '#000',
  },
  emojiContainer: {
    position: 'absolute',
    top: 35,
    alignSelf: 'center',
  },
  emojiText: {
    fontSize: 48,
    opacity: 0.5,
  },
  name: {
    ...Typography.headlineSm,
    fontSize: 16,
    color: Colors.onSurface,
  },
});
