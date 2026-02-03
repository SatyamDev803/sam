import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Satyam Sharma | Software Engineer",
    template: "%s | Satyam Sharma",
  },
  description:
    "Software Engineer specializing in backend systems, ML pipelines, and AI-powered applications. Building scalable, robust solutions.",
  keywords: [
    "Software Engineer",
    "Backend Developer",
    "Machine Learning",
    "FastAPI",
    "Python",
    "Distributed Systems",
    "AI",
  ],
  authors: [{ name: "Satyam Sharma" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://satyamsharma.dev",
    siteName: "Satyam Sharma",
    title: "Satyam Sharma | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, ML pipelines, and AI-powered applications.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Satyam Sharma | Software Engineer",
    description:
      "Software Engineer specializing in backend systems, ML pipelines, and AI-powered applications.",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col gradient-mesh`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
