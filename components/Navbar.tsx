"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileText,
  Download,
  ExternalLink,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { personalData } from "@/data/portfolioData";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeDropdown, setResumeDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060609]/85 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-[0_4px_25px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#home"
          className="group flex items-center gap-3 cursor-pointer"
          onClick={() => {
            setActiveSection("home");
            setMobileMenuOpen(false);
          }}
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-violet-600 to-indigo-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.35)]">
            <div className="w-full h-full bg-[#09090f] rounded-[10px] flex items-center justify-center font-bold text-sm tracking-wider text-purple-300 group-hover:text-white transition-colors">
              MSH
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight text-sm sm:text-base text-zinc-100 group-hover:text-purple-400 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-zinc-400 group-hover:text-zinc-300">
              {personalData.role}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-purple-500/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/30 to-violet-600/30 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Desktop Resume Dropdown / Action */}
        <div className="hidden md:flex items-center gap-3 relative">
          <div className="relative">
            <button
              onClick={() => setResumeDropdown(!resumeDropdown)}
              onBlur={() => setTimeout(() => setResumeDropdown(false), 200)}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-200 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] active:scale-95"
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  resumeDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {resumeDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-52 rounded-2xl bg-[#0f0f18] border border-purple-500/25 shadow-2xl p-2 z-50 backdrop-blur-xl"
                >
                  <a
                    href={personalData.resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-zinc-200 hover:text-white hover:bg-purple-600/20 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <div className="flex flex-col">
                      <span className="font-semibold">View Resume</span>
                      <span className="text-[10px] text-zinc-400">Open PDF in new tab</span>
                    </div>
                  </a>
                  <a
                    href={personalData.resumePdf}
                    download="Mohammad_Sheyam_Hosen_Resume.pdf"
                    className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs text-zinc-200 hover:text-white hover:bg-purple-600/20 transition-colors group"
                  >
                    <Download className="w-4 h-4 text-purple-400 group-hover:text-purple-300" />
                    <div className="flex flex-col">
                      <span className="font-semibold">Download Resume</span>
                      <span className="text-[10px] text-zinc-400">Save to your device</span>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-zinc-900/80 border border-purple-500/20 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[#0a0a10]/95 backdrop-blur-2xl border-b border-purple-500/20 px-5 pt-3 pb-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setActiveSection(item.href.substring(1));
                      setMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-purple-600/20 text-purple-300 border border-purple-500/30"
                        : "text-zinc-300 hover:bg-zinc-800/50 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-zinc-800/80 flex flex-col gap-2">
                <a
                  href={personalData.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-violet-600 shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Resume (PDF)</span>
                </a>
                <a
                  href={personalData.resumePdf}
                  download="Mohammad_Sheyam_Hosen_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-zinc-300 bg-zinc-900 border border-purple-500/20 hover:text-white"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

