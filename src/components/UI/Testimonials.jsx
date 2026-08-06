import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { TestimonialCard } from './TestimonialCards';

// TESTIMONIALS: replace with real client quotes and names. The last three
// entries below use sample names as placeholders — swap them for real clients
// before launching.
const testimonials = [
  {
    id: 1,
    testimonial:
      "Israel rebuilt our entire lead pipeline in GoHighLevel and it just works now. No more chasing leads manually.",
    author: "V. Miguel · Operations Manager, Insurance Company",
  },
  {
    id: 2,
    testimonial:
      "He took a process we'd been doing by hand for years and turned it into a system we actually trust. Worth every dollar.",
    author: "Michael Toyosi · Founder, Iyosi Foods",
  },
  {
    id: 3,
    testimonial:
      "The funnel and email sequence paid for itself within the first launch. We finally have a repeatable way to sell.",
    author: "Robin Carries · Course Creator, RC Academy",
  },
];

const ShuffleCards = () => {
  const [positions, setPositions] = useState(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    newPositions.unshift(newPositions.pop());
    setPositions(newPositions);
  };

  return (
    <div className="grid place-content-center overflow-hidden px-8 py-16 text-paper">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            {...testimonial}
            handleShuffle={handleShuffle}
            position={positions[index]}
          />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">WHAT CLIENTS SAY</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          Don't just take my word for it.
        </h2>
      </motion.div>

      <ShuffleCards />

      {/*
        CLIENT LOGOS — TODO: if you have real logos of companies you've worked
        with, add them here as a grayscale horizontal row. Don't use fake logos.
        <section className="mt-14 flex flex-wrap items-center justify-center gap-10">
          <img src="/logos/client.svg" alt="Client logo" className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition" />
        </section>
      */}
    </section>
  );
};

export default Testimonials;
