"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Zap,
  Brain,
  Globe,
  Layout,
  MapPin,
  CheckCircle2,
  Sparkles,
  Award,
  Layers,
} from "lucide-react";
import { personalData, aboutHighlights } from "@/data/portfolioData";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-purple-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-violet-400" />,
  Zap: <Zap className="w-5 h-5 text-amber-400" />,
  Brain: <Brain className="w-5 h-5 text-pink-400" />,
  Globe: <Globe className="w-5 h-5 text-blue-400" />,
  Layout: <Layout className="w-5 h-5 text-emerald-400" />,
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden bg-[#07070d]/50">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            &quot;{personalData.aboutText}&quot;
          </p>
        </div>

        {/* Balanced Two-Column About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-16">
          {/* LEFT COLUMN: Profile Image Card with Verified Details */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-sm rounded-3xl bg-[#0c0c16]/90 border border-purple-500/25 p-6 backdrop-blur-xl shadow-2xl relative overflow-hidden flex flex-col items-center">
              {/* Subtle top-right glow */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-600/15 rounded-full blur-2xl pointer-events-none" />

              {/* Profile Image with controlled dimensions (260px on mobile, 300px on desktop) */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 aspect-square rounded-2xl overflow-hidden mb-6 flex items-center justify-center">
                <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-2xl pointer-events-none -z-10" />
                <Image
                  src={personalData.profileImage}
                  alt={personalData.name}
                  width={300}
                  height={300}
                  priority
                  className="w-full h-full aspect-square object-contain select-none"
                  style={{ objectFit: "contain", aspectRatio: "1 / 1" }}
                />
              </div>

              {/* Identity & Status */}
              <div className="w-full text-center pb-4 border-b border-zinc-800/80">
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {personalData.name}
                </h3>
                <p className="text-xs font-semibold text-purple-400 mt-0.5">
                  {personalData.role}
                </p>
              </div>

              {/* Quick Details List */}
              <div className="w-full pt-4 space-y-2.5 text-xs text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-medium">Location</span>
                  <span className="font-semibold text-white flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    {personalData.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-medium">Specialization</span>
                  <span className="font-semibold text-white">Next.js &amp; React</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-500 font-medium">Status</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Narrative & Developer Journey */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="space-y-5 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-semibold">
                <Award className="w-4 h-4 text-purple-400" />
                <span>Dedicated Full-Stack Developer</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                Engineering Modern, Responsive &amp; User-Centric Web Solutions
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                I am a passionate Full Stack Developer from Bangladesh with hands-on expertise building production-ready web applications using modern React.js, Next.js App Router, and TypeScript.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                My development philosophy centers on writing clean, modular, and self-documenting code. I care deeply about performance optimization, responsive layouts across all device viewports, and intuitive micro-interactions that make applications a joy to use.
              </p>

              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                Whether creating interactive dashboards, integrating RESTful APIs, or optimizing server components, I am dedicated to continuous learning and staying on the cutting edge of the modern web ecosystem.
              </p>

              {/* Core Strengths Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {[
                  "Clean Architecture & TypeScript Types",
                  "Mobile-First Responsive Precision",
                  "Next.js App Router & SSR Performance",
                  "Seamless REST API Integrations",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 6 Professional Highlight Cards */}
        <div className="pt-8">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-white">What I Bring to Every Project</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">Core development principles that define my work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutHighlights.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl bg-[#0c0c16]/80 border border-purple-500/15 hover:border-purple-500/40 hover:bg-[#121024]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_25px_-5px_rgba(168,85,247,0.2)] group flex flex-col justify-between h-full"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-purple-600/15 border border-purple-500/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {iconMap[item.icon] || <Code2 className="w-5 h-5 text-purple-400" />}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
