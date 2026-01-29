"use client";

import { AnimatedLogo } from "@/components/Logo/AnimatedLogo";
import { Navigation } from "./Navigation";
import { ThemeToggle } from "./ThemeToggle";

/**
 * Header Component
 *
 * Fixed navigation header with:
 * - Brush script logo (left)
 * - Navigation links (center/right on desktop)
 * - Theme toggle (right)
 *
 * Features proper vertical alignment for the logo SVG
 * and responsive layout for all screen sizes.
 */
export function Header() {
  return (
    <header
      className="bg-background/10 border-border fixed top-0 right-0 left-0 z-150 border-b-2 backdrop-blur-sm"
      role="banner"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo - vertically centered */}
          <div className="flex h-full items-center py-3">
            <AnimatedLogo />
          </div>

          {/* Navigation & Theme Toggle */}
          <div className="flex items-center gap-4 md:gap-8">
            <Navigation />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
