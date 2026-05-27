"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GitHubIcon } from "./icons/GithubIcon";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string | null;
  repoUrl?: string | null;
}

export function ProjectCard({ title, description, tags, demoUrl, repoUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group h-full"
    >
      <div
        className="border-border-subtle bg-surface-1 hover:bg-surface-2 relative flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:border-purple-500/30"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gradient glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: "radial-gradient(circle at top left, rgba(168,85,247,0.06), transparent 60%)" }}
        />

        <div className="relative flex flex-1 flex-col p-6">
          {/* Header */}
          <div className="mb-4 flex items-start justify-between gap-3">
            <h3 className="font-heading gradient-text text-xl leading-snug font-bold">{title}</h3>
            {/* Status dot */}
            <div
              className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-300 ${
                isHovered ? "bg-green-400" : "bg-white/10"
              }`}
            />
          </div>

          {/* Description */}
          <p className="text-foreground/55 mb-4 flex-1 text-sm leading-relaxed">{description}</p>

          {/* Tags */}
          <div className="mb-5 flex flex-wrap gap-1.5">
            {tags.map((tag, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="text-foreground/50 hover:text-foreground/70 border-border-subtle bg-surface-2 border text-[10px] font-medium hover:border-purple-500/20 hover:bg-purple-500/5"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          {(repoUrl || demoUrl) && (
            <div className="border-border-subtle flex items-center gap-2 border-t pt-4">
              {repoUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-foreground/50 hover:text-foreground hover:bg-surface-2 h-8 px-3 text-xs"
                  asChild
                >
                  <Link href={repoUrl} target="_blank" rel="noopener noreferrer">
                    <GitHubIcon className="mr-1.5 h-3.5 w-3.5" />
                    Source
                  </Link>
                </Button>
              )}
              {demoUrl && (
                <Button
                  size="sm"
                  className="h-8 px-3 text-xs text-white"
                  style={{ background: "linear-gradient(135deg, #a855f7, #ec4899)" }}
                  asChild
                >
                  <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
