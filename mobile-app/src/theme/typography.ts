import { TextStyle } from 'react-native';

export const fontFamilies = {
  heading: 'Orbitron_400Regular',
  headingBold: 'Orbitron_700Bold',
  body: 'Inter_400Regular',
  bodyMedium: 'Inter_500Medium',
  bodySemiBold: 'Inter_600SemiBold',
  bodyBold: 'Inter_700Bold',
  bodyLight: 'Inter_300Light',
};

export const fontSizes = {
  xs: 11,
  sm: 13,
  base: 15,
  md: 17,
  lg: 20,
  xl: 24,
  '2xl': 28,
  '3xl': 34,
  '4xl': 40,
};

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.7,
};

export const typography: Record<string, TextStyle> = {
  heroTitle: {
    fontFamily: fontFamilies.headingBold,
    fontSize: fontSizes['3xl'],
    lineHeight: fontSizes['3xl'] * lineHeights.tight,
    letterSpacing: 1.5,
  },
  h1: {
    fontFamily: fontFamilies.headingBold,
    fontSize: fontSizes['2xl'],
    lineHeight: fontSizes['2xl'] * lineHeights.tight,
    letterSpacing: 1,
  },
  h2: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
    lineHeight: fontSizes.xl * lineHeights.tight,
    letterSpacing: 0.8,
  },
  h3: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.lg,
    lineHeight: fontSizes.lg * lineHeights.tight,
    letterSpacing: 0.5,
  },
  body: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.base,
    lineHeight: fontSizes.base * lineHeights.relaxed,
  },
  bodyMedium: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: fontSizes.base,
    lineHeight: fontSizes.base * lineHeights.relaxed,
  },
  bodySemiBold: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: fontSizes.base,
    lineHeight: fontSizes.base * lineHeights.normal,
  },
  bodySmall: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.sm,
    lineHeight: fontSizes.sm * lineHeights.relaxed,
  },
  caption: {
    fontFamily: fontFamilies.body,
    fontSize: fontSizes.xs,
    lineHeight: fontSizes.xs * lineHeights.normal,
  },
  button: {
    fontFamily: fontFamilies.bodySemiBold,
    fontSize: fontSizes.base,
    letterSpacing: 0.5,
  },
  tabLabel: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: fontSizes.xs,
  },
};
