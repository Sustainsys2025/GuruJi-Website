import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius } from '../theme';

interface SubscribeSectionProps {
  heading: string;
  description: string;
  placeholder: string;
  buttonText: string;
}

export default function SubscribeSection({
  heading,
  description,
  placeholder,
  buttonText,
}: SubscribeSectionProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    setSubscribed(true);
    setEmail('');
  };

  return (
    <LinearGradient
      colors={[colors.cream[100], colors.cream[300]]}
      style={styles.container}
    >
      <Text style={styles.heading}>{heading}</Text>
      <Text style={styles.description}>{description}</Text>

      {subscribed ? (
        <View style={styles.successRow}>
          <Ionicons name="checkmark-circle" size={20} color={colors.sage[400]} />
          <Text style={styles.successText}>Thank you for subscribing!</Text>
        </View>
      ) : (
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder={placeholder}
            placeholderTextColor={colors.textMuted}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity
            onPress={handleSubscribe}
            style={styles.button}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    marginHorizontal: spacing.base,
    borderRadius: borderRadius.lg,
    alignItems: 'center',
  },
  heading: {
    ...typography.h3,
    color: colors.brown[600],
    textTransform: 'uppercase',
    marginBottom: spacing.sm,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  inputRow: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: colors.textPrimary,
    backgroundColor: colors.white,
  },
  button: {
    backgroundColor: colors.primary[500],
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    justifyContent: 'center',
  },
  buttonText: {
    ...typography.button,
    color: colors.white,
    fontSize: 13,
  },
  successRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  successText: {
    ...typography.bodySemiBold,
    color: colors.sage[500],
  },
});
