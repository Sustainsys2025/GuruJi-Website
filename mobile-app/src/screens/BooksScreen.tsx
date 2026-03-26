import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import SectionHeading from '../components/SectionHeading';
import BookCard from '../components/BookCard';
import { colors, typography, spacing } from '../theme';

import booksData from '../data/books.json';

export default function BooksScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.description}>{booksData.description}</Text>
      </View>

      <View style={styles.list}>
        {booksData.books.map((book) => (
          <BookCard
            key={book.title}
            title={book.title}
            description={book.description}
            colorPlaceholder={book.colorPlaceholder}
            type={book.type}
          />
        ))}
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
  header: {
    padding: spacing.xl,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: spacing.base,
  },
});
