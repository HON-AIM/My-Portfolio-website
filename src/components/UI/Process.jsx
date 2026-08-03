import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We talk through your goals, current systems, and what's actually costing you time or money.",
  },
  {
    number: "02",
    title: "Proposal & Scope",
    description:
      "You get a clear, fixed-scope proposal — what's being built, the timeline, and the investment. No vague hours.",
  },
  {
    number: "03",
    title: "Build & Check-ins",
    description:
      "I build in focused sprints with regular updates, so you always know exactly where things stand.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We go live together, and I stay on to handle fixes, tweaks, and whatever comes next.",
  },
];

const Process = () => {
  return (
    <section id="process" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">HOW WE'LL WORK TOGETHER</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          A clear process. No surprises.
        </h2>
      </motion.div>

      {/* Desktop: horizontal timeline */}
      <div className="relative mt-20 hidden lg:block">
        <div className="absolute top-[24px] left-0 right-0 h-[2px] bg-signal/30" />
        <div className="grid grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={fadeIn("up", "spring", index * 0.15, 0.75)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="relative"
            >
              <div className="relative z-10 w-4 h-4 rounded-full bg-signal top-[17px] shadow-[0_0_0_4px_rgba(53,224,161,0.15)]" />
              <p className="mt-10 font-display text-ember font-black text-4xl">{step.number}</p>
              <h3 className="mt-3 font-display text-paper font-bold text-lg">{step.title}</h3>
              <p className="mt-2 text-paper-muted text-[15px] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="lg:hidden relative mt-16 pl-10">
        <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-signal/30" />
        {processSteps.map((step, index) => (
          <motion.div
            key={step.number}
            variants={fadeIn("right", "", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="relative mb-12 last:mb-0"
          >
            <div className="absolute left-[-31px] top-1 w-4 h-4 rounded-full bg-signal shadow-[0_0_0_4px_rgba(53,224,161,0.15)]" />
            <p className="font-display text-ember font-black text-3xl">{step.number}</p>
            <h3 className="mt-1 font-display text-paper font-bold text-lg">{step.title}</h3>
            <p className="mt-2 text-paper-muted text-[15px] leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
