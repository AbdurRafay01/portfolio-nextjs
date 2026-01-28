import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/contexts/ThemeContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdur Rafay | Software Engineer",
  description:
    "Software Engineer with 3+ years of experience in backend development, AI applications, and cloud infrastructure. Specializing in Python, Java, and modern web technologies.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Python",
    "Java",
    "FastAPI",
    "Spring Boot",
    "AI",
    "Machine Learning",
    "AWS",
    "Karachi",
    "Pakistan",
  ],
  authors: [{ name: "Abdur Rafay", url: "https://github.com/arafay" }],
  creator: "Abdur Rafay",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Abdur Rafay | Software Engineer",
    description:
      "Software Engineer specializing in backend development, AI applications, and cloud infrastructure.",
    siteName: "Abdur Rafay Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdur Rafay | Software Engineer",
    description:
      "Software Engineer specializing in backend development, AI applications, and cloud infrastructure.",
    creator: "@arafay",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.classList.add(theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
