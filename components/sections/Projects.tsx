"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import {
  ExternalLink,
  Github,
  Bot,
  Shield,
  Database,
  Server,
} from "lucide-react";

const projects = [
  {
    title: "AI Chatbot Platform",
    description:
      "Enterprise AI chatbot designed to efficiently retrieve and present database information to users in a human-friendly format. Built with modern AI libraries and techniques.",
    image: "/projects/ai-chatbot.png",
    tags: ["Python", "Langchain", "FastAPI", "PostgreSQL"],
    icon: Bot,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Alphascale Security Scanner",
    description:
      "Source code vulnerability detection platform that analyzes codebases for security issues. Features async API calls, real-time notifications, and comprehensive reporting.",
    image: "/projects/security-scanner.png",
    tags: ["Python", "Asyncio", "Celery", "AWS"],
    icon: Shield,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DNS Automation System",
    description:
      "Automated DNS record management in AWS Route-53 with Lambda functions. Dynamically updates private IP addresses during autoscaling events.",
    image: "/projects/dns-automation.png",
    tags: ["Python", "AWS Lambda", "Route-53", "CloudWatch"],
    icon: Database,
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real-time Notification Service",
    description:
      "Emit-event based notification system performing delivery at multiple levels: individual users, organizational groups, and system-wide broadcasts using WebSocket.",
    image: "/projects/notification-service.png",
    tags: ["Python", "WebSocket", "Redis", "Docker"],
    icon: Server,
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-secondary/30 px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            <span className="text-foreground">Featured</span>{" "}
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="bg-primary mx-auto h-1 w-24" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl">
            A showcase of my work in backend development, AI applications, and
            cloud infrastructure.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden">
              {/* Project Icon/Image Placeholder */}
              <div className="from-primary/10 to-accent/10 border-border flex h-48 items-center justify-center border-b-2 bg-gradient-to-br">
                <project.icon className="text-primary h-20 w-20 opacity-80 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <ButtonLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </ButtonLink>
                <ButtonLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="sm"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </ButtonLink>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View More CTA */}
        <div className="mt-12 text-center">
          <ButtonLink
            href="https://github.com/arafay"
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            size="lg"
          >
            <Github className="mr-2 h-5 w-5" />
            View More on GitHub
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
