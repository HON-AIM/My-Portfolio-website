import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { TestimonialCard } from './TestimonialCards';

// TESTIMONIALS: real client quotes. Add more entries here and they'll each
// take a turn as the front card in the shuffle stack. Swap any placeholder
// names for real clients before launching.
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
  {
    id: 4,
    testimonial:
      "Our booking system went from a messy spreadsheet to a smooth online flow. Clients book themselves and reminders go out automatically.",
    author: "Amara Nwosu · Founder, Lagos Fit Studio",
  },
  {
    id: 5,
    testimonial:
      "Israel cleaned up our CRM and automated the follow-ups. We now recover deals we used to lose to silence.",
    author: "James Carter · Sales Director, Summit Realty",
  },
  {
    id: 6,
    testimonial:
      "The email campaigns he set up bring in consistent revenue every month. Set-and-forget marketing that actually works.",
    author: "Hannah Peters · E-Commerce Manager, Bloom & Co.",
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
    <div className="grid place-content-center overflow-hidden px-4 sm:px-8 py-16 text-paper">
      <div className="relative -ml-[min(100px,13vw)] h-[min(450px,75vh)] w-[min(350px,80vw)] md:-ml-[175px]">
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
