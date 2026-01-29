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
    <section id="skills" className="px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            <span className="text-foreground">Technical</span>{" "}
            <span className="text-gradient">Skills</span>
          </h2>
          <div className="bg-primary mx-auto h-1 w-24" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group">
              <CardContent className="p-6">
                {/* Category Header */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-primary/10 border-border border-2 p-2">
                    <category.icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="text-foreground font-bold tracking-wider uppercase">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="hover:bg-primary hover:text-primary-foreground hover:border-primary cursor-default transition-colors"
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
        <div className="border-border neo-shadow bg-secondary/30 mt-16 border-2 p-8">
          <h3 className="mb-6 text-center text-xl font-bold uppercase">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
                <div className="border-border bg-background h-3 border-2">
                  <div
                    className="from-primary to-accent h-full bg-gradient-to-r transition-all duration-1000"
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
