"use client";

import { motion, useInView } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { GitHubIcon } from "./icons/GithubIcon";
import TypewriterText from "./typewriter/TypewriterText";

const techIcons = [
  { name: "React", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "NestJS", icon: "/nestjs.svg" },
  { name: "Tailwind", icon: "/tailwindcss.svg" },
  { name: "HTML", icon: "/html.svg" },
  { name: "CSS", icon: "/css.svg" },
  { name: "JavaScript", icon: "/javascript.svg" },
  { name: "Git", icon: "/git.svg" }
];

const floatVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 }
};

export default function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background Gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-background absolute inset-0" />
        {/* Radial gradient blob — purple */}
        <div
          className="animate-float-slow absolute top-1/4 left-1/4 h-72 w-72 rounded-full opacity-20 blur-3xl md:h-96 md:w-96"
          style={{ background: "radial-gradient(circle, #a855f7, transparent 70%)" }}
        />
        {/* Pink blob */}
        <div
          className="animate-float-medium absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full opacity-15 blur-3xl md:h-80 md:w-80"
          style={{ background: "radial-gradient(circle, #ec4899, transparent 70%)" }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(168,85,247,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">
          {/* Avatar */}
          <motion.div
            className="relative shrink-0"
            variants={floatVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          >
            {/* Gradient ring */}
            <div
              className="animate-pulse-glow absolute -inset-1 rounded-full"
              style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
            />
            {/* Spinning ring */}
            <div
              className="animate-spin-slow absolute -inset-3 rounded-full border border-dashed"
              style={{ borderColor: "rgba(168,85,247,0.3)" }}
            />
            <div className="border-background relative h-44 w-44 overflow-hidden rounded-full border-4 md:h-52 md:w-52">
              <Image
                src="/images/duy.JPG"
                alt="Huynh Nguyen Phuong Duy — Fullstack Developer"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="eager"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Greeting chip */}
            <motion.div
              className="text-foreground/60 border-glass-border bg-glass-bg mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>👋</span>
              <span>Hi there, I&apos;m</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="font-heading mb-2 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <span className="text-foreground block">Huynh Nguyen</span>
              <span className="gradient-text glow-text block">Phuong Duy</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              className="text-foreground/50 mb-6 text-xl font-medium md:text-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <TypewriterText text={["Fullstack Developer", "Strong Frontend", "ReactJS & NestJS"]} />
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-foreground/60 mb-8 max-w-lg text-base leading-relaxed md:text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.55 }}
            >
              3+ years building financial and enterprise applications. Specialized in scalable frontend architecture,
              CI/CD pipelines, and Linux deployments.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={16} />
                Get in Touch
              </motion.a>

              <motion.a
                href="https://github.com/hnphduy99"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 border-glass-border bg-glass-bg hover:bg-surface-3 flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur-sm transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Tech Marquee */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-foreground/30 mb-4 text-center text-xs font-medium tracking-widest uppercase">
            Tech Stack
          </p>
          <div className="relative">
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r to-transparent" />
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l to-transparent" />
            <div className="animate-marquee flex w-[200%] gap-8">
              {[...techIcons, ...techIcons].map((tech, i) => (
                <div key={i} className="flex shrink-0 flex-col items-center gap-2" title={tech.name}>
                  <div className="border-border-subtle bg-surface-1 hover:border-border-medium hover:bg-surface-2 flex h-10 w-10 items-center justify-center rounded-xl border p-2 transition-colors">
                    <Image src={tech.icon} alt={tech.name} width={24} height={24} />
                  </div>
                  <span className="text-foreground/40 text-[10px]">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className="text-foreground/30 flex flex-col items-center gap-1"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.button>
    </section>
  );
}
