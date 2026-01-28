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
          "w-full border-2 border-foreground bg-background px-4 py-3",
          "font-mono text-sm placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-background",
          "transition-all duration-200",
          "neo-shadow",
          error && "border-hot-pink ring-2 ring-hot-pink",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
