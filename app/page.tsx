"use client";

import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { AnimatedSection } from "@/components/sections/AnimatedSection";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Fixed Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section - No animation wrapper needed as it's above fold */}
        <Hero />

        {/* About Section */}
        <AnimatedSection animation="fade-up">
          <About />
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Projects />
        </AnimatedSection>

        {/* Skills Section */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Skills />
        </AnimatedSection>

        {/* Contact Section */}
        <AnimatedSection animation="fade-up" delay={100}>
          <Contact />
        </AnimatedSection>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
