"use client";

import { motion, useInView } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { ProjectCard } from "./project-card";

const personalProjects = [
  {
    id: 1,
    title: "English Center Management",
    description:
      "Web-based LMS and internal management system. Features academic management, learning tracking (programs, courses, classes), user management with RBAC for students, teachers, staff, and parents.",
    type: "Company Project",
    url: null,
    repo: null,
    tags: ["ReactJS", "NestJS", "RESTful API", "MySQL", "JWT", "TypeScript", "Ant Design 4"]
  },
  {
    id: 2,
    title: "Transportation Management",
    description:
      "Fullstack TMS with form-heavy and data-driven workflows. Includes customer management, goods management, and transport order tracking with JWT-based RBAC and SMS Brandname notifications.",
    type: "Company Project",
    url: null,
    repo: null,
    tags: ["ReactJS", "NestJS", "RESTful API", "MySQL", "JWT", "TypeScript", "Ant Design 4"]
  },
  {
    id: 3,
    title: "Moji Chat App",
    description:
      "Real-time messaging platform. Features instant chat via WebSockets, online status tracking, a custom friend management system, image sharing via Cloudinary, and support for both direct and group conversations.",
    type: "Personal Project",
    url: "https://web-react-moji-chat.vercel.app/",
    repo: "https://github.com/hnphduy99/web-react-moji-chat",
    tags: ["ReactJS", "NodeJS", "Socket.IO", "MongoDB", "Tailwind", "Shacdcn/ui"]
  }
];

const techStack = [
  {
    category: "Frontend",
    tools: [
      { name: "ReactJS", icon: "react.svg" },
      { name: "Nextjs", icon: "nextjs.svg" },
      { name: "TypeScript", icon: "typescript.svg" },
      { name: "Ant Design", icon: "antd.svg" },
      { name: "Tailwind CSS", icon: "tailwindcss.svg" },
      { name: "HTML / CSS", icon: "html.svg" }
    ]
  },
  {
    category: "Backend & DB",
    tools: [
      { name: "NestJS", icon: "nestjs.svg" },
      { name: "NodeJS", icon: "vitejs.svg" },
      { name: "Linux", icon: "linux.svg" },
      { name: "Git", icon: "git.svg" }
    ]
  },
  {
    category: "Tools",
    tools: [
      { name: "VScode", icon: "vscode.svg" },
      { name: "Postman", icon: "postman.svg" },
      { name: "Figma", icon: "figma.svg" },
      { name: "DevOps", icon: "devops.png" }
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
            <h3 className="mb-4 text-4xl font-bold text-gray-900">Projects</h3>
            <p className="mx-auto max-w-2xl text-gray-600">
              Explore some of my personal and real-world projects that showcase my development journey, practical
              experience, and experimentation with modern technologies.
            </p>
          </motion.div>

          {/* Projects Section */}
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
            {personalProjects.map((p) => (
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
                          <Image src={`/${tool.icon}`} className="h-9 w-9" width={36} height={36} alt={tool.name} />
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
