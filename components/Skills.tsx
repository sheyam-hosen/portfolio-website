"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Sparkles,
  Server,
  Wrench,
  Check,
} from "lucide-react";
import { skillCategories } from "@/data/portfolioData";

// Clean custom SVG icons for tech logos to ensure crisp, authentic rendering
const techLogos: Record<string, React.ReactNode> = {
  "React.js": (
    <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 115.3 100" fill="currentColor">
      <path d="M57.65 65.2c8.1 0 14.7-6.6 14.7-14.7s-6.6-14.7-14.7-14.7-14.7 6.6-14.7 14.7 6.6 14.7 14.7 14.7zM97.9 33.9c-2.4-5.3-6.6-8.7-12-9.6 1.7-4.6 2.3-9.7 1.5-14.8-1.5-9.8-9.7-17-19.5-17-2.6 0-5.2.5-7.7 1.6-4.5-5.3-10.7-8.6-17.6-8.6-10.7 0-19.8 7.7-21.8 18.1-4.8.4-9.3 2.5-12.7 6-4.5 4.6-6.6 11-5.7 17.3 1.2 8.7 7.5 15.6 16.1 17.6 1 5.4 4 10.3 8.3 13.8-3.4 3.7-5.3 8.6-5.2 13.7.2 9.9 8.2 18 18.1 18.2 4.9.1 9.6-1.7 13.3-4.9 4.1 3.5 9.4 5.4 14.8 5.4 12.3 0 22.3-10 22.3-22.3 0-2.8-.5-5.5-1.5-8 5.7-1.8 10.2-6.2 12.3-12 2.7-7.2.9-15.3-4.5-20.9z" fillOpacity="0" />
      <ellipse cx="57.65" cy="50.5" rx="16.5" ry="42.5" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(30 57.65 50.5)" />
      <ellipse cx="57.65" cy="50.5" rx="16.5" ry="42.5" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(90 57.65 50.5)" />
      <ellipse cx="57.65" cy="50.5" rx="16.5" ry="42.5" fill="none" stroke="currentColor" strokeWidth="4.5" transform="rotate(150 57.65 50.5)" />
      <circle cx="57.65" cy="50.5" r="7.5" fill="currentColor" />
    </svg>
  ),
  "Next.js": (
    <svg className="w-8 h-8 text-white" viewBox="0 0 180 180" fill="none">
      <circle cx="90" cy="90" r="85" fill="#09090f" stroke="rgba(168,85,247,0.4)" strokeWidth="4" />
      <path d="M127 130L71 58H58V122H70V77L119 138C122 135 125 133 127 130Z" fill="url(#nextG1)" />
      <path d="M110 58H122V104L110 88V58Z" fill="url(#nextG2)" />
      <defs>
        <linearGradient id="nextG1" x1="68" y1="62" x2="120" y2="132" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
        <linearGradient id="nextG2" x1="116" y1="58" x2="116" y2="104" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="transparent" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  ),
  TypeScript: (
    <div className="w-8 h-8 rounded-lg bg-[#3178C6] flex items-center justify-center font-bold text-white text-xs shadow-md">
      TS
    </div>
  ),
  "JavaScript (ES6+)": (
    <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] flex items-center justify-center font-bold text-black text-xs shadow-md">
      JS
    </div>
  ),
  JavaScript: (
    <div className="w-8 h-8 rounded-lg bg-[#F7DF1E] flex items-center justify-center font-bold text-black text-xs shadow-md">
      JS
    </div>
  ),
  "Responsive Design": (
    <svg className="w-8 h-8 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="12" x="2" y="3" rx="2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
      <rect width="6" height="8" x="16" y="13" rx="1" fill="#09090f" />
    </svg>
  ),
  "Tailwind CSS": (
    <svg className="w-8 h-8 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
    </svg>
  ),
  HTML5: (
    <div className="w-8 h-8 rounded-lg bg-[#E34F26] flex items-center justify-center font-bold text-white text-xs shadow-md">
      HTML
    </div>
  ),
  CSS3: (
    <div className="w-8 h-8 rounded-lg bg-[#1572B6] flex items-center justify-center font-bold text-white text-xs shadow-md">
      CSS
    </div>
  ),
  Vite: (
    <svg className="w-8 h-8 text-[#BD34FE]" viewBox="0 0 32 32" fill="currentColor">
      <path d="M29.6 4.3L16.8 28.5c-.3.6-1.2.6-1.5 0L2.4 4.3c-.4-.7.1-1.5.9-1.5h25.4c.8 0 1.3.8.9 1.5z" />
      <path d="M19.4 3.5l-6.8 12.8 3.8.8-3.4 6.8 9.5-12.8-4.2-.8 3.1-6.8z" fill="#FFD62E" />
    </svg>
  ),
  "Node.js": (
    <svg className="w-8 h-8 text-[#5FA04E]" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 2.3l12.1 7v14l-12.1 7-12.1-7v-14l12.1-7z" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M16 8.5v15M16 16l6-3.5M16 16l-6-3.5" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  ),
  "Express.js": (
    <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center font-mono font-bold text-white text-[10px]">
      ex
    </div>
  ),
  "REST APIs": (
    <div className="w-8 h-8 rounded-lg bg-purple-900/60 border border-purple-500/40 flex items-center justify-center font-mono font-bold text-purple-300 text-[10px]">
      API
    </div>
  ),
  "JSON Data Handling": (
    <div className="w-8 h-8 rounded-lg bg-amber-900/40 border border-amber-500/40 flex items-center justify-center font-mono font-bold text-amber-300 text-[10px]">
      {`{ }`}
    </div>
  ),
  Git: (
    <svg className="w-8 h-8 text-[#F05032]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.9 4.5l3.2 3.2c.7-.2 1.5 0 2 .5.6.6.7 1.4.5 2.1l3.1 3.1c.7-.2 1.5 0 2.1.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.7-1.4-.5-2.1l-2.9-2.9v5.2c.2.2.3.5.3.8 0 1.2-1 2.2-2.2 2.2s-2.2-1-2.2-2.2c0-.8.4-1.5 1-1.9v-5.4c-.6-.4-1-1.1-1-1.9 0-.4.1-.7.3-1L6.4 7 2.4 11c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.6-8.6c.6-.6.6-1.5 0-2.1z" />
    </svg>
  ),
  GitHub: (
    <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  ),
  "VS Code": (
    <svg className="w-8 h-8 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.27a1 1 0 0 0 0 1.46l3.81 3.27-3.81 3.27a1 1 0 0 0 0 1.46l1.322 1.21a.999.999 0 0 0 1.276.058l4.12-3.128 9.46 8.63a1.49 1.49 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 19.985V4.015a1.5 1.5 0 0 0-.85-1.428z" />
    </svg>
  ),
  npm: (
    <div className="w-8 h-8 rounded-lg bg-[#CB3837] flex items-center justify-center font-bold text-white text-xs shadow-md">
      npm
    </div>
  ),
};

const categoryIcon: Record<string, React.ReactNode> = {
  "Frontend Development": <Code className="w-5 h-5 text-purple-400" />,
  "Backend Development": <Server className="w-5 h-5 text-violet-400" />,
  "Development Tools": <Wrench className="w-5 h-5 text-indigo-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-[#07070d]/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills &amp; <span className="text-gradient-purple">Technologies</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            A comprehensive, verified developer toolkit spanning modern reactive frontend engineering, scalable backend architecture, and agile developer workflows.
          </p>
        </div>

        {/* Categories Stack */}
        <div className="space-y-12">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-[#0b0b14]/80 border border-purple-500/15 backdrop-blur-xl shadow-xl"
            >
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8 pb-4 border-b border-zinc-800/80">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-950/50 border border-purple-500/30 flex items-center justify-center">
                    {categoryIcon[cat.title] || <Code className="w-5 h-5 text-purple-400" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-zinc-400">{cat.description}</p>
                  </div>
                </div>
                <div className="self-start sm:self-auto px-3 py-1 rounded-full bg-purple-950/30 border border-purple-500/20 text-purple-300 text-xs font-medium">
                  {cat.skills.length} Technologies
                </div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0f0f1c]/70 border border-zinc-800/80 hover:border-purple-500/40 hover:bg-[#151326]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_20px_-5px_rgba(168,85,247,0.25)] group flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="transition-transform duration-300 group-hover:scale-110">
                        {techLogos[skill.name] || (
                          <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center font-bold text-purple-300 text-xs">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-purple-950/50 border border-purple-500/20 text-purple-300">
                        {skill.level}
                      </span>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-zinc-100 group-hover:text-purple-300 transition-colors">
                        {skill.name}
                      </h4>
                      {skill.highlight && (
                        <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                          {skill.highlight}
                        </p>
                      )}
                      <div className="flex items-center gap-1.5 mt-2 text-[10px] text-zinc-500 font-medium">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Verified In Projects</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

