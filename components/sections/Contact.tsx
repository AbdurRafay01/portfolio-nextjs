"use client";

import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="bg-secondary/30 px-4 py-20 md:py-32">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black uppercase md:text-4xl lg:text-5xl">
            <span className="text-foreground">Get In</span>{" "}
            <span className="text-gradient">Touch</span>
          </h2>
          <div className="bg-primary mx-auto h-1 w-24" />
          <p className="text-muted-foreground mx-auto mt-6 max-w-2xl">
            Have a project in mind or want to discuss opportunities? Feel free
            to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 lg:col-span-2">
            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary border-border border-2 p-3">
                  <Mail className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:contact.arafay@gmail.com"
                    className="text-primary font-bold hover:underline"
                  >
                    contact.arafay@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary border-border border-2 p-3">
                  <Phone className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+923062004306"
                    className="text-primary font-bold hover:underline"
                  >
                    +92-306-200-4306
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="flex items-center gap-4 p-6">
                <div className="bg-primary border-border border-2 p-3">
                  <MapPin className="text-primary-foreground h-6 w-6" />
                </div>
                <div>
                  <p className="text-muted-foreground text-sm tracking-wider uppercase">
                    Location
                  </p>
                  <p className="text-foreground font-bold">Karachi, Pakistan</p>
                </div>
              </CardContent>
            </Card>

            {/* Availability status */}
            <div className="border-success bg-success/10 neo-shadow-sm border-2 p-4">
              <div className="flex items-center gap-2">
                <span className="relative flex h-3 w-3">
                  <span className="bg-success absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                  <span className="bg-success relative inline-flex h-3 w-3 rounded-full"></span>
                </span>
                <p className="text-success text-sm font-bold tracking-wider uppercase">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card hover={false}>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-bold tracking-wider uppercase"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        error={!!errors.name}
                      />
                      {errors.name && (
                        <p className="text-error mt-1 flex items-center gap-1 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-bold tracking-wider uppercase"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        error={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-error mt-1 flex items-center gap-1 text-sm">
                          <AlertCircle className="h-4 w-4" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-bold tracking-wider uppercase"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      error={!!errors.subject}
                    />
                    {errors.subject && (
                      <p className="text-error mt-1 flex items-center gap-1 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-bold tracking-wider uppercase"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      error={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-error mt-1 flex items-center gap-1 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="mr-2 animate-spin">⏳</span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>

                  {/* Status Messages */}
                  {submitStatus === "success" && (
                    <div className="border-success bg-success/10 flex items-center gap-2 border-2 p-4">
                      <CheckCircle className="text-success h-5 w-5" />
                      <p className="text-success font-bold">
                        Message sent successfully! I&apos;ll get back to you
                        soon.
                      </p>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="border-error bg-error/10 flex items-center gap-2 border-2 p-4">
                      <AlertCircle className="text-error h-5 w-5" />
                      <p className="text-error font-bold">
                        Something went wrong. Please try again.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
