import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { getImageUrl } from '../utils/helpers';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = (SCREEN_WIDTH - spacing.base * 3) / 2;

interface GalleryEventCardProps {
  title: string;
  date: string;
  coverPhoto: string;
  photoCount: number;
  onPress: () => void;
}

export default function GalleryEventCard({
  title,
  date,
  coverPhoto,
  photoCount,
  onPress,
}: GalleryEventCardProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.card, shadows.md]}
    >
      <Image
        source={{ uri: getImageUrl(coverPhoto) }}
        style={styles.image}
        contentFit="cover"
        transition={300}
      />
      <View style={styles.badge}>
        <Ionicons name="images-outline" size={11} color={colors.white} />
        <Text style={styles.badgeText}>{photoCount}</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginBottom: spacing.base,
  },
  image: {
    width: '100%',
    height: CARD_WIDTH * 0.8,
  },
  badge: {
    position: 'absolute',
    top: spacing.sm,
    right: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
    gap: 4,
  },
  badgeText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: colors.white,
  },
  content: {
    padding: spacing.md,
  },
  title: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 13,
    color: colors.textPrimary,
    marginBottom: 2,
  },
  date: {
    fontFamily: 'Inter_400Regular',
    fontSize: 11,
    color: colors.textMuted,
  },
});
