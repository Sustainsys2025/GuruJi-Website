import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, borderRadius, shadows } from '../theme';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Required Fields', 'Please fill in all fields.');
      return;
    }
    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  if (submitted) {
    return (
      <View style={[styles.card, shadows.md, styles.successCard]}>
        <Ionicons name="checkmark-circle" size={48} color={colors.sage[400]} />
        <Text style={styles.successTitle}>Message Sent!</Text>
        <Text style={styles.successText}>
          Thank you for reaching out. We will get back to you soon.
        </Text>
        <TouchableOpacity
          onPress={() => setSubmitted(false)}
          style={styles.resetBtn}
          activeOpacity={0.7}
        >
          <Text style={styles.resetBtnText}>Send Another Message</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={[styles.card, shadows.md]}>
        <Text style={styles.formTitle}>DROP US A LINE!</Text>
        <View style={styles.divider} />

        <View style={styles.field}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Your name"
            placeholderTextColor={colors.textMuted}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="your@email.com"
            placeholderTextColor={colors.textMuted}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Message</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            value={message}
            onChangeText={setMessage}
            placeholder="Your message"
            placeholderTextColor={colors.textMuted}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.submitBtn}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>Send</Text>
          <Ionicons name="send" size={16} color={colors.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: borderRadius.lg,
    padding: spacing.xl,
    marginHorizontal: spacing.base,
  },
  formTitle: {
    ...typography.h3,
    color: colors.brown[600],
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  divider: {
    height: 2,
    width: 60,
    backgroundColor: colors.gold[500],
    borderRadius: 1,
    alignSelf: 'center',
    marginVertical: spacing.md,
  },
  field: {
    marginBottom: spacing.base,
  },
  label: {
    ...typography.bodySemiBold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
    fontSize: 13,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: colors.textPrimary,
    backgroundColor: colors.cream[50],
  },
  textarea: {
    height: 100,
    paddingTop: spacing.md,
  },
  submitBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary[500],
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    gap: spacing.sm,
    marginTop: spacing.sm,
  },
  submitText: {
    ...typography.button,
    color: colors.white,
  },
  successCard: {
    alignItems: 'center',
    paddingVertical: spacing['3xl'],
  },
  successTitle: {
    ...typography.h3,
    color: colors.sage[500],
    marginTop: spacing.base,
  },
  successText: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.sm,
    marginHorizontal: spacing.xl,
  },
  resetBtn: {
    marginTop: spacing.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.primary[500],
  },
  resetBtnText: {
    ...typography.button,
    color: colors.primary[500],
    fontSize: 13,
  },
});
