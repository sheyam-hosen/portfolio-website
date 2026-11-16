"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  MessageCircle,
  ArrowUp,
  Heart,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";
import { personalData } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#040407] border-t border-purple-500/15 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Link href="#home" className="flex items-center gap-3 mb-4 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.35)]">
                <div className="w-full h-full bg-[#09090f] rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-purple-300">
                  MSH
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block">
                  {personalData.name}
                </span>
                <span className="text-xs text-purple-400 font-medium block">
                  {personalData.role}
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-sm mb-6">
              Passionate Full Stack Developer specializing in React.js, Next.js, and TypeScript. Dedicated to engineering high-performance, user-friendly digital experiences.
            </p>

            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 hover:bg-emerald-900/40 transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-zinc-400 hover:text-purple-300 transition-colors inline-block py-0.5"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Channels & Contact Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-4">
              Connect With Me
            </h4>
            <div className="flex flex-wrap gap-3 mb-6">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-950/30 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-[#0077b5] hover:border-[#0077b5]/40 hover:bg-[#0077b5]/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-purple-300 hover:border-purple-500/40 hover:bg-purple-950/30 transition-all"
                aria-label="Email Me"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-950/30 transition-all"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-zinc-400">
              Email:{" "}
              <a
                href={`mailto:${personalData.email}`}
                className="text-purple-300 hover:underline"
              >
                {personalData.email}
              </a>
            </p>
            <p className="text-xs text-zinc-400 mt-1">
              WhatsApp:{" "}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:underline"
              >
                {personalData.whatsappNumber}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            &copy; 2026 {personalData.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-purple-500/30 transition-all"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
