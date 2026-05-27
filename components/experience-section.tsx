"use client";

import { motion, useInView } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useRef } from "react";

const timelineItems = [
  {
    type: "education",
    period: "2017 – 2021",
    title: "Software Engineering",
    organization: "Can Tho University",
    description:
      "Graduated with a degree in Software Engineering. Built a strong foundation in algorithms, data structures, OOP, and web development fundamentals.",
    side: "left"
  },
  {
    type: "work",
    period: "05/2022 – 10/2023",
    title: "Frontend Developer",
    organization: "MobiFone Service Company Region 9",
    description:
      "Built cross-platform applications with ReactJS and React Native. Integrated RESTful APIs via NodeJS, developed reusable component libraries, and contributed to internal tools used across the company.",
    side: "right"
  },
  {
    type: "education",
    period: "2023 – 2025",
    title: "English Language",
    organization: "Tra Vinh University",
    description:
      "Studied English Language alongside professional work to strengthen international communication skills and broaden technical reading capabilities.",
    side: "left"
  },
  {
    type: "work",
    period: "11/2023 – Present",
    title: "Fullstack Developer",
    organization: "MobiFone Service Company Region 9",
    description:
      "Promoted to Fullstack — developed scalable financial management systems (ERP, TMS, LMS,...) with ReactJS, NestJS, and MySQL. Implemented GitLab CI/CD pipelines and managed Linux/Nginx production deployments.",
    side: "right"
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="relative py-24 md:py-32">
      {/* Bg accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
      />

      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/40 mb-3 text-sm font-medium tracking-widest uppercase">My journey</p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Experience & <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div
            className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(168,85,247,0.3) 10%, rgba(168,85,247,0.3) 90%, transparent)"
            }}
          />

          <div className="space-y-8 md:space-y-0">
            {timelineItems.map((item, index) => {
              const isLeft = item.side === "left";
              return (
                <motion.div
                  key={index}
                  className="relative flex flex-col md:flex-row md:items-center"
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -40 : 40 }}
                  transition={{ duration: 0.6, delay: 0.15 * index }}
                >
                  {/* Left side content */}
                  <div className={`flex-1 ${isLeft ? "md:pr-12 md:text-right" : "md:order-3 md:pl-12"}`}>
                    {(isLeft || true) && (
                      <motion.div
                        className={`border-border-subtle bg-surface-1 relative mb-6 rounded-2xl border p-5 md:mb-0 ${
                          isLeft ? "md:ml-auto" : "md:order-3 md:mr-auto"
                        }`}
                        whileHover={{ scale: 1.02, borderColor: "rgba(168,85,247,0.3)" }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Period badge */}
                        <div
                          className={`mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                            item.type === "work" ? "bg-purple-500/10 text-purple-400" : "bg-pink-500/10 text-pink-400"
                          }`}
                        >
                          {item.type === "work" ? <Briefcase size={11} /> : <GraduationCap size={11} />}
                          {item.period}
                        </div>

                        <h3 className="font-heading text-foreground mb-1 text-lg font-bold">{item.title}</h3>
                        <p className="gradient-text mb-3 text-sm font-semibold">{item.organization}</p>
                        <p className="text-foreground/55 text-sm leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Center dot — only visible on md+ */}
                  <div className="hidden md:order-2 md:flex md:shrink-0 md:items-center md:justify-center">
                    <motion.div
                      className="border-background relative z-10 flex h-10 w-10 items-center justify-center rounded-full border-2"
                      style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: 0.15 * index + 0.2, type: "spring" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      {item.type === "work" ? (
                        <Briefcase size={16} className="text-white" />
                      ) : (
                        <GraduationCap size={16} className="text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Right side — empty or spacer */}
                  <div className={`flex-1 ${isLeft ? "md:order-3 md:pl-12" : "md:pr-12 md:text-right"}`} />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Status Banner */}
        <motion.div
          className="mt-16 overflow-hidden rounded-2xl"
          style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.1), rgba(236,72,153,0.1))" }}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <div className="border-border-subtle flex flex-col items-center justify-between gap-4 rounded-2xl border p-6 sm:flex-row">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-full"
                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
              >
                <Briefcase size={18} className="text-white" />
              </div>
              <div>
                <p className="font-heading text-foreground font-bold">Currently at MobiFone</p>
                <p className="text-foreground/50 text-sm">Fullstack Developer · Nov 2023 – Present</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Open to Opportunities
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
