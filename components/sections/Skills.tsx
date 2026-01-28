"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Code, Database, Server, Cloud, Wrench, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["Python", "Java", "JavaScript", "TypeScript", "Bash"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
  },
  {
    title: "Frameworks",
    icon: Server,
    skills: ["FastAPI", "Spring Boot", "Node.js", "Express.js", "Next.js"],
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Jenkins"],
  },
  {
    title: "AI & ML Tools",
    icon: Brain,
    skills: ["Langchain", "Haystack", "VLLM", "guardrailsai", "OpenAI API"],
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    skills: ["Git", "Celery", "WebSocket", "Keycloak", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
            <span className="text-foreground">Technical</span>{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
          <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 border-2 border-border">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold uppercase tracking-wider text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Skill Level Visualization */}
        <div className="mt-16 p-8 border-2 border-border neo-shadow bg-secondary/30">
          <h3 className="text-xl font-bold uppercase mb-6 text-center">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { skill: "Backend Development", level: 95 },
              { skill: "API Design & Integration", level: 90 },
              { skill: "AI/ML Applications", level: 85 },
              { skill: "Cloud Infrastructure", level: 85 },
              { skill: "Database Management", level: 90 },
              { skill: "DevOps & CI/CD", level: 80 },
            ].map((item) => (
              <div key={item.skill} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold">{item.skill}</span>
                  <span className="text-primary font-mono">{item.level}%</span>
                </div>
                <div className="h-3 border-2 border-border bg-background">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
