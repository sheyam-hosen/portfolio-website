"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/Icons";
import { personalData } from "@/data/portfolioData";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    // Basic frontend checks
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields before submitting.");
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setStatusMessage(data.message || "Message delivered successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus("error");
      setStatusMessage(
        "Network connection error. You can also contact me directly via WhatsApp or email."
      );
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 left-10 w-[350px] h-[350px] bg-violet-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/25 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contact <span className="text-gradient-purple">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-violet-600 mx-auto rounded-full mb-6" />
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Have a project in mind, seeking a dedicated Full Stack Developer, or looking to discuss freelance opportunities? Reach out anytime.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-5"
          >
            {/* Profile Overview Card */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0b0b14]/90 border border-purple-500/20 backdrop-blur-xl shadow-xl">
              <h3 className="text-xl font-bold text-white mb-1">
                {personalData.name}
              </h3>
              <p className="text-purple-400 text-sm font-medium mb-4">
                {personalData.role} • {personalData.specialization}
              </p>
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
                <MapPin className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{personalData.location} (GMT+6)</span>
              </div>

              {/* Quick WhatsApp & Call CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-800">
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-emerald-300 bg-emerald-950/50 border border-emerald-500/30 hover:border-emerald-500/70 hover:bg-emerald-900/40 transition-all shadow-md active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a
                  href={personalData.phoneUrl}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-medium text-xs sm:text-sm text-zinc-300 bg-zinc-900 border border-zinc-800 hover:text-white hover:border-zinc-700 transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4 text-zinc-400" />
                  <span>Call Me</span>
                </a>
              </div>
            </div>

            {/* Email Card (Primary) */}
            <a
              href={`mailto:${personalData.email}`}
              className="p-5 rounded-2xl bg-[#0e0e18]/80 border border-zinc-800 hover:border-purple-500/40 hover:bg-[#131124] transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 group-hover:text-purple-300 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-zinc-400 block font-medium">Primary Email</span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors truncate block">
                  {personalData.email}
                </span>
              </div>
            </a>

            {/* Email Card (Secondary) */}
            <a
              href={`mailto:${personalData.secondaryEmail}`}
              className="p-5 rounded-2xl bg-[#0e0e18]/80 border border-zinc-800 hover:border-purple-500/40 hover:bg-[#131124] transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-110 group-hover:text-violet-300 transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <span className="text-xs text-zinc-400 block font-medium">Alternative Email</span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-purple-300 transition-colors truncate block">
                  {personalData.secondaryEmail}
                </span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#0e0e18]/80 border border-zinc-800 hover:border-emerald-500/40 hover:bg-[#0c1f15]/80 transition-all duration-300 flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-all">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-zinc-400 block font-medium">WhatsApp Direct</span>
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-emerald-300 transition-colors">
                  {personalData.whatsappNumber}
                </span>
              </div>
            </a>

            {/* Social Channels Row */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0e0e18]/80 border border-zinc-800 hover:border-[#0077b5]/40 hover:bg-[#081726] transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#0077b5]/10 border border-[#0077b5]/20 flex items-center justify-center text-[#0077b5] group-hover:scale-110 transition-all">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block">LinkedIn</span>
                  <span className="text-xs font-bold text-zinc-200 group-hover:text-white">
                    sheyam-hosen
                  </span>
                </div>
              </a>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-[#0e0e18]/80 border border-zinc-800 hover:border-purple-500/40 hover:bg-purple-950/20 transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white group-hover:scale-110 transition-all">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-400 block">GitHub</span>
                  <span className="text-xs font-bold text-zinc-200 group-hover:text-purple-300">
                    sheyam-hosen
                  </span>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Verified Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-[#0b0b14]/90 border border-purple-500/20 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6">
              Complete the form below to initiate communication. Submissions are verified through the portfolio backend API.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Full Name <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                    Email Address <span className="text-purple-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Subject <span className="text-purple-400">*</span>
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Project Inquiry / Job Opportunity"
                  className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 mb-1.5">
                  Message <span className="text-purple-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and goals..."
                  className="w-full px-4 py-3 rounded-xl bg-[#12121e] border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                />
              </div>

              {/* Status Notifications */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 text-red-300 text-xs sm:text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_25px_rgba(168,85,247,0.35)] hover:shadow-[0_0_35px_rgba(168,85,247,0.55)] transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-purple-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
