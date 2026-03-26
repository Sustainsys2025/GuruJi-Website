import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import GalleryEventCard from '../components/GalleryEventCard';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import type { GalleryStackParamList } from '../navigation/types';

import galleryData from '../data/gallery.json';

type NavigationProp = NativeStackNavigationProp<GalleryStackParamList, 'GalleryList'>;

export default function GalleryListScreen() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection
        title={galleryData.hero.title}
        subtitle={galleryData.hero.subtitle}
        backgroundImage={galleryData.hero.backgroundImage}
      />

      <View style={styles.body}>
        <SectionHeading
          title="Satsang Events"
          subtitle={galleryData.description}
        />

        {/* Books button */}
        <TouchableOpacity
          style={[styles.booksButton, shadows.sm]}
          onPress={() => navigation.navigate('Books')}
          activeOpacity={0.8}
        >
          <Ionicons name="book-outline" size={18} color={colors.primary[500]} />
          <Text style={styles.booksButtonText}>Books & Guides</Text>
          <Ionicons name="chevron-forward" size={16} color={colors.textMuted} />
        </TouchableOpacity>

        {/* Events Grid */}
        <View style={styles.grid}>
          {galleryData.events.map((event) => (
            <GalleryEventCard
              key={event.slug}
              title={event.title}
              date={event.date}
              coverPhoto={event.coverPhoto}
              photoCount={event.photos.length}
              onPress={() => navigation.navigate('GalleryDetail', { slug: event.slug })}
            />
          ))}
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
  booksButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginHorizontal: spacing.base,
    marginBottom: spacing.xl,
    borderRadius: borderRadius.lg,
    gap: spacing.md,
  },
  booksButtonText: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    flex: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.base,
    gap: spacing.base,
  },
});
