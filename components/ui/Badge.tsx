"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wider",
          "border-2 border-border transition-colors duration-200",
          {
            "bg-primary text-primary-foreground border-primary": variant === "default",
            "bg-accent text-accent-foreground border-accent": variant === "secondary",
            "bg-transparent text-foreground": variant === "outline",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
