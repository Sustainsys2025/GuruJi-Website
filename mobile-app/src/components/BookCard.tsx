import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

interface BookCardProps {
  title: string;
  description: string;
  colorPlaceholder: string;
  type: string;
}

export default function BookCard({ title, description, colorPlaceholder, type }: BookCardProps) {
  return (
    <View style={[styles.card, shadows.md]}>
      <View style={[styles.cover, { backgroundColor: colorPlaceholder }]}>
        <Ionicons name="book" size={32} color="rgba(255,255,255,0.4)" />
        <Text style={styles.coverTitle}>{title}</Text>
        <View style={styles.coverLine} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Ionicons name="download-outline" size={16} color={colors.white} />
          <Text style={styles.buttonText}>Download {type}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.base,
  },
  cover: {
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  coverTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
    textAlign: 'center',
    marginTop: spacing.sm,
  },
  coverLine: {
    height: 2,
    width: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 1,
    marginTop: spacing.sm,
  },
  content: {
    padding: spacing.base,
  },
  title: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  buttonText: {
    ...typography.button,
    color: colors.white,
    fontSize: 13,
  },
});
