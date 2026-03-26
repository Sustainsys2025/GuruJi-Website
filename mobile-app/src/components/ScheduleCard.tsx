import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';
import { formatScheduleDate, isUpcomingDate } from '../utils/helpers';

interface ScheduleCardProps {
  date: string;
  day: string;
  time: string;
  occasion?: string;
}

export default function ScheduleCard({ date, day, time, occasion }: ScheduleCardProps) {
  const upcoming = isUpcomingDate(date);

  return (
    <View style={[styles.card, shadows.sm, upcoming && styles.cardUpcoming]}>
      <View style={[styles.dateBlock, upcoming && styles.dateBlockUpcoming]}>
        <Ionicons
          name="calendar"
          size={16}
          color={upcoming ? colors.white : colors.primary[500]}
        />
      </View>
      <View style={styles.content}>
        <Text style={[styles.date, upcoming && styles.dateUpcoming]}>
          {formatScheduleDate(date)}
        </Text>
        <Text style={styles.details}>
          {day} | {time}
          {occasion ? ` | ${occasion}` : ''}
        </Text>
      </View>
      {upcoming && (
        <View style={styles.upcomingBadge}>
          <Text style={styles.upcomingText}>Upcoming</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: borderRadius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  cardUpcoming: {
    borderLeftWidth: 3,
    borderLeftColor: colors.primary[500],
  },
  dateBlock: {
    width: 40,
    height: 40,
    borderRadius: borderRadius.md,
    backgroundColor: colors.primary[50],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  dateBlockUpcoming: {
    backgroundColor: colors.primary[500],
  },
  content: {
    flex: 1,
  },
  date: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    fontSize: 14,
  },
  dateUpcoming: {
    color: colors.primary[500],
  },
  details: {
    ...typography.bodySmall,
    color: colors.textMuted,
    marginTop: 2,
  },
  upcomingBadge: {
    backgroundColor: colors.primary[50],
    paddingHorizontal: spacing.sm,
    paddingVertical: 3,
    borderRadius: borderRadius.full,
  },
  upcomingText: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 10,
    color: colors.primary[500],
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
});
