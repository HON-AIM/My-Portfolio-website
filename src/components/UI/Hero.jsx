import React from 'react';
import { motion } from 'framer-motion';

// PHOTO: replace src/assets/profile.jpg with your own headshot
// (recommended: 800x800px, square, good lighting, plain/blurred background).
import profilePic from '../../assets/profile.jpg';

const heroStats = [
  { value: "5+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "6+", label: "Platforms Mastered" },
  { value: "GoHighLevel", label: "Certified Expert" },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden flex flex-col">
      {/* Animated mesh background — slow ambient drift, not distracting */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 bg-mesh"
        style={{ scale: 1.15, willChange: "transform" }}
        animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-28 flex flex-col lg:flex-row items-center lg:justify-between gap-12">
        {/* Profile photo — stacked above headline on mobile, right of headline on desktop */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="order-first lg:order-last flex-shrink-0"
        >
          <div className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full p-1.5 ember-gradient shadow-glow">
            <img
              src={profilePic}
              alt="Israel Miracle, full-stack developer and digital systems builder"
              width={320}
              height={320}
              className="w-full h-full object-cover rounded-full border-4 border-ink"
            />
          </div>
        </motion.div>

        <div className="flex-1 text-center lg:text-left">
          <p className="section-heading-eyebrow">
            Web · Funnels · SaaS · Email · Automation
          </p>

          <h1 className="mt-6 font-display text-white font-black text-[36px] sm:text-[52px] lg:text-[64px] leading-[1.08] tracking-tight">
            I build the{" "}
            <span className="relative inline-block text-ember">
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-1 h-[0.45em] bg-ember/25 rounded-sm -z-10"
              />
              <span className="relative z-10">websites, funnels, and systems</span>
            </span>{" "}
            your business runs on.
          </h1>

          <p className="mt-6 text-paper-muted text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
            I'm Israel Miracle — a freelance full-stack developer and digital systems builder. From high-converting funnels in GoHighLevel, Kajabi, or Systeme.io, to custom SaaS platforms, e-commerce stores, and the email sequences that turn traffic into revenue — I build it, connect it, and make it work together.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a
              href="#contact"
              className="w-full sm:w-auto bg-ember hover:bg-ember-hover text-ink font-semibold text-center rounded-lg px-8 py-4 shadow-glow transition-colors duration-300"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="w-full sm:w-auto border border-surface-border hover:border-ember text-paper hover:text-ember font-semibold text-center rounded-lg px-8 py-4 transition-colors duration-300"
            >
              View My Work
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 xs:grid-cols-4 gap-x-6 gap-y-8">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="font-display text-paper font-bold text-xl">{stat.value}</p>
                <p className="mt-1 text-paper-faint text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to About">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-signal/60 flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-3 h-3 rounded-full bg-signal mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
