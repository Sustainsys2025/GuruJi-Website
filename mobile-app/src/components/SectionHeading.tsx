import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing } from '../theme';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: SectionHeadingProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, light && styles.titleLight]}>{title}</Text>
      <LinearGradient
        colors={[colors.transparent, colors.gold[500], colors.transparent]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.divider}
      />
      {subtitle && (
        <Text style={[styles.subtitle, light && styles.subtitleLight]}>{subtitle}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h2,
    color: colors.brown[600],
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  titleLight: {
    color: colors.white,
  },
  divider: {
    height: 2,
    width: 120,
    marginVertical: spacing.md,
    borderRadius: 1,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  subtitleLight: {
    color: colors.cream[200],
  },
});
