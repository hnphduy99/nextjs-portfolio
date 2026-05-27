"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ProjectCard } from "./project-card";

const companyProjects = [
  {
    id: 1,
    title: "English Center Management",
    description:
      "Web-based LMS and internal management system with academic management, learning tracking (programs, courses, classes), user management with RBAC for students, teachers, staff, and parents.",
    url: null,
    repo: null,
    tags: ["ReactJS", "NestJS", "MySQL", "JWT", "TypeScript", "Ant Design 4", "RESTful API"]
  },
  {
    id: 2,
    title: "Transportation Management",
    description:
      "Fullstack TMS with form-heavy and data-driven workflows. Includes customer management, goods management, and transport order tracking with JWT-based RBAC and SMS Brandname notifications.",
    url: null,
    repo: null,
    tags: ["ReactJS", "NestJS", "MySQL", "JWT", "TypeScript", "Ant Design 4", "RESTful API"]
  },
  {
    id: 3,
    title: "ERP & Warehouse Management",
    description:
      "Key business features including Sales Management, Customer Debt (Accounts Receivable), financial tracking dashboards with Receipts/Payments modules.",
    url: null,
    repo: null,
    tags: ["ReactJS", "NestJS", "MySQL", "JWT", "TypeScript", "Ant Design 4", "RESTful API"]
  }
];

const personalProjects = [
  {
    id: 4,
    title: "Moji Chat App",
    description:
      "Real-time messaging platform with instant chat via WebSockets, online status tracking, friend management, image sharing via Cloudinary, and support for both direct and group conversations.",
    url: "https://web-react-moji-chat.vercel.app/",
    repo: "https://github.com/hnphduy99/web-react-moji-chat",
    tags: ["ReactJS", "NodeJS", "Socket.IO", "MongoDB", "Tailwind CSS", "Shadcn/ui"]
  },
  {
    id: 5,
    title: "Auto Facebook Desktop",
    description:
      "Desktop automation tool for Facebook workflows featuring automated posting, interaction handling, browser automation, and account task management through an Electron-based interface integrated with automation scripts.",
    repo: "https://github.com/hnphduy99/auto-facebook-desktop.git",
    tags: ["Electron", "ReactJS", "Puppeteer", "TypeScript", "Tailwind CSS"]
  },
  {
    id: 6,
    title: "React Simple Movie",
    description: "Simple movie app with TMDB API build in ReactJS when i start to learn frontend",
    url: "https://react-simple-movie-woad.vercel.app/",
    repo: "https://github.com/hnphduy99/web-react-simple-movie",
    tags: ["ReactJS", "TypeScript", "Tailwind CSS"]
  }
];

const tabs = [
  { id: "company", label: "Company Projects", count: companyProjects.length },
  { id: "personal", label: "Personal Projects", count: personalProjects.length }
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("company");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const currentProjects = activeTab === "company" ? companyProjects : personalProjects;

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32">
      {/* Bg accent */}
      <div
        className="pointer-events-none absolute top-1/2 right-0 -z-10 h-80 w-80 -translate-y-1/2 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/40 mb-3 text-sm font-medium tracking-widest uppercase">What I&apos;ve built</p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-foreground/55 mx-auto mt-4 max-w-2xl text-base">
            A selection of real-world and personal projects that showcase my development journey and expertise.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          className="mb-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="border-border-subtle bg-surface-1 inline-flex rounded-2xl border p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id ? "text-white" : "text-foreground/50 hover:text-foreground/80"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                    activeTab === tab.id ? "bg-white/20 text-white" : "text-foreground/40 bg-surface-2"
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          key={activeTab}
          className={`grid gap-6 ${
            currentProjects.length === 1
              ? "mx-auto max-w-lg"
              : currentProjects.length === 2
                ? "mx-auto max-w-3xl grid-cols-1 sm:grid-cols-2"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          }`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {currentProjects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              tags={p.tags}
              demoUrl={p.url}
              repoUrl={p.repo}
            />
          ))}
        </motion.div>

        {/* Company Note */}
        {activeTab === "company" && (
          <motion.p
            className="text-foreground/35 mt-8 text-center text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            * Company projects are under NDA — no live demos or source code available.
          </motion.p>
        )}
      </div>
    </section>
  );
}
