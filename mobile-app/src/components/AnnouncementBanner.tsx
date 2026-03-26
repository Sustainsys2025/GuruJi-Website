import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing, fontFamilies } from '../theme';

interface AnnouncementBannerProps {
  text: string;
  onPress: () => void;
}

export default function AnnouncementBanner({ text, onPress }: AnnouncementBannerProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <LinearGradient
        colors={[colors.primary[500], colors.gold[500], colors.primary[500]]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.banner}
      >
        <Ionicons name="sparkles" size={14} color={colors.white} />
        <Text style={styles.text}>{text}</Text>
        <Ionicons name="sparkles" size={14} color={colors.white} />
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.base,
    gap: spacing.sm,
  },
  text: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 12,
    color: colors.white,
    letterSpacing: 0.5,
  },
});
