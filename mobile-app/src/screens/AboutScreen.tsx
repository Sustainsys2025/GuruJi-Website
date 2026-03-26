import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import HeroSection from '../components/HeroSection';
import ContentCard from '../components/ContentCard';
import SectionHeading from '../components/SectionHeading';
import { colors, typography, spacing, borderRadius } from '../theme';
import { getImageUrl } from '../utils/helpers';

import aboutData from '../data/about.json';

export default function AboutScreen() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection
        title={aboutData.hero.title}
        subtitle={aboutData.hero.subtitle}
        backgroundImage={aboutData.hero.backgroundImage}
      />

      <View style={styles.body}>
        {aboutData.sections.map((section, index) => (
          <ContentCard
            key={section.heading}
            heading={section.heading}
            description={section.description}
            imageSrc={section.imageSrc}
            imageOnRight={index % 2 === 1}
          />
        ))}
      </View>

      {/* CTA */}
      <View style={styles.ctaWrapper}>
        <Image
          source={{ uri: getImageUrl('/images/guruji-pics/charan.jpg') }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
        />
        <LinearGradient
          colors={['rgba(58,34,0,0.6)', 'rgba(58,34,0,0.85)']}
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.ctaContent}>
          <SectionHeading
            title="Join Our Satsang"
            subtitle="Experience the warmth of our community"
            light
          />
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => navigation.navigate('ScheduleTab')}
            activeOpacity={0.8}
          >
            <Text style={styles.ctaButtonText}>View Schedule</Text>
            <Ionicons name="arrow-forward" size={16} color={colors.white} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: spacing['2xl'] }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  body: {
    paddingTop: spacing['2xl'],
  },
  ctaWrapper: {
    minHeight: 240,
    position: 'relative',
    overflow: 'hidden',
    marginTop: spacing.lg,
  },
  ctaContent: {
    padding: spacing['2xl'],
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 240,
  },
  ctaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary[500],
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.xl,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
  ctaButtonText: {
    ...typography.button,
    color: colors.white,
  },
});
