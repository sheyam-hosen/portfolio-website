"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Sparkles,
  ArrowUpRight,
  Filter,
} from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { featuredProjects } from "@/data/portfolioData";

const filterOptions = ["All", "Next.js", "React.js", "TypeScript", "HTML & CSS"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? featuredProjects
      : featuredProjects.filter((p) => {
          if (activeFilter === "HTML & CSS") {
            return p.tags.some((t) => t.includes("HTML") || t.includes("CSS"));
          }
          if (activeFilter === "React.js") {
            return p.tags.some((t) => t.includes("React"));
          }
          return p.tags.some((t) =>
            t.toLowerCase().includes(activeFilter.toLowerCase())
          );
        });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Real Repositories &amp; Deployments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Featured <span className="text-gradient-purple">Projects</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Real-world applications built with React, Next.js, TypeScript, and modern web tooling. Each project is backed by active GitHub repositories and genuine deployments.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((filter) => {
            const isSelected = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? "text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_15px_rgba(168,85,247,0.4)]"
                    : "text-zinc-400 bg-zinc-900/80 border border-zinc-800 hover:text-zinc-200 hover:border-purple-500/30"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Projects Grid: 3 columns on desktop, 2 columns on tablet, 1 column on mobile */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-3xl bg-[#0b0b14]/90 border border-purple-500/20 overflow-hidden shadow-2xl backdrop-blur-xl hover:border-purple-500/50 hover:shadow-[0_15px_35px_-10px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col group"
              >
                {/* Image Preview Container */}
                <div
                  className="relative w-full h-48 sm:h-52 lg:h-56 overflow-hidden bg-zinc-950"
                  style={{ position: "relative" }}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b14] via-[#0b0b14]/20 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-semibold bg-[#0b0b14]/85 backdrop-blur-md border border-purple-500/40 text-purple-300 shadow-md">
                      {project.badge || project.tags[0]}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-mono text-purple-400 truncate max-w-[170px]">
                        {project.repoName}
                      </span>
                      <span className="text-[11px] text-zinc-500 font-medium whitespace-nowrap">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors flex items-center justify-between">
                      <span className="line-clamp-1">{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                    </h3>

                    <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Features List */}
                    {project.features && project.features.length > 0 && (
                      <ul className="space-y-1 mb-4 text-[11px] sm:text-xs text-zinc-400">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-1.5">
                            <span className="text-purple-400 font-bold shrink-0">✓</span>
                            <span className="line-clamp-1">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md text-[10px] sm:text-[11px] font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:border-purple-500/20 group-hover:text-purple-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Links */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-4 border-t border-zinc-800/80">
                    {/* GitHub Repo Button */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-zinc-200 bg-zinc-900 border border-zinc-800 hover:border-purple-500/40 hover:text-white hover:bg-zinc-800/80 transition-all duration-200 active:scale-95"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-purple-400" />
                      <span>GitHub</span>
                    </a>

                    {/* Live Demo Button - Only when real deployment exists */}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all duration-200 active:scale-95"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Profile Banner Link */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/30 via-zinc-900/60 to-violet-950/30 border border-purple-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-lg font-bold text-white mb-1">
              Want to explore all public repositories and commit logs?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400">
              Visit my active GitHub profile for full open-source repositories and code history.
            </p>
          </div>
          <a
            href="https://github.com/sheyam-hosen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-zinc-900 border border-purple-500/30 hover:border-purple-500 hover:bg-purple-950/40 transition-all shadow-lg active:scale-95 whitespace-nowrap"
          >
            <GithubIcon className="w-4 h-4 text-purple-400" />
            <span>Visit @sheyam-hosen</span>
          </a>
        </div>
      </div>
    </section>
  );
}
