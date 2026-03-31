import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import ScheduleCard from '../components/ScheduleCard';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { getImageUrl, openMaps } from '../utils/helpers';

import scheduleData from '../data/schedule.json';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function ScheduleScreen() {
  const [showGuidelines, setShowGuidelines] = useState(false);
  const [showArchive, setShowArchive] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection
        title={scheduleData.hero.title}
        subtitle={scheduleData.hero.subtitle}
        backgroundImage={scheduleData.hero.backgroundImage}
      />

      {/* Latest Satsang Poster */}
      <View style={styles.section}>
        <SectionHeading title="Latest Satsang" />
        <Image
          source={{ uri: getImageUrl('/images/guruji-pics/satsang-apr-26.jpg') }}
          style={styles.poster}
          contentFit="cover"
          transition={300}
        />
      </View>

      {/* Venue Section */}
      <View style={styles.section}>
        <SectionHeading title={scheduleData.venue.heading} />

        <View style={[styles.venueCard, shadows.md]}>
          <View style={styles.venueRow}>
            <Ionicons name="location" size={20} color={colors.primary[500]} />
            <View style={styles.venueInfo}>
              <Text style={styles.venueName}>{scheduleData.venue.name}</Text>
              <Text style={styles.venueAddress}>{scheduleData.venue.address}</Text>
            </View>
          </View>
          <Text style={styles.venueDescription}>{scheduleData.venue.description}</Text>
          <Text style={styles.venueNote}>{scheduleData.venue.sewaNote}</Text>
          <Text style={styles.venueClosing}>{scheduleData.venue.closingNote}</Text>

          <TouchableOpacity
            style={styles.directionsBtn}
            onPress={() => Linking.openURL(openMaps(scheduleData.venue.address))}
            activeOpacity={0.8}
          >
            <Ionicons name="navigate" size={16} color={colors.white} />
            <Text style={styles.directionsBtnText}>Get Directions</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 2026 Schedule */}
      <View style={styles.section}>
        <SectionHeading
          title={scheduleData.schedule2026.heading}
          subtitle={scheduleData.schedule2026.description}
        />
        <View style={styles.scheduleList}>
          {scheduleData.schedule2026.dates.map((item) => (
            <ScheduleCard
              key={item.date}
              date={item.date}
              day={item.day}
              time={item.time}
            />
          ))}
        </View>
        <Text style={styles.closingNote}>{scheduleData.schedule2026.closingNote}</Text>
      </View>

      {/* Guidelines - Accordion */}
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => setShowGuidelines(!showGuidelines)}
          style={[styles.accordionHeader, shadows.sm]}
          activeOpacity={0.8}
        >
          <View style={styles.accordionHeaderContent}>
            <Ionicons name="book-outline" size={20} color={colors.primary[500]} />
            <Text style={styles.accordionTitle}>{scheduleData.guidelines.heading}</Text>
          </View>
          <Ionicons
            name={showGuidelines ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={colors.textMuted}
          />
        </TouchableOpacity>
        {showGuidelines && (
          <View style={[styles.accordionBody, shadows.sm]}>
            <Text style={styles.guidelinesIntro}>{scheduleData.guidelines.intro}</Text>
            <Text style={styles.guidelinesDesc}>{scheduleData.guidelines.description}</Text>
            {scheduleData.guidelines.items.map((item, index) => (
              <View key={index} style={styles.guidelineItem}>
                <View style={styles.guidelineBullet}>
                  <Text style={styles.guidelineNumber}>{index + 1}</Text>
                </View>
                <Text style={styles.guidelineText}>{item}</Text>
              </View>
            ))}
            <Text style={styles.guidelinesClosing}>
              {scheduleData.guidelines.closingNote}
            </Text>
          </View>
        )}
      </View>

      {/* 2025 Archive - Accordion */}
      <View style={styles.section}>
        <TouchableOpacity
          onPress={() => setShowArchive(!showArchive)}
          style={[styles.accordionHeader, shadows.sm]}
          activeOpacity={0.8}
        >
          <View style={styles.accordionHeaderContent}>
            <Ionicons name="archive-outline" size={20} color={colors.primary[500]} />
            <Text style={styles.accordionTitle}>{scheduleData.schedule2025.heading}</Text>
          </View>
          <Ionicons
            name={showArchive ? 'chevron-up' : 'chevron-down'}
            size={20}
            color={colors.textMuted}
          />
        </TouchableOpacity>
        {showArchive && (
          <View style={[styles.accordionBody, shadows.sm]}>
            <Text style={styles.archiveNote}>{scheduleData.schedule2025.description}</Text>
            <Text style={styles.archiveNote}>{scheduleData.schedule2025.note}</Text>
            {scheduleData.schedule2025.dates.map((item) => (
              <ScheduleCard
                key={item.date}
                date={item.date}
                day={item.day}
                time={item.time}
                occasion={item.occasion}
              />
            ))}
          </View>
        )}
      </View>

      <View style={{ height: spacing['3xl'] }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    paddingVertical: spacing.lg,
  },
  // Venue
  venueCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginHorizontal: spacing.base,
  },
  venueRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.base,
    gap: spacing.md,
  },
  venueInfo: {
    flex: 1,
  },
  venueName: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    fontSize: 16,
  },
  venueAddress: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginTop: 2,
  },
  venueDescription: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  venueNote: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: spacing.md,
  },
  venueClosing: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  directionsBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
  },
  directionsBtnText: {
    ...typography.button,
    color: colors.white,
  },
  poster: {
    width: SCREEN_WIDTH - spacing.base * 2,
    height: (SCREEN_WIDTH - spacing.base * 2) * 1.2,
    borderRadius: borderRadius.lg,
    marginHorizontal: spacing.base,
    marginTop: spacing.lg,
  },
  // Schedule list
  scheduleList: {
    paddingHorizontal: spacing.base,
  },
  closingNote: {
    ...typography.bodySmall,
    color: colors.textMuted,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
    marginTop: spacing.base,
  },
  // Accordion
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.surface,
    paddingVertical: spacing.base,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing.base,
    borderRadius: borderRadius.lg,
  },
  accordionHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    flex: 1,
  },
  accordionTitle: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    fontSize: 14,
  },
  accordionBody: {
    backgroundColor: colors.surface,
    marginHorizontal: spacing.base,
    marginTop: 1,
    borderBottomLeftRadius: borderRadius.lg,
    borderBottomRightRadius: borderRadius.lg,
    padding: spacing.lg,
  },
  // Guidelines
  guidelinesIntro: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
  guidelinesDesc: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    fontStyle: 'italic',
    marginBottom: spacing.lg,
  },
  guidelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: spacing.md,
    gap: spacing.md,
  },
  guidelineBullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  guidelineNumber: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 11,
    color: colors.primary[500],
  },
  guidelineText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    flex: 1,
    paddingTop: 3,
  },
  guidelinesClosing: {
    ...typography.bodySmall,
    color: colors.textMuted,
    fontStyle: 'italic',
    marginTop: spacing.md,
  },
  // Archive
  archiveNote: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    marginBottom: spacing.md,
  },
});
