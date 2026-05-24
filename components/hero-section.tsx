"use client";

import { motion } from "framer-motion";
import { CodeXml, Mail, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GitHubIcon } from "./icons/GithubIcon";
import TypewriterText from "./typewriter/TypewriterText";

const skill = [
  {
    name: "Html",
    icon: "/html.svg"
  },
  {
    name: "Css",
    icon: "/css.svg"
  },
  {
    name: "Javascript",
    icon: "/javascript.svg"
  },
  {
    name: "React",
    icon: "/react.svg"
  },
  {
    name: "Tailwind",
    icon: "/tailwindcss.svg"
  },
  {
    name: "Ant Design",
    icon: "/antd.svg"
  }
];

export default function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-24px)] bg-gray-100 p-8 pt-24 md:p-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          {/* Profile Image */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <Image
                src="/images/duy.JPG"
                alt="Profile photo"
                width={400}
                height={500}
                className="w-full rounded-3xl object-cover"
              />
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="space-y-6 lg:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4">
              <motion.h1
                className="text-5xl font-bold text-gray-900"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <TypewriterText text={["Hello!", "I'm Phuong Duy", "Frontend Dev"]} />
              </motion.h1>
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <CodeXml className="text-white" />
              </motion.div>
            </div>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-lg leading-relaxed text-gray-700">
                My name is Phuong Duy. My strengths are Frontend Developer, ReactJS. I love building UI, user-friendly
                interfaces and bringing creative designs to life through clean, efficient code.
              </p>
              <p className="text-lg text-gray-700">Hope you enjoy my portfolio!</p>
            </motion.div>

            {/* Education Section */}
            <motion.div
              className="space-y-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <h2 className="text-3xl font-bold text-gray-900">EDUCATION</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">2017 - 2021: Can Tho University</h3>
                <p className="text-gray-700">Softwre Engineering</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">2013 - 2025: Tra Vinh University</h3>
                <p className="text-gray-700">English Language</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills and Experience */}
          <motion.div
            className="space-y-8 lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Skills */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900">SKILLS</h2>
              <motion.div
                className="grid grid-cols-3 gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.6
                    }
                  }
                }}
              >
                {skill.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex cursor-pointer items-center justify-center rounded-lg bg-gray-800 p-4"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg font-bold text-white">
                      <Image src={skill.icon} alt={skill.name} width={0} height={0} sizes="100vw" className="h-8 w-8" />
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="mb-6 text-3xl font-bold text-gray-900">EXPERIENCE</h2>
              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <h3 className="text-xl font-bold text-gray-800">2022 - Present</h3>
                  <p className="text-gray-700">Fullstack Developer at MobiFone9</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Information */}
        <motion.div
          className="mt-16 border-t border-gray-300 pt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <motion.div
            className="flex flex-wrap justify-center gap-8 md:justify-start"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.6
                }
              }
            }}
          >
            {[
              { icon: Phone, text: "09239 227 225" },
              { icon: Mail, text: "hnpdhuy99@gmail.com" },
              { icon: GitHubIcon, text: "github.com/hnphduy99" }
            ].map((item) => (
              <motion.div
                key={item.text}
                className="flex cursor-pointer items-center gap-2 text-gray-700"
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, color: "#ef4444" }}
                transition={{ duration: 0.2 }}
              >
                {React.createElement(item.icon, { className: "w-6 h-6" })}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
