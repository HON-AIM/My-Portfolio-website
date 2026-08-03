import React from 'react';
import { motion } from 'framer-motion';
import { CodeXml, Users, Globe, ShieldCheck } from 'lucide-react';
import { fadeIn, textVariant } from '../../utils/motion';
// PHOTO: replace src/assets/profile.jpg with your own headshot
// (recommended: 800x800px, square, good lighting, plain/blurred background).
import profilePic from '../../assets/profile.jpg';

const aboutBio =
  "I'm Israel Miracle — 5+ years of freelance experience, working directly with clients rather than through an agency layer. Think of me as one person who can own your entire digital funnel end-to-end: web design and development, custom SaaS builds, funnels across GoHighLevel, Kajabi, Systeme.io, Webflow, WordPress, and Shopify, plus email marketing and automation. I use AI-assisted agentic/vibe coding workflows to ship faster without cutting quality.";

const badges = [
  { icon: CodeXml, title: "5+ Years Experience" },
  { icon: Users, title: "30+ Clients Served" },
  { icon: Globe, title: "Remote-first, Global Clients" },
  { icon: ShieldCheck, title: "GoHighLevel Certified" },
];

const About = () => {
  return (
    <section id="about" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div variants={textVariant(0.1)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
        <p className="section-heading-eyebrow">WHO I AM</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          Not just a developer — a full-stack digital partner.
        </h2>
      </motion.div>

      <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
        {/* Photo — left on desktop, stacked on mobile (mirrors Hero) */}
        <motion.div
          variants={fadeIn("right", "", 0.2, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-full max-w-[420px] flex-shrink-0"
        >
          <div className="rounded-2xl p-1.5 ember-gradient shadow-card">
            <img
              src={profilePic}
              alt="Israel Miracle, full-stack developer and digital systems builder"
              width={420}
              height={420}
              className="w-full h-auto aspect-square object-cover rounded-2xl border-4 border-ink"
            />
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={fadeIn("left", "", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex-1"
        >
          <p className="text-paper-muted text-[17px] leading-[30px]">
            {aboutBio}
          </p>
        </motion.div>
      </div>

      {/* Credibility badges */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {badges.map(({ icon: Icon, title }) => (
          <motion.div
            key={title}
            variants={fadeIn("up", "spring", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-surface border border-surface-border rounded-2xl p-5 hover:border-ember transition-colors duration-300"
          >
            <div className="w-fit p-2.5 rounded-xl bg-ink-soft">
              <Icon size={22} className="text-signal" />
            </div>
            <p className="mt-4 text-paper font-medium text-[15px] leading-snug">{title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
