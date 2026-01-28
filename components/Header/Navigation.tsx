"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "font-bold uppercase tracking-wider text-sm",
              "text-foreground hover:text-primary",
              "transition-all duration-200",
              "relative after:absolute after:bottom-0 after:left-0 after:h-0.5",
              "after:w-0 after:bg-primary after:transition-all after:duration-300",
              "hover:after:w-full"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 border-2 border-border neo-shadow-sm bg-background"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-primary" />
        ) : (
          <Menu className="h-6 w-6 text-foreground" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 z-40 md:hidden",
          "flex flex-col items-center justify-center gap-8",
          "transition-all duration-300",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleClick}
            className={cn(
              "font-bold uppercase tracking-wider text-2xl",
              "text-foreground hover:text-primary",
              "transition-all duration-300",
              "transform",
              isOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            )}
            style={{
              transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
            }}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
