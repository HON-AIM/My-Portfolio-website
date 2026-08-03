import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const isAvailable = true;

// TODO: paste your Calendly booking URL here, e.g. "https://calendly.com/your-handle/30min".
// When empty, the "Book a Call" button falls back to the #contact anchor.
const CALENDLY_LINK = "";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const bookCallHref = CALENDLY_LINK || "#contact";
  const bookCallTarget = CALENDLY_LINK ? "_blank" : undefined;

  return (
    <nav className="w-full flex items-center py-4 fixed top-0 z-30 bg-ink/80 backdrop-blur-md border-b border-surface-border">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" onClick={() => window.scrollTo(0, 0)}>
          <div className="flex flex-col leading-tight">
            <p className="font-display text-white text-[22px] sm:text-[26px] font-bold tracking-tight cursor-pointer leading-none">
              Israel <span className="text-ember">Miracle</span>
            </p>
            <p className="hidden md:block text-paper-faint text-xs font-medium tracking-wide mt-1.5">
              Web · Funnels · SaaS
            </p>
          </div>
          {isAvailable && (
            <span className="hidden md:flex items-center gap-2 border border-signal/30 rounded-full px-3 py-1 text-signal text-xs font-medium">
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-signal"
              />
              Available for projects
            </span>
          )}
        </Link>

        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="relative text-paper-muted hover:text-paper text-[15px] font-medium transition-colors duration-300 group"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-ember transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={bookCallHref}
            target={bookCallTarget}
            rel={bookCallTarget ? "noopener noreferrer" : undefined}
            className="hidden lg:inline-flex items-center bg-ember hover:bg-ember-hover text-ink font-semibold text-sm px-5 py-2.5 rounded-lg shadow-glow transition-colors duration-300"
          >
            Book a Call
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="lg:hidden text-paper hover:text-ember transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
              className="absolute top-0 right-0 h-full w-[78%] max-w-sm bg-ink/95 backdrop-blur-xl border-l border-surface-border p-6 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <p className="font-display text-white text-[22px] font-bold">
                  Israel <span className="text-ember">Miracle</span>
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="text-paper hover:text-ember transition-colors"
                >
                  <X size={28} />
                </button>
              </div>
              <ul className="mt-12 flex flex-col gap-6">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="text-paper-muted hover:text-ember text-[18px] font-medium transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={bookCallHref}
                target={bookCallTarget}
                rel={bookCallTarget ? "noopener noreferrer" : undefined}
                onClick={() => setIsOpen(false)}
                className="mt-auto bg-ember hover:bg-ember-hover text-ink font-semibold text-center rounded-lg px-5 py-3 shadow-glow transition-colors duration-300"
              >
                Book a Call
              </a>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
