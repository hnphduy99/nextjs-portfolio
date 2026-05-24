"use client";

import React from "react";

import { motion, useInView } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import { GitHubIcon } from "./icons/GithubIcon";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: ""
    });
    setIsSubmitting(false);

    // Show success message (in real app, you'd handle this properly)
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-gray-50 py-20" ref={ref}>
      <div className="mx-auto max-w-7xl px-8 md:px-16">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-6 text-5xl font-bold text-gray-900 md:text-6xl">Let&apos;s Work Together</h2>
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-600">
            Ready to bring your creative vision to life? I&apos;d love to hear about your project and discuss how we can
            collaborate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            className="rounded-3xl bg-white p-8 shadow-sm"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="mb-8 text-3xl font-bold text-gray-900">Send Me a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                className="grid grid-cols-1 gap-6 md:grid-cols-2"
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
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-red-500"
                    placeholder="Enter your name"
                  />
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                >
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 transition-colors focus:border-transparent focus:ring-2 focus:ring-red-500"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </motion.div>

              {/* ... existing form fields with motion wrappers ... */}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 px-6 py-4 font-semibold text-white transition-colors hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.8 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h3 className="mb-6 text-3xl font-bold text-gray-900">Contact Info</h3>
              <div className="space-y-4">
                {[
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
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-50">
                      {React.createElement(contact.icon, { className: "w-5 h-5 text-red-500" })}
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">{contact.label}</p>
                      <p className="font-medium text-gray-900">{contact.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h4 className="mb-2 font-bold text-gray-900">Location</h4>
              <p className="text-gray-600">Long Chau Ward, Vinh Long City, Vietnam</p>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="mt-20 border-t border-gray-200 pt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <p className="mb-4 text-gray-600">
            Thank you for considering me for your creative project. I look forward to hearing from you!
          </p>
          <motion.div
            className="flex justify-center gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 1.2
                }
              }
            }}
          >
            {[
              { icon: Phone, href: "tel:+84939227225" },
              { icon: Mail, href: "mailto:hnpdhuy99@gmail.com" },
              { icon: GitHubIcon, href: "https://github.com/hnphduy99" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                className="text-red-500 transition-colors hover:text-red-600"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                {React.createElement(item.icon, { className: "w-6 h-6" })}
              </motion.a>
            ))}
          </motion.div>
          <p className="mt-6 text-sm text-gray-500">© 2026 Duy. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
}
