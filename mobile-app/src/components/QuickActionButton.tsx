import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { colors, spacing, borderRadius, shadows, fontFamilies } from '../theme';

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

interface QuickActionButtonProps {
  icon: IoniconsName;
  label: string;
  subtitle?: string;
  url: string;
  color?: string;
}

export default function QuickActionButton({
  icon,
  label,
  subtitle,
  url,
  color = colors.primary[500],
}: QuickActionButtonProps) {
  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, shadows.sm]}
      activeOpacity={0.8}
    >
      <Ionicons name={icon} size={22} color={color} />
      <Text style={[styles.label, { color }]}>{label}</Text>
      {subtitle && (
        <Text style={styles.subtitle}>{subtitle}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.lg,
    gap: spacing.xs,
  },
  label: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: 11,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: fontFamilies.body,
    fontSize: 9,
    color: colors.textMuted,
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: -2,
  },
});
