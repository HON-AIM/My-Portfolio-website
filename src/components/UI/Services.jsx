import React from 'react';
import { motion } from 'framer-motion';
import {
  CodeXml,
  Palette,
  LayoutGrid,
  Workflow,
  GitBranch,
  Mail,
  ShoppingCart,
  Sparkles,
  Handshake,
} from 'lucide-react';
import { fadeIn, textVariant } from '../../utils/motion';

const services = [
  {
    title: "Web Development",
    description:
      "Fast, custom-built websites and web apps using React, Next.js, and Node.js — built to perform, not just look good.",
    icon: CodeXml,
  },
  {
    title: "Web Design",
    description:
      "Clean, conversion-focused design across Webflow, WordPress, and custom code — your site should sell while you sleep.",
    icon: Palette,
  },
  {
    title: "SaaS Building",
    description:
      "Full-stack software platforms built with React, Node.js, and PostgreSQL — designed to scale from MVP to production.",
    icon: LayoutGrid,
  },
  {
    title: "Funnel Building",
    description:
      "High-converting sales and lead funnels built across GoHighLevel, Kajabi, Systeme.io, and ClickFunnels-style platforms.",
    icon: Workflow,
  },
  {
    title: "GoHighLevel Systems",
    description:
      "Custom automation, pipelines, and workflow builds inside GHL that turn your CRM into a lead-converting machine.",
    icon: GitBranch,
  },
  {
    title: "Email Marketing & Automation",
    description:
      "Sequences, nurture flows, and campaigns that turn cold leads into paying customers — not just newsletters nobody opens.",
    icon: Mail,
  },
  {
    title: "E-Commerce Builds",
    description:
      "Fast, secure storefronts on Shopify, WordPress, or custom code, with real payment integrations and dashboards that are easy to manage.",
    icon: ShoppingCart,
  },
  {
    title: "Agentic & Vibe Coding",
    description:
      "AI-assisted development workflows that let me ship production-ready features faster, without sacrificing code quality or structure.",
    icon: Sparkles,
  },
  {
    title: "Ongoing Technical Partnership",
    description:
      "Not a one-off build — I stay on as your technical resource for updates, fixes, and new features as you grow.",
    icon: Handshake,
  },
];

const platforms = [
  "GoHighLevel",
  "Kajabi",
  "Systeme.io",
  "Webflow",
  "WordPress",
  "Shopify",
  "Next.js",
  "Node.js",
];

const ServiceCard = ({ index, title, description, icon: Icon }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    whileHover={{ y: -4 }}
    className="h-full"
  >
    <div className="h-full bg-surface border border-surface-border rounded-2xl p-8 hover:border-ember hover:shadow-glow transition-colors duration-300">
      <div className="w-12 h-12 rounded-full bg-ember/15 flex items-center justify-center">
        <Icon size={24} className="text-ember" />
      </div>
      <h3 className="mt-5 font-display text-paper font-bold text-[20px]">{title}</h3>
      <p className="mt-3 text-paper-muted text-[15px] leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <section id="services" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">WHAT I DO</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          One partner for your entire digital funnel.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-6 text-paper-muted text-[17px] leading-[30px] max-w-2xl"
      >
        From the website that brings people in, to the funnel and emails that convert them, to the software that runs your business behind the scenes — I build it all, so nothing gets lost in translation between five different freelancers.
      </motion.p>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

      <div className="mt-14 flex flex-wrap justify-center gap-3">
        {platforms.map((platform) => (
          <span
            key={platform}
            className="rounded-full border border-surface-border px-4 py-1.5 text-paper-muted text-sm"
          >
            {platform}
          </span>
        ))}
      </div>

      <p className="mt-8 text-center text-paper-muted">
        Need something not listed here?{" "}
        <a
          href="#contact"
          className="text-ember hover:text-ember-hover font-medium underline underline-offset-4 transition-colors duration-300"
        >
          Let's talk about it
        </a>
      </p>
    </section>
  );
};

export default Services;
