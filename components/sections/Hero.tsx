"use client";

import { ButtonLink } from "@/components/ui/Button";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-4xl text-center">
        {/* Animated intro text */}
        <div className="animate-fade-in space-y-6">
          <p className="text-primary font-mono text-sm tracking-widest uppercase md:text-base">
            Hello, I&apos;m
          </p>

          <h1 className="text-4xl font-black tracking-tight uppercase md:text-6xl lg:text-7xl">
            <span className="text-gradient">Abdur Rafay</span>
          </h1>

          <h2 className="text-foreground text-2xl font-bold uppercase md:text-3xl lg:text-4xl">
            Software Engineer - Backend
          </h2>

          <p className="text-muted-foreground mx-auto max-w-2xl text-base leading-relaxed md:text-lg">
            Building robust, performant applications with{" "}
            <span className="text-primary font-semibold">Python</span>,{" "}
            <span className="text-accent font-semibold">Java</span>, and modern
            web technologies. Specializing in{" "}
            <span className="text-primary font-semibold">AI applications</span>{" "}
            and backend development.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row">
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
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 animate-bounce md:block">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary flex flex-col items-center gap-2 transition-colors"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
