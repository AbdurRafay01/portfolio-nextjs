"use client";

import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes, forwardRef } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "border-foreground bg-background w-full border-2 px-4 py-3",
          "placeholder:text-muted-foreground font-mono text-sm",
          "focus:ring-neon focus:ring-offset-background focus:ring-2 focus:ring-offset-2 focus:outline-none",
          "resize-none transition-all duration-200",
          "neo-shadow",
          error && "border-hot-pink ring-hot-pink ring-2",
          className,
        )}
        {...props}
      />
    );
  },
);

Textarea.displayName = "Textarea";

export { Textarea };
