import React from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../../utils/motion';
import { Quote } from 'lucide-react';
import CardFanCarousel from './card-fan-carousel';

const testimonials = [
  {
    id: 1,
    testimonial:
      "Israel rebuilt our entire lead pipeline in GoHighLevel and it just works now. No more chasing leads manually.",
    author: "V. Miguel",
    role: "Operations Manager, Insurance Company",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 2,
    testimonial:
      "He took a process we'd been doing by hand for years and turned it into a system we actually trust. Worth every dollar.",
    author: "Michael Toyosi",
    role: "Founder, Iyosi Foods",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 3,
    testimonial:
      "The funnel and email sequence paid for itself within the first launch. We finally have a repeatable way to sell.",
    author: "Robin Carries",
    role: "Course Creator, RC Academy",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 4,
    testimonial:
      "Our booking system went from a messy spreadsheet to a smooth online flow. Clients book themselves and reminders go out automatically.",
    author: "Amara Nwosu",
    role: "Founder, Lagos Fit Studio",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 5,
    testimonial:
      "Israel cleaned up our CRM and automated the follow-ups. We now recover deals we used to lose to silence.",
    author: "James Carter",
    role: "Sales Director, Summit Realty",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 6,
    testimonial:
      "The email campaigns he set up bring in consistent revenue every month. Set-and-forget marketing that actually works.",
    author: "Hannah Peters",
    role: "E-Commerce Manager, Bloom & Co.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 7,
    testimonial:
      "From zero online presence to a fully automated client acquisition system in under two weeks. The ROI speaks for itself.",
    author: "David Chen",
    role: "CEO, NexGen Solutions",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 8,
    testimonial:
      "The automation workflows saved us 20+ hours a week. Our team can finally focus on growth instead of repetitive tasks.",
    author: "Sarah Mitchell",
    role: "COO, BrightPath Digital",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  },
  {
    id: 9,
    testimonial:
      "Israel understood our vision immediately and built exactly what we needed. Professional, fast, and results-driven.",
    author: "Marcus Johnson",
    role: "Founder, Elevate Consulting",
    avatar: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face",
  },
];

const TestimonialCard = ({ testimonial, author, role, avatar }) => (
  <div className="relative w-full h-full flex flex-col items-center justify-between p-6 sm:p-7 text-center">
    <div className="absolute inset-0 bg-gradient-to-b from-ember/5 via-transparent to-transparent pointer-events-none" />

    <Quote className="w-8 h-8 text-ember/30 mt-1 shrink-0" />

    <p className="text-paper-muted text-sm sm:text-[15px] leading-relaxed italic flex-1 flex items-center px-1">
      &ldquo;{testimonial}&rdquo;
    </p>

    <div className="mt-3 flex flex-col items-center gap-2.5 shrink-0">
      <img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full border-2 border-ember/30 object-cover"
        loading="lazy"
      />
      <div>
        <p className="text-paper text-sm font-semibold">{author}</p>
        <p className="text-paper-faint text-xs mt-0.5">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16 overflow-hidden">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">WHAT CLIENTS SAY</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          Don&apos;t just take my word for it.
        </h2>
      </motion.div>

      <CardFanCarousel
        cards={testimonials}
        renderCard={(card) => (
          <TestimonialCard
            testimonial={card.testimonial}
            author={card.author}
            role={card.role}
            avatar={card.avatar}
          />
        )}
        cardClassName="bg-surface/90 backdrop-blur-md border-surface-border"
      />
    </section>
  );
};

export default Testimonials;
