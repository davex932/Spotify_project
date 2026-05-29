import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Typography } from '../theme';

interface Props {
  title: string;
  showSeeAll?: boolean;
  onPressSeeAll?: () => void;
}

export default function SectionHeader({
  title,
  showSeeAll = true,
  onPressSeeAll,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {showSeeAll && (
        <TouchableOpacity onPress={onPressSeeAll} activeOpacity={0.7}>
          <Text style={styles.link}>Voir tout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    ...Typography.headlineSm,
    color: Colors.onSurface,
  },
  link: {
    ...Typography.labelMd,
    color: Colors.primary,
  },
});
