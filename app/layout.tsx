import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Phuong Duy — Fullstack Developer Portfolio",
  description:
    "Huynh Nguyen Phuong Duy — Fullstack Developer with 3+ years of experience building financial and enterprise applications using ReactJS, NextJS, React Native, and NestJS.",
  keywords: [
    "Phuong Duy",
    "Fullstack Developer",
    "Frontend Developer",
    "ReactJS",
    "NextJS",
    "NestJS",
    "React Native",
    "Vietnam",
    "MobiFone",
    "Portfolio"
  ],
  authors: [{ name: "Huynh Nguyen Phuong Duy", url: "https://github.com/hnphduy99" }],
  creator: "Huynh Nguyen Phuong Duy",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    title: "Phuong Duy — Fullstack Developer",
    description:
      "Portfolio of Huynh Nguyen Phuong Duy, Fullstack Developer specializing in ReactJS, NextJS, NestJS, and React Native.",
    siteName: "Phuong Duy Portfolio"
  },
  twitter: {
    card: "summary_large_image",
    title: "Phuong Duy — Fullstack Developer",
    description:
      "Portfolio of Huynh Nguyen Phuong Duy, Fullstack Developer specializing in ReactJS, NextJS, NestJS, and React Native."
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png", sizes: "1024x1024" }
    ],
    apple: [{ url: "/favicon.png", type: "image/png" }],
    shortcut: "/favicon.png"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="vi"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
