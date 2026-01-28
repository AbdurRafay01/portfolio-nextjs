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
          "w-full border-2 border-foreground bg-background px-4 py-3",
          "font-mono text-sm placeholder:text-muted-foreground",
          "focus:outline-none focus:ring-2 focus:ring-neon focus:ring-offset-2 focus:ring-offset-background",
          "transition-all duration-200 resize-none",
          "neo-shadow",
          error && "border-hot-pink ring-2 ring-hot-pink",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
