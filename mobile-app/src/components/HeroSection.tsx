import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, typography, spacing } from '../theme';
import { getImageUrl } from '../utils/helpers';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const IS_TABLET = SCREEN_WIDTH >= 768;
const HERO_HEIGHT = IS_TABLET ? 420 : 280;

interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

export default function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: getImageUrl(backgroundImage) }}
        style={styles.image}
        contentFit="cover"
        transition={400}
      />
      <LinearGradient
        colors={['rgba(58,34,0,0.3)', 'rgba(58,34,0,0.7)']}
        style={styles.overlay}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <LinearGradient
          colors={[colors.transparent, colors.gold[400], colors.transparent]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.divider}
        />
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: HERO_HEIGHT,
    position: 'relative',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  content: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing['2xl'],
  },
  title: {
    ...typography.h1,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  divider: {
    height: 2,
    width: 100,
    marginVertical: spacing.md,
    borderRadius: 1,
  },
  subtitle: {
    ...typography.body,
    color: colors.cream[200],
    textAlign: 'center',
  },
});
