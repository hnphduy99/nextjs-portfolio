"use client";

import { motion, useInView, Variants } from "framer-motion";
import { Award, Code, Laptop, Users } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const techStack = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "NestJS", icon: "/nestjs.svg" },
  { name: "Tailwind CSS", icon: "/tailwindcss.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "Git", icon: "/git.svg" },
  { name: "Linux", icon: "/linux.svg" },
  { name: "Ant Design", icon: "/antd.svg" }
];

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Projects Shipped" },
  { value: "1", label: "Companies" }
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Writing maintainable, scalable code following best practices"
  },
  {
    icon: Laptop,
    title: "Modern Stack",
    desc: "Always learning and adopting the latest frontend technologies"
  },
  {
    icon: Users,
    title: "User First",
    desc: "Interfaces that prioritize experience and accessibility"
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Delivering high-performance apps with attention to detail"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32">
      {/* Subtle bg accent */}
      <div
        className="pointer-events-none absolute top-0 right-0 -z-10 h-80 w-80 rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/40 mb-3 text-sm font-medium tracking-widest uppercase">Get to know me</p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* Left — Bio + Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-foreground/70 space-y-4 text-base leading-relaxed md:text-lg">
              <p>
                I started my tech journey at <strong className="text-foreground">Can Tho University</strong>, majoring
                in Software Engineering (2017–2021). After graduating, I joined{" "}
                <strong className="text-foreground">MobiFone Service Company Region 9</strong> where I grew from
                Frontend to Fullstack Developer.
              </p>
              <p>
                I specialize in{" "}
                <span className="gradient-text font-semibold">ReactJS, NextJS, React Native, and NestJS</span>, with
                hands-on experience in CI/CD pipelines (GitLab), Linux/Nginx deployments, and MySQL database.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="gradient-border bg-surface-1 rounded-2xl p-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="font-heading gradient-text mb-1 text-3xl font-bold">{stat.value}</div>
                  <div className="text-foreground/50 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Values Grid */}
            <motion.div
              className="grid grid-cols-2 gap-3"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {values.map((v) => (
                <motion.div
                  key={v.title}
                  className="border-border-subtle bg-surface-1 hover:border-border-medium hover:bg-surface-2 rounded-xl border p-4 transition-colors"
                  variants={itemVariants}
                  whileHover={{ y: -2 }}
                >
                  <v.icon className="mb-2 h-5 w-5" style={{ color: "#a855f7" }} />
                  <h4 className="font-heading text-foreground mb-1 text-sm font-semibold">{v.title}</h4>
                  <p className="text-foreground/50 text-xs leading-relaxed">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-heading mb-6 text-2xl font-bold">
              Tech <span className="gradient-text">Stack</span>
            </h3>
            <p className="text-foreground/50 mb-8 text-sm">
              Tools and technologies I use to build scalable, production-grade applications.
            </p>

            <motion.div
              className="grid grid-cols-3 gap-3 sm:grid-cols-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  className="group border-border-subtle bg-surface-1 flex flex-col items-center gap-2 rounded-xl border p-3 transition-all hover:border-purple-500/30 hover:bg-purple-500/5"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="bg-surface-2 flex h-10 w-10 items-center justify-center rounded-lg p-2 transition-colors group-hover:bg-purple-500/10">
                    <Image src={tech.icon} alt={tech.name} width={28} height={28} className="object-contain" />
                  </div>
                  <span className="text-foreground/50 group-hover:text-foreground/80 text-center text-[11px] leading-tight font-medium transition-colors">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              className="mt-10 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="font-heading mb-4 text-xl font-bold">
                <span className="gradient-text">Education</span>
              </h3>
              {[
                {
                  period: "2017 – 2021",
                  school: "Can Tho University",
                  major: "Software Engineering"
                },
                {
                  period: "2023 – 2025",
                  school: "Tra Vinh University",
                  major: "English Language"
                }
              ].map((edu) => (
                <div
                  key={edu.school}
                  className="border-border-subtle bg-surface-1 flex items-start gap-4 rounded-xl border p-4"
                >
                  <div
                    className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                  />
                  <div>
                    <p className="text-foreground/40 text-xs">{edu.period}</p>
                    <p className="font-heading text-foreground text-sm font-semibold">{edu.school}</p>
                    <p className="text-foreground/60 text-xs">{edu.major}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
