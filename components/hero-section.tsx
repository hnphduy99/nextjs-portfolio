"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { GitHubIcon } from "./icons/GithubIcon";
import Marquee from "./seraui/marquee";
import TypewriterText from "./typewriter/TypewriterText";

const techIcons = [
  { name: "ReactJS", icon: "/react.svg" },
  { name: "Next.js", icon: "/nextjs.svg" },
  { name: "TypeScript", icon: "/typescript.svg" },
  { name: "NestJS", icon: "/nestjs.svg" },
  { name: "TailwindCSS", icon: "/tailwindcss.svg" },
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
              Full-stack developer with 3+ years of experience buildig web applications using ReactJS, NextJS, and
              NestJS, Experienced in RESTful API development, CI/CD automation, and Linux server management. Eager to
              contribute to building high-quality, scalable products.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <motion.a
                href="https://drive.google.com/file/d/1XLlhqaBiHG2DAo6CHfq4PGexKLm_bYol/view?usp=drive_link"
                target="_blank"
                className="flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white transition-all"
                style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(168,85,247,0.4)" }}
                whileTap={{ scale: 0.97 }}
              >
                <FileText size={16} />
                Download CV
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
          className="overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Marquee speed={60} pauseOnHover className="py-4">
            {techIcons.map((tech) => (
              <div
                key={tech.name}
                className="group/tech relative m-3 flex h-fit w-36 min-w-fit cursor-pointer flex-col items-center justify-center rounded-lg transition-transform duration-300 ease-out will-change-transform hover:scale-105 sm:m-5"
              >
                <div
                  className={cn(
                    "h-full w-full rounded-lg border border-gray-200 bg-gray-50 shadow-sm transition-colors duration-300 ease-out group-hover/tech:border-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:shadow-gray-900/50 dark:group-hover/tech:border-violet-400"
                  )}
                >
                  <div className="flex -translate-y-px justify-center">
                    <div className="w-3/4">
                      <div className="h-px w-full bg-linear-to-r from-transparent via-violet-500 to-transparent dark:via-violet-400"></div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-3 p-6">
                    <div className="flex h-8 items-center justify-center sm:h-10">
                      <span className="flex h-full w-auto items-center justify-center rounded-lg">
                        <Image src={tech.icon} alt={tech.name} width={30} height={30} />
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 sm:text-lg dark:text-gray-200">{tech.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-2 left-1/2 -translate-x-1/2"
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
