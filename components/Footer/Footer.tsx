"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/arafay",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/arafay",
    label: "LinkedIn",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/arafay",
    label: "Twitter",
  },
  {
    icon: Mail,
    href: "mailto:contact.arafay@gmail.com",
    label: "Email",
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-border bg-background">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={cn(
                  "p-2 border-2 border-border rounded-sm",
                  "bg-background hover:bg-primary",
                  "text-foreground hover:text-primary-foreground",
                  "transition-all duration-200",
                  "neo-shadow-sm neo-hover neo-active"
                )}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground font-mono">
            <span className="text-primary">&copy;</span> {currentYear}{" "}
            <span className="text-foreground font-semibold">Abdur Rafay</span>. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
