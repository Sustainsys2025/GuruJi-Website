import React, { useState, useLayoutEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Image } from 'expo-image';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import ImageLightbox from '../components/ImageLightbox';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { getImageUrl } from '../utils/helpers';
import type { GalleryStackParamList } from '../navigation/types';

import galleryData from '../data/gallery.json';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const PHOTO_GAP = 6;
const PHOTOS_PER_ROW = 3;
const PHOTO_SIZE = (SCREEN_WIDTH - spacing.base * 2 - PHOTO_GAP * (PHOTOS_PER_ROW - 1)) / PHOTOS_PER_ROW;

type DetailRoute = RouteProp<GalleryStackParamList, 'GalleryDetail'>;

export default function GalleryDetailScreen() {
  const route = useRoute<DetailRoute>();
  const navigation = useNavigation();
  const { slug } = route.params;

  const event = galleryData.events.find((e) => e.slug === slug);
  const [lightboxVisible, setLightboxVisible] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useLayoutEffect(() => {
    if (event) {
      navigation.setOptions({ title: event.title });
    }
  }, [event, navigation]);

  if (!event) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>Event not found</Text>
      </View>
    );
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxVisible(true);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Event Header */}
      <View style={styles.header}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.date}>{event.date}</Text>
        <Text style={styles.description}>{event.description}</Text>
        <Text style={styles.photoCount}>{event.photos.length} Photos</Text>
      </View>

      {/* Photo Grid */}
      <View style={styles.grid}>
        {event.photos.map((photo, index) => (
          <TouchableOpacity
            key={`${photo}-${index}`}
            onPress={() => openLightbox(index)}
            activeOpacity={0.85}
          >
            <Image
              source={{ uri: getImageUrl(photo) }}
              style={styles.photo}
              contentFit="cover"
              transition={200}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: spacing['2xl'] }} />

      <ImageLightbox
        visible={lightboxVisible}
        images={event.photos}
        initialIndex={lightboxIndex}
        onClose={() => setLightboxVisible(false)}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    ...typography.body,
    color: colors.textMuted,
  },
  header: {
    padding: spacing.xl,
    alignItems: 'center',
  },
  title: {
    ...typography.h2,
    color: colors.brown[600],
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  date: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
  },
  photoCount: {
    ...typography.caption,
    color: colors.primary[500],
    fontFamily: 'Inter_600SemiBold',
    marginTop: spacing.sm,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: spacing.base,
    gap: PHOTO_GAP,
  },
  photo: {
    width: PHOTO_SIZE,
    height: PHOTO_SIZE,
    borderRadius: borderRadius.sm,
  },
});
