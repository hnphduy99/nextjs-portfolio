"use client";

import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useRef, useState } from "react";
import { GitHubIcon } from "./icons/GithubIcon";

const contactLinks = [
  {
    icon: Phone,
    label: "Phone",
    value: "+84-939-227-225",
    href: "tel:+84939227225"
  },
  {
    icon: Mail,
    label: "Email",
    value: "hnphduy99@gmail.com",
    href: "mailto:hnphduy99@gmail.com"
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/hnphduy99",
    href: "https://github.com/hnphduy99"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Vinh Long City, Vietnam",
    href: null
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-xl border border-border-subtle bg-surface-1 px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 transition-all focus:border-purple-500/50 focus:bg-surface-2 focus:outline-none focus:ring-2 focus:ring-purple-500/20";

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32">
      {/* Bg gradient */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-30"
        style={{
          background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(168,85,247,0.15), transparent)"
        }}
      />

      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-foreground/40 mb-3 text-sm font-medium tracking-widest uppercase">Let&apos;s connect</p>
          <h2 className="font-heading text-4xl font-bold md:text-5xl">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-foreground/55 mx-auto mt-4 max-w-2xl text-base">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you. Send me a message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Form — 3 cols */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="border-border-subtle bg-surface-1 rounded-2xl border p-6 md:p-8">
              <h3 className="font-heading text-foreground mb-6 text-xl font-bold">Send a Message</h3>

              {submitted ? (
                <motion.div
                  className="flex flex-col items-center justify-center py-12 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div
                    className="mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                  >
                    <Send size={24} />
                  </div>
                  <h4 className="font-heading text-foreground mb-2 text-xl font-bold">Message Sent!</h4>
                  <p className="text-foreground/55 text-sm">
                    Thank you for reaching out. I&apos;ll get back to you soon.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-foreground/50 mb-1.5 block text-xs font-medium">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="Nguyen Van A"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-foreground/50 mb-1.5 block text-xs font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="text-foreground/50 mb-1.5 block text-xs font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="text-foreground/50 mb-1.5 block text-xs font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-50"
                    style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                    whileHover={!isSubmitting ? { scale: 1.02, boxShadow: "0 0 30px rgba(168,85,247,0.3)" } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Info — 2 cols */}
          <motion.div
            className="flex flex-col gap-4 lg:col-span-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="font-heading text-foreground text-xl font-bold">Contact Info</h3>
            <div className="space-y-3">
              {contactLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="border-border-subtle bg-surface-1 flex items-center gap-4 rounded-xl border p-4 transition-colors hover:border-purple-500/20 hover:bg-purple-500/5"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.15 }}
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))" }}
                      >
                        {React.createElement(item.icon, {
                          className: "h-4 w-4",
                          style: { color: "#a855f7" }
                        })}
                      </div>
                      <div>
                        <p className="text-foreground/40 text-[10px] font-medium tracking-wider uppercase">
                          {item.label}
                        </p>
                        <p className="text-foreground/80 text-sm font-medium">{item.value}</p>
                      </div>
                    </motion.a>
                  ) : (
                    <div className="border-border-subtle bg-surface-1 flex items-center gap-4 rounded-xl border p-4">
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{ background: "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))" }}
                      >
                        {React.createElement(item.icon, {
                          className: "h-4 w-4",
                          style: { color: "#a855f7" }
                        })}
                      </div>
                      <div>
                        <p className="text-foreground/40 text-[10px] font-medium tracking-wider uppercase">
                          {item.label}
                        </p>
                        <p className="text-foreground/80 text-sm font-medium">{item.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Banner */}
            <motion.div
              className="mt-2 overflow-hidden rounded-2xl p-px"
              style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
            >
              <div className="bg-background/95 rounded-2xl p-5 text-center">
                <div className="mb-2 flex items-center justify-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
                  <span className="text-foreground text-sm font-semibold">Open to Opportunities</span>
                </div>
                <p className="text-foreground/55 text-xs leading-relaxed">
                  Looking for full-time or freelance roles in Fullstack / Frontend development.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="border-border-subtle mt-20 border-t pt-10 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-foreground/35 text-sm">
            © 2026 <span className="gradient-text font-semibold">Phuong Duy</span>. Crafted with ❤️ using Next.js &
            Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
