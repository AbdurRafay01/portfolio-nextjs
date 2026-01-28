"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface BrushScriptLogoProps {
  className?: string;
}

/**
 * Brush Script Logo Component - "Rafay"
 *
 * A high-resolution, optimized SVG logo in casual brush script style
 * with hand-inked texture and expressive flourishes.
 *
 * Features:
 * - Crisp 2x/3x retina scaling
 * - Responsive sizing (mobile through desktop)
 * - Smooth draw-in animation on page load
 * - Proper ARIA labels for accessibility
 * - Brand gradient stroke
 * - Bold stroke weights for brush effect
 */
export function BrushScriptLogo({ className }: BrushScriptLogoProps) {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimated(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <a
      href="#"
      className={cn(
        "inline-flex items-center",
        "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
        "focus-visible:ring-offset-background focus-visible:ring-offset-2",
        "rounded-sm",
        className,
      )}
      aria-label="Rafay - Navigate to homepage"
    >
      <svg
        viewBox="0 0 140 55"
        className={cn(
          // Responsive height with auto width to maintain aspect ratio
          "h-8 w-auto", // Mobile: 32px
          "sm:h-9", // Small: 36px
          "md:h-10", // Medium: 40px
          "lg:h-11", // Large: 44px
          // Smooth animation
          "transition-all duration-700 ease-out",
          isAnimated ? "opacity-100" : "opacity-0",
        )}
        role="img"
        aria-labelledby="logoTitle logoDesc"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="logoTitle">Rafay</title>
        <desc id="logoDesc">
          Rafay personal brand logo in brush script style
        </desc>

        <defs>
          {/* Brand gradient */}
          <linearGradient id="logoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="70%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--accent)" />
          </linearGradient>

          {/* Subtle texture filter for hand-drawn effect */}
          <filter id="inkTexture" x="-2%" y="-2%" width="104%" height="104%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.04"
              numOctaves="2"
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="0.4"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>

        {/* Letter R - Bold with decorative flourish */}
        <path
          d="M 8 42
             L 8 10
             C 8 10, 8 6, 18 6
             C 28 6, 30 14, 30 18
             C 30 24, 22 28, 14 28
             L 8 28
             M 18 28
             C 18 28, 32 40, 34 44"
          stroke="url(#logoGradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#inkTexture)"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 220,
            strokeDashoffset: isAnimated ? 0 : 220,
            transition:
              "stroke-dashoffset 1.5s cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
          }}
        />

        {/* Letter a - Bold lowercase with loop */}
        <path
          d="M 46 44
             C 46 44, 36 46, 36 36
             C 36 26, 46 22, 54 24
             C 58 25, 58 32, 58 38
             L 58 44
             C 58 44, 60 46, 62 44"
          stroke="url(#logoGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#inkTexture)"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 160,
            strokeDashoffset: isAnimated ? 0 : 160,
            transition:
              "stroke-dashoffset 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.3s",
          }}
        />

        {/* Letter f - Bold with crossbar */}
        <path
          d="M 70 44
             L 70 18
             C 70 18, 70 10, 80 10
             C 84 10, 86 12, 86 14
             M 62 28 L 78 28"
          stroke="url(#logoGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#inkTexture)"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 130,
            strokeDashoffset: isAnimated ? 0 : 130,
            transition:
              "stroke-dashoffset 1s cubic-bezier(0.25, 0.1, 0.25, 1) 0.5s",
          }}
        />

        {/* Letter a - Bold second lowercase a */}
        <path
          d="M 98 44
             C 98 44, 88 46, 88 36
             C 88 26, 98 22, 106 24
             C 110 25, 110 32, 110 38
             L 110 44
             C 110 44, 112 46, 114 44"
          stroke="url(#logoGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#inkTexture)"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 160,
            strokeDashoffset: isAnimated ? 0 : 160,
            transition:
              "stroke-dashoffset 1.2s cubic-bezier(0.25, 0.1, 0.25, 1) 0.7s",
          }}
        />

        {/* Letter y - Bold with descender flourish */}
        <path
          d="M 118 22
             C 118 22, 124 36, 130 36
             M 138 22
             L 128 36
             C 128 36, 122 46, 116 52
             C 110 58, 104 54, 108 48"
          stroke="url(#logoGradient)"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#inkTexture)"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 160,
            strokeDashoffset: isAnimated ? 0 : 160,
            transition:
              "stroke-dashoffset 1.4s cubic-bezier(0.25, 0.1, 0.25, 1) 0.9s",
          }}
        />

        {/* Decorative underline flourish */}
        <path
          d="M 4 50
             C 20 52, 80 52, 136 48
             C 140 48, 142 46, 140 44"
          stroke="url(#logoGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.7"
          className="transition-all duration-1000"
          style={{
            strokeDasharray: 190,
            strokeDashoffset: isAnimated ? 0 : 190,
            transition:
              "stroke-dashoffset 1s cubic-bezier(0.25, 0.1, 0.25, 1) 1.5s",
          }}
        />
      </svg>
    </a>
  );
}
