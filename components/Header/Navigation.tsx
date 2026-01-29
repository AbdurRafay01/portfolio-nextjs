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
      <nav className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "text-sm font-bold tracking-wider uppercase",
              "text-foreground hover:text-primary",
              "transition-all duration-200",
              "relative after:absolute after:bottom-0 after:left-0 after:h-0.5",
              "after:bg-primary after:w-0 after:transition-all after:duration-300",
              "hover:after:w-full",
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="border-border neo-shadow-sm bg-background border-2 p-2 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="text-primary h-6 w-6" />
        ) : (
          <Menu className="text-foreground h-6 w-6" />
        )}
      </button>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "bg-background/98 fixed inset-0 z-40 md:hidden",
          "flex flex-col items-center justify-center gap-8",
          "transition-all duration-300",
          isOpen ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        {navItems.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={handleClick}
            className={cn(
              "text-2xl font-bold tracking-wider uppercase",
              "text-foreground hover:text-primary",
              "transition-all duration-300",
              "transform",
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
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
