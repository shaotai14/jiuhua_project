import HeroSection from "@/components/home/HeroSection";
import Features from "@/components/home/Features";
import CallToAction from "@/components/home/CallToAction";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <Features />
      <CallToAction />
      <Footer />
    </main>
  );
}