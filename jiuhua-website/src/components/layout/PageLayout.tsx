"use client";

import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function PageLayout({
  children,
  title,
  description,
}: PageLayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {title && (
        <section className="pt-24 pb-12 bg-primary-50">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-serif-cn text-4xl md:text-5xl font-bold text-primary-800 mb-4">
              {title}
            </h1>
            {description && (
              <p className="font-sans-cn text-lg text-gray-600 max-w-2xl mx-auto">
                {description}
              </p>
            )}
          </div>
        </section>
      )}
      {children}
      <Footer />
    </main>
  );
}