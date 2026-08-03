import React from 'react';
import { Github, Linkedin, Twitter, Mail, MessageCircle, Phone } from 'lucide-react';

const FOOTER_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_SOCIALS = [
  {
    href: "https://github.com/HON-AIM",
    label: "GitHub",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/israel-adeosun-182b78235",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://x.com/IsraelMiracle13",
    label: "X",
    Icon: Twitter,
  },
  {
    href: "https://wa.me/2349036055170",
    label: "WhatsApp",
    Icon: MessageCircle,
  },
  {
    href: "tel:+2349036055170",
    label: "Phone",
    Icon: Phone,
  },
  {
    href: "mailto:israelmiracle12@gmail.com",
    label: "Email",
    Icon: Mail,
  },
];

const Footer = () => {
  return (
    <footer className="bg-surface border-t border-surface-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <p className="font-display text-white text-lg font-bold tracking-tight">
              Israel Miracle
            </p>
            <p className="mt-1 text-paper-faint text-sm max-w-sm">
              Full-Stack Developer &amp; Digital Systems Builder — Web, Funnels, SaaS &amp; Email
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <nav className="flex flex-wrap items-center gap-5">
              {FOOTER_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-paper-muted hover:text-ember text-sm font-medium transition-colors duration-300"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {FOOTER_SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="p-2.5 bg-ink border border-surface-border rounded-lg text-paper-muted hover:bg-ember hover:text-ink hover:border-ember transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 pt-6 border-t border-surface-border text-center text-paper-faint text-xs">
          © {new Date().getFullYear()} Israel Miracle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
