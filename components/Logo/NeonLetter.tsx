"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface NeonLetterProps {
  letter: string;
  delay: number;
  className?: string;
}

// SVG paths for each letter in a stylish font style
const letterPaths: Record<string, string> = {
  R: "M10 5 L10 35 M10 5 L25 5 Q35 5 35 15 Q35 20 25 20 L10 20 M20 20 L35 35",
  A: "M5 35 L20 5 L35 35 M10 25 L30 25",
  F: "M10 5 L35 5 M10 5 L10 35 M10 20 L28 20",
  Y: "M5 5 L20 20 L35 5 M20 20 L20 35",
};

export function NeonLetter({ letter, delay, className }: NeonLetterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(showTimer);
    };
  }, [delay]);

  const path = letterPaths[letter.toUpperCase()];

  if (!path) return null;

  return (
    <svg
      viewBox="0 0 40 40"
      className={cn(
        "h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12",
        "transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className
      )}
    >
      <defs>
        <linearGradient id={`letterGradient-${letter}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--accent)" />
        </linearGradient>
      </defs>
      <path
        d={path}
        fill="none"
        stroke={`url(#letterGradient-${letter})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "transition-all duration-1000",
          isVisible ? "stroke-dashoffset-0" : ""
        )}
        style={{
          strokeDasharray: 150,
          strokeDashoffset: isVisible ? 0 : 150,
          transition: "stroke-dashoffset 1.2s ease-out",
        }}
      />
    </svg>
  );
}
