import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';

// TESTIMONIALS: replace with real client quotes and names. If you don't have
// real testimonials yet, a LinkedIn recommendation screenshot or a short
// Loom/video testimonial embed can go here instead — do not fabricate quotes
// with real client names attached. The last three entries below use sample
// names as placeholders — swap them for real clients before launching.
const testimonials = [
  {
    quote:
      "Israel rebuilt our entire lead pipeline in GoHighLevel and it just works now. No more chasing leads manually.",
    name: "V. Miguel",
    role: "Operations Manager",
    company: "Insurance Company",
    avatarInitials: "VM",
  },
  {
    quote:
      "He took a process we'd been doing by hand for years and turned it into a system we actually trust. Worth every dollar.",
    name: "Michael Toyosi",
    role: "Founder",
    company: "Iyosi Foods",
    avatarInitials: "MT",
  },
  {
    quote:
      "The funnel and email sequence paid for itself within the first launch. We finally have a repeatable way to sell.",
    name: "Robin Carries",
    role: "Course Creator",
    company: "RC Academy",
    avatarInitials: "RC",
  },
  {
    quote:
      "Our booking system went from a messy spreadsheet to a smooth online flow. Clients book themselves and reminders go out automatically.",
    name: "Amara Nwosu",
    role: "Founder",
    company: "Lagos Fit Studio",
    avatarInitials: "AN",
  },
  {
    quote:
      "Israel cleaned up our CRM and automated the follow-ups. We now recover deals we used to lose to silence.",
    name: "James Carter",
    role: "Sales Director",
    company: "Summit Realty",
    avatarInitials: "JC",
  },
  {
    quote:
      "The email campaigns he set up bring in consistent revenue every month. Set-and-forget marketing that actually works.",
    name: "Hannah Peters",
    role: "E-Commerce Manager",
    company: "Bloom & Co.",
    avatarInitials: "HP",
  },
];

const TestimonialCard = ({ quote, name, role, company, avatarInitials }) => (
  <div className="relative flex flex-col bg-surface border border-surface-border rounded-2xl p-7 hover:border-ember transition-colors duration-300">
    <span
      aria-hidden="true"
      className="absolute top-3 right-6 font-display text-7xl leading-none text-ember/15 select-none"
    >
      "
    </span>
    <p className="relative italic text-paper text-[15px] leading-relaxed flex-1">{quote}</p>
    <div className="mt-6 flex items-center gap-3">
      <div className="w-11 h-11 rounded-full bg-signal flex items-center justify-center font-display font-bold text-ink text-sm shrink-0">
        {avatarInitials}
      </div>
      <div>
        <p className="text-paper font-bold text-sm">{name}</p>
        <p className="mt-0.5 text-paper-faint text-xs">
          {role}
          {company ? ` · ${company}` : ""}
        </p>
      </div>
    </div>
  </div>
);

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

      <div className="mt-16 -mx-6 px-6 flex md:grid md:grid-cols-3 gap-6 overflow-x-auto snap-x snap-mandatory md:overflow-visible md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.avatarInitials}
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="snap-start shrink-0 w-[85%] md:w-auto"
          >
            <TestimonialCard {...testimonial} />
          </motion.div>
        ))}
      </div>

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
