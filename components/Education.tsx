"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  MapPin,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { educationHistory } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative overflow-hidden bg-[#07070d]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Education &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400">Qualifications</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Verified academic milestones and continuous technical self-education in modern full-stack web software engineering.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Glowing Timeline Line */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-purple-500 via-violet-500 to-transparent" />

          {educationHistory.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 pl-14 sm:pl-0"
            >
              {/* Timeline Center Node */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d0d18] border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)] flex items-center justify-center z-10">
                <GraduationCap className="w-5 h-5 text-purple-300" />
              </div>

              {/* Education Card */}
              <div className="w-full sm:w-[calc(50%-36px)] sm:ml-auto p-6 sm:p-7 rounded-3xl bg-[#0c0c16]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl hover:border-purple-500/40 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.25)] transition-all duration-300 group">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-950/50 border border-purple-500/30 text-purple-300">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Passing Year: {edu.year}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-950/40 border border-emerald-500/30 text-emerald-400">
                    <Award className="w-3 h-3" />
                    <span>{edu.result}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
                  {edu.degree}
                </h3>

                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-purple-400 mb-3">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    {edu.institution}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {edu.description}
                </p>

                {edu.verifiedBadges && edu.verifiedBadges.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/80">
                    {edu.verifiedBadges.map((badge, bIdx) => (
                      <span
                        key={bIdx}
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-purple-950/40 border border-purple-500/25 text-purple-300"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
