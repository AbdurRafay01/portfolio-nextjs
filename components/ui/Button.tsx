"use client";

import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";

type ButtonBaseProps = {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
};

export type ButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonLinkProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement>;

const buttonStyles = (
  variant: ButtonBaseProps["variant"] = "default",
  size: ButtonBaseProps["size"] = "md",
  className?: string
) =>
  cn(
    // Base styles - Neo-Brutalism
    "inline-flex items-center justify-center font-bold uppercase tracking-wider",
    "border-2 border-border transition-all duration-200",
    "neo-shadow neo-hover neo-active focus-ring",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",

    // Size variants
    {
      "px-3 py-1.5 text-xs": size === "sm",
      "px-5 py-2.5 text-sm": size === "md",
      "px-7 py-3.5 text-base": size === "lg",
    },

    // Color variants
    {
      // Default - Primary color
      "bg-primary text-primary-foreground hover:bg-primary/90 border-primary":
        variant === "default",
      // Secondary - Accent color
      "bg-secondary text-secondary-foreground hover:bg-secondary/80":
        variant === "secondary",
      // Outline - transparent with border
      "bg-transparent text-foreground hover:bg-foreground/5":
        variant === "outline",
      // Ghost - minimal styling
      "border-transparent shadow-none bg-transparent hover:bg-foreground/5":
        variant === "ghost",
      // Link - looks like a link
      "border-transparent shadow-none bg-transparent text-primary underline-offset-4 hover:underline":
        variant === "link",
    },

    className
  );

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonStyles(variant, size, className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// ButtonLink component for anchor elements styled as buttons
const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={buttonStyles(variant, size, className)}
        {...props}
      />
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export { Button, ButtonLink, buttonStyles };
