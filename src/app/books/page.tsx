import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import BookCard from "@/components/BookCard";
import booksData from "@/data/books.json";

export const metadata: Metadata = {
  title: "Books & Guides",
  description:
    "Explore our collection of spiritual books and guides for your spiritual journey.",
};

export default function BooksPage() {
  return (
    <>
      <HeroSection
        title={booksData.hero.title}
        subtitle={booksData.hero.subtitle}
        backgroundImage="/images/guruji-pics/light-of-divinity.jpg"
      />

      <section className="py-12 md:py-16 lotus-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-maroon-700/70 mb-10 max-w-2xl mx-auto">
            {booksData.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {booksData.books.map((book) => (
              <BookCard
                key={book.title}
                title={book.title}
                description={book.description}
                type={book.type}
                colorPlaceholder={book.colorPlaceholder}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
