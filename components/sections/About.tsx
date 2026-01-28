"use client";

import { Card, CardContent } from "@/components/ui/Card";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Backend Engineer",
    company: "rokket.ai",
    location: "Remote",
    period: "Feb 2024 – Present",
    highlights: [
      "Led end-to-end development of AI applications using Langchain, Haystack, guardrailsai, VLLM",
      "Developed AI Chatbot for database information retrieval in human-friendly format",
      "Integrated Keycloak and Google SSO for identity and authorization",
      "Updated Java Spring Boot API from JDK 8 to 17",
      "Managed Kubernetes deployments and CI/CD pipelines in AWS CodePipeline",
    ],
  },
  {
    title: "Backend Engineer",
    company: "Auxin Security",
    location: "Karachi, Pakistan",
    period: "May 2022 – Jan 2024",
    highlights: [
      "Reduced dashboard load time by 60% using Python's Asyncio framework",
      "Implemented automated DNS management in AWS Route-53 with Lambda",
      "Designed emit-event based notification system with WebSocket",
      "Optimized server performance with Celery distributed task queue",
      "Established database migration workflow and comprehensive testing infrastructure",
    ],
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-4">
            <span className="text-gradient">About</span>{" "}
            <span className="text-foreground">Me</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        {/* Summary Card */}
        <Card className="mb-12 bg-secondary/50">
          <CardContent className="p-6 md:p-8">
            <p className="text-lg leading-relaxed text-foreground">
              Software Engineer with over{" "}
              <span className="text-primary font-bold">3+ years</span> of
              experience in software development. Remarkable projects include{" "}
              <span className="text-accent font-bold">
                Auxin Security Alphascale
              </span>{" "}
              for source code vulnerability detection. Well-versed in system
              integration and capable of developing robust, performant
              applications using{" "}
              <span className="text-primary font-bold">
                Python, Java
              </span>{" "}
              and other modern technologies.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <div className="mb-12">
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" />
            Education
          </h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-bold text-primary">
                    NED University of Engineering and Technology
                  </h4>
                  <p className="text-foreground">
                    Bachelors of Science, Computer Science
                  </p>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> Karachi, Pakistan
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> 2018 - 2022
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Work Experience */}
        <div>
          <h3 className="text-xl md:text-2xl font-bold uppercase mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-primary">
                        {exp.title}
                      </h4>
                      <p className="text-accent font-bold">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">
                          ▸
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
