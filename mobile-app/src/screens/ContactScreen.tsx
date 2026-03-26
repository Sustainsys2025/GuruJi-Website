import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/SectionHeading';
import QuickActionButton from '../components/QuickActionButton';
import ContactForm from '../components/ContactForm';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { openWhatsApp, openEmail, openMaps } from '../utils/helpers';

import contactData from '../data/contact.json';
import siteData from '../data/site.json';

export default function ContactScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeroSection
        title={contactData.hero.title}
        subtitle={contactData.hero.subtitle}
        backgroundImage={contactData.hero.backgroundImage}
      />

      {/* Darshan Section */}
      <View style={styles.section}>
        <SectionHeading title={contactData.darshan.heading} />
        <Text style={styles.darshanText}>{contactData.darshan.description}</Text>
      </View>

      {/* Quick Action Buttons */}
      <View style={styles.actionsRow}>
        <QuickActionButton
          icon="logo-whatsapp"
          label="WhatsApp"
          subtitle="Anita Ji"
          url={openWhatsApp('7587003949')}
          color="#25D366"
        />
        <QuickActionButton
          icon="mail-outline"
          label="Email"
          url={openEmail(contactData.info.email)}
          color={colors.primary[500]}
        />
        <QuickActionButton
          icon="navigate-outline"
          label="Directions"
          url={openMaps(contactData.info.address)}
          color={colors.sage[400]}
        />
      </View>

      {/* Social Links */}
      <View style={styles.socialRow}>
        <QuickActionButton
          icon="logo-facebook"
          label="Facebook"
          url={siteData.socialLinks.facebook}
          color="#1877F2"
        />
        <QuickActionButton
          icon="logo-instagram"
          label="Instagram"
          url={siteData.socialLinks.instagram}
          color="#E1306C"
        />
      </View>

      {/* Contact Info Card */}
      <View style={[styles.infoCard, shadows.md]}>
        <InfoRow icon="business-outline" label="Business" value={contactData.info.businessName} />
        <InfoRow icon="location-outline" label="Venue" value={contactData.info.venue} />
        <InfoRow icon="map-outline" label="Address" value={contactData.info.address} />
        <InfoRow icon="mail-outline" label="Email" value={contactData.info.email} />
        <InfoRow icon="logo-whatsapp" label="WhatsApp" value={contactData.info.whatsapp} />
        <InfoRow icon="time-outline" label="Timings" value={contactData.info.timings} />
      </View>

      {/* Contact Form */}
      <View style={styles.section}>
        <ContactForm />
      </View>

      <View style={{ height: spacing['3xl'] }} />
    </ScrollView>
  );
}

type IoniconsName = React.ComponentProps<typeof Ionicons>['name'];

function InfoRow({ icon, label, value }: { icon: IoniconsName; label: string; value: string }) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoIcon}>
        <Ionicons name={icon} size={18} color={colors.primary[500]} />
      </View>
      <View style={styles.infoContent}>
        <Text style={styles.infoLabel}>{label}</Text>
        <Text style={styles.infoValue}>{value}</Text>
      </View>
    </View>
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
  darshanText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },
  actionsRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.base,
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  socialRow: {
    flexDirection: 'row',
    paddingHorizontal: spacing.base,
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  infoCard: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginHorizontal: spacing.base,
    marginTop: spacing.xl,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    gap: spacing.md,
  },
  infoIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    ...typography.caption,
    color: colors.textMuted,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  infoValue: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    fontSize: 14,
    marginTop: 2,
  },
});
