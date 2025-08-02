import Header from "@/components/layout/header";
import HeroSection from "@/components/section/landing/hero-section";
import AnimatedBackground from "@/components/ui/animated-background";
import ComingSoon from "@/components/section/landing/coming-soon";

export default function Home() {
  return (
      <section className="flex h-screen flex-col gap-4 bg-primary/20">
          <AnimatedBackground>
              <Header/>
              <HeroSection/>
              <ComingSoon/>
          </AnimatedBackground>
      </section>
  );
}
