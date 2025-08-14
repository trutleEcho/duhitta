'use client'

import Header from "@/components/layout/header";
import HeroSection from "@/components/section/landing/hero-section";
import AnimatedBackground from "@/components/ui/animated-background";
import ComingSoon from "@/components/section/landing/coming-soon";
import CollectionSection from "@/components/section/landing/collection-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
      <section className="flex h-screen flex-col gap-4 bg-primary/20">
          <AnimatedBackground>
              <Header/>
              <HeroSection/>
              <CollectionSection/>
              <ComingSoon/>
              <Footer/>
          </AnimatedBackground>
      </section>
  );
}
