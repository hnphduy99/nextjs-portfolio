"use client";

import { motion, useInView } from "framer-motion";
import { Award, Code, Laptop, Users } from "lucide-react";
import { useRef } from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">About Me</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Fullstack Developer with 3+ years of experience building financial and enterprise applications. Specialized
            in scalable frontend architecture, reusable component systems, and CI/CD automation.
          </p>
        </motion.div>

        <div className="mb-20 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="mb-4 text-3xl font-bold text-gray-900">My Journey</h3>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                I started my tech journey at Can Tho University, majoring in Software Engineering (2017–2021). After
                graduating, I joined MobiFone Service Company Region 9 where I grew from Frontend Developer to Fullstack
                Developer building scalable financial and enterprise systems.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                I specialize in ReactJS, NextJS, React Native, and NestJS, with hands-on experience in CI/CD pipelines
                (GitLab), Linux/Nginx deployments, and MySQL. I&apos;m also studying English Language at Tra Vinh
                University to broaden my communication skills.
              </p>
            </div>
          </motion.div>
          {/* Values */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.4
                }
              }
            }}
          >
            {[
              {
                icon: Code,
                title: "Clean Code",
                desc: "Writing maintainable, scalable code that follows best practices",
                color: "text-red-500"
              },
              {
                icon: Laptop,
                title: "Modern Tech",
                desc: "Staying updated with latest frontend technologies and trends",
                color: "text-red-500"
              },
              {
                icon: Users,
                title: "User-Focused",
                desc: "Building interfaces that prioritize user experience and accessibility",
                color: "text-red-500"
              },
              {
                icon: Award,
                title: "Quality",
                desc: "Delivering high-performance applications with attention to detail",
                color: "text-red-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="cursor-pointer rounded-2xl bg-gray-50 p-6 text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.05, backgroundColor: "#fef2f2" }}
                transition={{ duration: 0.2 }}
              >
                <value.icon className={`h-8 w-8 ${value.color} mx-auto mb-3`} />
                <h4 className="mb-2 font-semibold text-gray-900">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Content - Image */}
          {/* <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/artist-studio.png"
                alt="Artist working in studio"
                width={500}
                height={600}
                className="object-cover w-full"
              />
            </div>
            <motion.div
              className="absolute -bottom-8 -left-8 bg-white rounded-2xl shadow-lg p-6 border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">4+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </motion.div>
            <motion.div
              className="absolute -top-8 -right-8 bg-white rounded-2xl shadow-lg p-6 border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.6, delay: 1.0 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </motion.div>
          </motion.div> */}
        </div>

        {/* Timeline */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="mb-12 text-center text-3xl font-bold text-gray-900">My Development Timeline</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 h-full w-1 -translate-x-1/2 transform bg-gray-200"></div>

            {/* Timeline Items */}
            <motion.div
              className="space-y-12"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2,
                    delayChildren: 0.8
                  }
                }
              }}
            >
              {[
                {
                  year: "2017",
                  title: "Started University",
                  desc: "Began studying Software Engineering at Can Tho University — graduated 2021",
                  side: "left"
                },
                {
                  year: "05/2022",
                  title: "Frontend Developer",
                  desc: "Joined MobiFone Service Company Region 9 — built cross-platform apps with ReactJS and React Native, integrated RESTful APIs via NodeJS",
                  side: "right"
                },
                {
                  year: "11/2023",
                  title: "Fullstack Developer",
                  desc: "Promoted to Fullstack — developed scalable financial management systems with ReactJS, NestJS, and MySQL; implemented GitLab CI/CD and managed Linux/Nginx deployments",
                  side: "left"
                },
                {
                  year: "2023",
                  title: "English Language Study",
                  desc: "Enrolled at Tra Vinh University to study English Language (2023–2025) alongside professional work",
                  side: "right"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={{
                    hidden: { opacity: 0, x: item.side === "left" ? -50 : 50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                >
                  {item.side === "left" ? (
                    <>
                      <div className="flex-1 pr-8 text-right">
                        <motion.div
                          className="rounded-2xl border bg-white p-6 shadow-sm"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                          }}
                        >
                          <h4 className="mb-2 font-bold text-gray-900">{item.year}</h4>
                          <h5 className="mb-2 font-semibold text-red-500">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                      </div>
                      <motion.div
                        className="relative z-10 h-4 w-4 rounded-full bg-red-500"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <div className="flex-1 pl-8"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1 pr-8"></div>
                      <motion.div
                        className="relative z-10 h-4 w-4 rounded-full bg-red-500"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      <div className="flex-1 pl-8 text-left">
                        <motion.div
                          className="rounded-2xl border bg-white p-6 shadow-sm"
                          whileHover={{
                            scale: 1.02,
                            boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                          }}
                        >
                          <h4 className="mb-2 font-bold text-gray-900">{item.year}</h4>
                          <h5 className="mb-2 font-semibold text-red-500">{item.title}</h5>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </motion.div>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
