"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FolderKanban,
  Send,
  FileText,
  Download,
  MessageCircle,
  Mail,
  ArrowRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { personalData } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex items-center justify-center pt-28 pb-16 sm:pt-32 sm:pb-20 overflow-hidden"
    >
      {/* Subtle background ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[350px] sm:w-[450px] h-[350px] sm:h-[450px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 -z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Two-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT SIDE: Text, Intro, Buttons & Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-medium mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire &amp; Freelance Projects</span>
            </div>

            {/* Hello, I'm */}
            <p className="text-sm sm:text-base font-semibold tracking-wider text-purple-400 uppercase mb-2">
              Hello, I&apos;m
            </p>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
              MOHAMMAD{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-300 to-indigo-400">
                SHEYAM HOSEN
              </span>
            </h1>

            {/* Professional Title & Tagline */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-300 mb-2">
              {personalData.role}
            </h2>
            <p className="text-xs sm:text-sm font-semibold tracking-wide text-purple-300/90 mb-5">
              ✦ {personalData.tagline} ✦
            </p>

            {/* Professional Introduction */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
              &quot;I am a passionate Full Stack Developer focused on building modern, responsive, and user-friendly web applications using modern web technologies. I enjoy creating beautiful interfaces, solving problems, and developing meaningful digital experiences.&quot;
            </p>

            {/* Buttons Group */}
            <div className="w-full flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 shadow-[0_0_20px_rgba(168,85,247,0.35)] transition-all duration-300 active:scale-95 group"
              >
                <FolderKanban className="w-4 h-4 text-purple-200 group-hover:scale-110 transition-transform" />
                <span>View Projects</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-200 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-zinc-200 bg-zinc-900/90 border border-purple-500/25 hover:border-purple-500/60 hover:text-white hover:bg-zinc-800/90 transition-all duration-300 active:scale-95"
              >
                <Send className="w-4 h-4 text-purple-400" />
                <span>Contact Me</span>
              </a>

              {/* View Resume */}
              <a
                href={personalData.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-zinc-200 bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 active:scale-95"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View Resume</span>
              </a>

              {/* Download Resume */}
              <a
                href={personalData.resumePdf}
                download="Mohammad_Sheyam_Hosen_Resume.pdf"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-zinc-200 bg-zinc-900/70 border border-zinc-800 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-300 active:scale-95"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>Download Resume</span>
              </a>

              {/* Chat on WhatsApp */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-900/40 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all duration-300 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-zinc-800/60">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">
                Follow:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/10 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personalData.email}`}
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all duration-200"
                  aria-label="Email Me"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/30 transition-all duration-200"
                  aria-label="WhatsApp Chat"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Fixed Responsive Profile Photo (1:1, Max ~400px, Object-Contain, Preserving Original Frame) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] max-w-[420px] max-h-[420px] aspect-square flex items-center justify-center shrink-0">
              {/* Subtle purple background glow */}
              <div className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

              {/* Original profile image: aspect-square, object-contain, preserves original circular white frame */}
              <Image
                src={personalData.profileImage}
                alt={personalData.name}
                width={400}
                height={400}
                priority
                className="w-full h-full aspect-square object-contain select-none"
                style={{
                  objectFit: "contain",
                  aspectRatio: "1 / 1",
                  maxWidth: "420px",
                  maxHeight: "420px",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
