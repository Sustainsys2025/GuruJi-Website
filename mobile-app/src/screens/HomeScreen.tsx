import React from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import AnnouncementBanner from '../components/AnnouncementBanner';
import SectionHeading from '../components/SectionHeading';
import VideoPlayer from '../components/VideoPlayer';
import SubscribeSection from '../components/SubscribeSection';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { getImageUrl } from '../utils/helpers';

import homeData from '../data/home.json';
import siteData from '../data/site.json';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const IS_TABLET = SCREEN_WIDTH >= 768;

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();

  const goToSchedule = () => {
    navigation.navigate('ScheduleTab');
  };

  return (
    <ScrollView
      style={[styles.container, { paddingTop: insets.top }]}
      showsVerticalScrollIndicator={false}
    >
      {/* Announcement Banner */}
      <AnnouncementBanner
        text={siteData.announcement.text}
        onPress={goToSchedule}
      />

      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={{ uri: getImageUrl('/images/guruji-pics/guruji-saffron.webp') }}
          style={styles.heroImage}
          contentFit="cover"
          contentPosition="top"
          transition={500}
        />
        <LinearGradient
          colors={['rgba(253,252,248,0)', colors.cream[50]]}
          style={styles.heroGradient}
        />
        <View style={styles.heroContent}>
          <Text style={styles.heroTitle}>{homeData.hero.title}</Text>
          <LinearGradient
            colors={[colors.transparent, colors.gold[500], colors.transparent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.heroDivider}
          />
          <Text style={styles.heroSubtitle}>{homeData.hero.subtitle}</Text>
        </View>
      </View>

      {/* Who Are We */}
      <View style={styles.section}>
        <SectionHeading title={homeData.intro.heading} />
        <View style={[styles.introCard, shadows.md]}>
          <Image
            source={{ uri: getImageUrl(homeData.intro.imageSrc) }}
            style={styles.introImage}
            contentFit="cover"
            transition={300}
          />
          <View style={styles.introContent}>
            <Text style={styles.introText}>{homeData.intro.description}</Text>
          </View>
        </View>
      </View>

      {/* Featured Video */}
      <View style={styles.section}>
        <SectionHeading title="Featured Satsang" subtitle="Watch our latest gathering" />
        <VideoPlayer source="/videos/feb-satsang-2026.mp4" />
      </View>

      {/* CTA Section */}
      <View style={styles.ctaWrapper}>
        <Image
          source={{ uri: getImageUrl(homeData.cta.backgroundImage) }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />
        <LinearGradient
          colors={['rgba(58,34,0,0.7)', 'rgba(58,34,0,0.85)']}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.ctaContent}>
          <Text style={styles.ctaHeading}>{homeData.cta.heading}</Text>
          <LinearGradient
            colors={[colors.transparent, colors.gold[400], colors.transparent]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.ctaDivider}
          />
          <Text style={styles.ctaDescription}>{homeData.cta.description}</Text>

          <View style={styles.ctaButtons}>
            <TouchableOpacity
              style={styles.ctaButton}
              onPress={() => Linking.openURL(siteData.socialLinks.facebook)}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-facebook" size={18} color={colors.white} />
              <Text style={styles.ctaButtonText}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.ctaButton, styles.instagramButton]}
              onPress={() => Linking.openURL(siteData.socialLinks.instagram)}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-instagram" size={18} color={colors.white} />
              <Text style={styles.ctaButtonText}>Instagram</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Subscribe */}
      <View style={styles.section}>
        <SubscribeSection
          heading={homeData.subscribe.heading}
          description={homeData.subscribe.description}
          placeholder={homeData.subscribe.placeholder}
          buttonText={homeData.subscribe.buttonText}
        />
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Image
          source={{ uri: getImageUrl('/images/guruji-pics/guru-darshan.jpg') }}
          style={styles.footerLogo}
          contentFit="cover"
        />
        <Text style={styles.footerName}>{siteData.name}</Text>
        <Text style={styles.footerTagline}>{siteData.tagline}</Text>
        <View style={styles.footerDivider} />
        <Text style={styles.footerCopyright}>
          &copy; {new Date().getFullYear()} {siteData.name}. All rights reserved.
        </Text>
        <View style={styles.footerDivider} />
        <TouchableOpacity
          style={styles.sustainsysRow}
          onPress={() => Linking.openURL('https://sustainsys.co.uk')}
          activeOpacity={0.7}
        >
          <Text style={styles.sustainsysLabel}>Created &amp; Maintained by</Text>
          <Image
            source={{ uri: 'https://sustainsys.co.uk/logo_only.png' }}
            style={styles.sustainsysLogo}
            contentFit="contain"
          />
          <Text style={styles.sustainsysName}>SustainSys Consulting Ltd</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  // Hero
  hero: {
    width: SCREEN_WIDTH,
    height: IS_TABLET ? 700 : 480,
    position: 'relative',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroGradient: {
    ...StyleSheet.absoluteFillObject,
    top: '50%',
  },
  heroContent: {
    position: 'absolute',
    bottom: spacing['2xl'],
    left: 0,
    right: 0,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
  heroTitle: {
    ...typography.heroTitle,
    color: colors.brown[800],
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  heroDivider: {
    height: 2,
    width: 120,
    marginVertical: spacing.md,
    borderRadius: 1,
  },
  heroSubtitle: {
    ...typography.bodyMedium,
    color: colors.textSecondary,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  // Section
  section: {
    paddingVertical: spacing['2xl'],
  },
  // Intro Card
  introCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    marginHorizontal: spacing.base,
  },
  introImage: {
    width: '100%',
    height: IS_TABLET ? 350 : 200,
  },
  introContent: {
    padding: spacing.xl,
  },
  introText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  // CTA
  ctaWrapper: {
    width: SCREEN_WIDTH,
    minHeight: 300,
    position: 'relative',
    overflow: 'hidden',
  },
  ctaContent: {
    padding: spacing['2xl'],
    alignItems: 'center',
  },
  ctaHeading: {
    ...typography.h2,
    color: colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  ctaDivider: {
    height: 2,
    width: 100,
    marginVertical: spacing.md,
    borderRadius: 1,
  },
  ctaDescription: {
    ...typography.body,
    color: colors.cream[200],
    textAlign: 'center',
    marginBottom: spacing.xl,
  },
  ctaButtons: {
    flexDirection: 'row',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  instagramButton: {
    backgroundColor: '#E1306C',
  },
  ctaButtonText: {
    ...typography.button,
    color: colors.white,
  },
  // Footer
  footer: {
    alignItems: 'center',
    paddingVertical: spacing['3xl'],
    paddingHorizontal: spacing.xl,
    backgroundColor: colors.cream[100],
    borderTopWidth: 1,
    borderTopColor: colors.divider,
  },
  footerLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: spacing.md,
  },
  footerName: {
    ...typography.h3,
    color: colors.brown[600],
    textTransform: 'uppercase',
  },
  footerTagline: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  footerDivider: {
    height: 1,
    width: 60,
    backgroundColor: colors.divider,
    marginVertical: spacing.base,
  },
  footerCopyright: {
    ...typography.caption,
    color: colors.textMuted,
  },
  sustainsysRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    opacity: 0.7,
  },
  sustainsysLabel: {
    ...typography.caption,
    color: colors.textMuted,
    fontSize: 10,
    letterSpacing: 0.5,
  },
  sustainsysLogo: {
    width: 20,
    height: 20,
    borderRadius: 3,
  },
  sustainsysName: {
    ...typography.caption,
    color: colors.brown[600],
    fontSize: 10,
    fontWeight: '600',
  },
});
