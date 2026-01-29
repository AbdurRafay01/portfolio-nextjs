"use client";

import { NeonLetter } from "./NeonLetter";

export function AnimatedLogo() {
  const letters = ["R", "A", "F", "A", "Y"];
  const baseDelay = 200; // Start delay in ms
  const letterDelay = 400; // Delay between each letter

  return (
    <a href="#" className="flex items-center gap-0.5 md:gap-1">
      {letters.map((letter, index) => (
        <NeonLetter
          key={`${letter}-${index}`}
          letter={letter}
          delay={baseDelay + index * letterDelay}
        />
      ))}
    </a>
  );
}
