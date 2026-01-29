"use client";

import { cn } from "@/lib/utils";
import { InputHTMLAttributes, forwardRef } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "border-foreground bg-background w-full border-2 px-4 py-3",
          "placeholder:text-muted-foreground font-mono text-sm",
          "focus:ring-neon focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "transition-all duration-200",
          "neo-shadow",
          error && "border-hot-pink ring-hot-pink ring-2",
          className,
        )}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";

export { Input };
