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
    <section id="about" className="px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            <span className="text-gradient">About</span>{" "}
            <span className="text-foreground">Me</span>
          </h2>
          <div className="bg-primary mx-auto h-1 w-24" />
        </div>

        {/* Summary Card */}
        <Card className="bg-secondary/50 mb-12">
          <CardContent className="p-6 md:p-8">
            <p className="text-foreground text-lg leading-relaxed">
              Software Engineer with over{" "}
              <span className="text-primary font-bold">3+ years</span> of
              experience in software development. Remarkable projects include{" "}
              <span className="text-accent font-bold">
                Auxin Security Alphascale
              </span>{" "}
              for source code vulnerability detection. Well-versed in system
              integration and capable of developing robust, performant
              applications using{" "}
              <span className="text-primary font-bold">Python, Java</span> and
              other modern technologies.
            </p>
          </CardContent>
        </Card>

        {/* Education */}
        <div className="mb-12">
          <h3 className="mb-6 flex items-center gap-3 text-xl font-bold uppercase md:text-2xl">
            <GraduationCap className="text-primary h-6 w-6" />
            Education
          </h3>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-primary text-lg font-bold">
                    NED University of Engineering and Technology
                  </h4>
                  <p className="text-foreground">
                    Bachelors of Science, Computer Science
                  </p>
                </div>
                <div className="text-muted-foreground flex items-center gap-4 text-sm">
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
          <h3 className="mb-6 flex items-center gap-3 text-xl font-bold uppercase md:text-2xl">
            <Briefcase className="text-primary h-6 w-6" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="text-primary text-lg font-bold">
                        {exp.title}
                      </h4>
                      <p className="text-accent font-bold">{exp.company}</p>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-4 text-sm">
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
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">▸</span>
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
