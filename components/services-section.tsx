"use client";

import { motion, useInView } from "framer-motion";
import { Code, Database, ExternalLink, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { GitHubIcon } from "./icons/GithubIcon";

const personalProjects = [
  {
    title: "E-commerce Dashboard",
    category: "React + TypeScript",
    description: "A comprehensive admin dashboard for managing products, orders, and analytics",
    image: "/ecommerce-dashboard.png",
    year: "2024",
    tools: ["React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Task Management App",
    category: "React + Node.js",
    description: "Full-stack application for team collaboration and project management",
    image: "/task-management-app.png",
    year: "2024",
    tools: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Weather Dashboard",
    category: "React + API Integration",
    description: "Real-time weather application with interactive maps and forecasts",
    image: "/weather-dashboard.png",
    year: "2023",
    tools: ["React", "Chart.js", "Weather API"]
  }
];

const techStack = [
  {
    category: "Skills",
    tools: [
      { name: "Html", icon: "html.svg" },
      { name: "Css", icon: "css.svg" },
      { name: "Javascript", icon: "javascript.svg" },
      { name: "Reactjs", icon: "react.svg" },
      { name: "Nextjs", icon: "nextjs.svg" },
      { name: "Ant Design", icon: "antd.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
      { name: "Styled Components", icon: "styledcomponents.svg" }
    ]
  },
  {
    category: "Tools",
    tools: [
      { name: "VScode", icon: "vscode.svg" },
      { name: "Postman", icon: "postman.svg" },
      { name: "Git", icon: "git.svg" },
      { name: "Figma", icon: "figma.svg" }
    ]
  },
  {
    category: "Other",
    tools: [
      { name: "Linux", icon: "linux.svg" },
      { name: "DevOps", icon: "devops.png" },
      { name: "Nestjs", icon: "nestjs.svg" },
      { name: "Vite", icon: "vitejs.svg" }
    ]
  }
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Section Header */}
        <div className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="mb-4 text-4xl font-bold text-gray-900">Personal Projects</h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore some of my personal creative projects that showcase my artistic journey and experimentation.
            </p>
          </motion.div>

          {/* Personal Projects Section */}
          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.6
                }
              }
            }}
          >
            {personalProjects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="relative h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute right-4 bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="mb-2 flex items-center gap-2">
                      {project.tools.map((tool, toolIndex) => (
                        <span key={toolIndex} className="rounded bg-white/20 px-2 py-1 text-xs">
                          {tool}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">{project.year}</span>
                      <div className="flex gap-2">
                        <button className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30">
                          <ExternalLink size={16} />
                        </button>
                        <button className="rounded-full bg-white/20 p-2 transition-colors hover:bg-white/30">
                          <GitHubIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-red-500">{project.category}</span>
                  </div>
                  <h4 className="mb-2 text-xl font-bold text-gray-900">{project.title}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h3 className="mb-4 text-4xl font-bold text-gray-900">Tech Stack</h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              The tools and software I use to bring creative visions to life, from initial concept to final delivery.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.0
                }
              }
            }}
          >
            {techStack.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                className="rounded-2xl bg-gray-50 p-8"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <h4 className="mb-6 text-xl font-bold text-gray-900">{category.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.name}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 1.2 + toolIndex * 0.1 }}
                    >
                      {tool.icon && (
                        <motion.div
                          className="flex cursor-pointer items-center justify-center rounded-lg p-4"
                          variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 }
                          }}
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Image src={`/${tool.icon}`} width={36} height={36} alt={tool.name} />
                        </motion.div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Development Process Section */}
        <motion.div
          className="rounded-3xl bg-gray-50 p-12"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="mb-12 text-center">
            <h3 className="mb-4 text-4xl font-bold text-gray-900">My Development Process</h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Every project follows a structured approach to ensure clean code, optimal performance, and great user
              experience.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-4"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 1.0
                }
              }
            }}
          >
            {[
              {
                icon: Globe,
                title: "1. Planning",
                desc: "Understanding requirements, user needs, and technical specifications."
              },
              {
                icon: Code,
                title: "2. Development",
                desc: "Writing clean, maintainable code following best practices and patterns."
              },
              {
                icon: Smartphone,
                title: "3. Testing",
                desc: "Thorough testing across devices and browsers for optimal performance."
              },
              {
                icon: Database,
                title: "4. Deployment",
                desc: "Deploying to production with proper monitoring and optimization."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <motion.div
                  className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </motion.div>
                <h4 className="mb-2 text-xl font-bold text-gray-900">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
