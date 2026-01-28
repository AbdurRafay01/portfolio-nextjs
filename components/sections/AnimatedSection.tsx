"use client";

import { ReactNode } from "react";
import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
}

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const [ref, isInView] = useInView<HTMLDivElement>({
    threshold: 0.1,
    triggerOnce: true,
  });

  const animationClasses = {
    "fade-up": isInView
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10",
    "fade-in": isInView ? "opacity-100" : "opacity-0",
    "slide-left": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-0 -translate-x-10",
    "slide-right": isInView
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        animationClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
