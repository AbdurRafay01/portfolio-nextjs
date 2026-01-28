"use client";

import { ButtonLink } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 relative">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Animated intro text */}
        <div className="space-y-6 animate-fade-in">
          <p className="text-primary font-mono text-sm md:text-base uppercase tracking-widest">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
            <span className="text-gradient">Abdur Rafay</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-foreground">
            Software Engineer - Backend
          </h2>

          <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
            Building robust, performant applications with{" "}
            <span className="text-primary font-semibold">Python</span>,{" "}
            <span className="text-accent font-semibold">Java</span>, and modern
            web technologies. Specializing in{" "}
            <span className="text-primary font-semibold">
              AI applications
            </span>{" "}
            and backend development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <ButtonLink href="#contact" size="lg">
              Get In Touch
            </ButtonLink>
            <ButtonLink href="#projects" variant="outline" size="lg">
              View Projects
              <ArrowDown className="ml-2 h-5 w-5" />
            </ButtonLink>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
