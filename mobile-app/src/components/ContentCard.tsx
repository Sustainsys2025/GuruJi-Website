import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { getImageUrl } from '../utils/helpers';

const IS_TABLET = Dimensions.get('window').width >= 768;

interface ContentCardProps {
  heading: string;
  description: string;
  imageSrc?: string;
  imageOnRight?: boolean;
}

export default function ContentCard({
  heading,
  description,
  imageSrc,
  imageOnRight,
}: ContentCardProps) {
  return (
    <View style={[styles.card, shadows.md]}>
      {imageSrc && (
        <Image
          source={{ uri: getImageUrl(imageSrc) }}
          style={styles.image}
          contentFit="cover"
          contentPosition="top"
          transition={300}
        />
      )}
      <View style={styles.content}>
        <Text style={styles.heading}>{heading}</Text>
        <View style={styles.divider} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginHorizontal: spacing.base,
    marginBottom: spacing.lg,
  },
  image: {
    width: '100%',
    height: IS_TABLET ? 400 : 220,
  },
  content: {
    padding: spacing.xl,
  },
  heading: {
    ...typography.h3,
    color: colors.brown[600],
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  divider: {
    height: 2,
    width: 60,
    backgroundColor: colors.gold[500],
    borderRadius: 1,
    marginBottom: spacing.md,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
});
