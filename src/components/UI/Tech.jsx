import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { fadeIn, textVariant } from "../../utils/motion";
import gohighlevelLogo from "../../assets/logos/gohighlevel.png";
import systemeLogo from "../../assets/logos/systeme.svg";
import kajabiLogo from "../../assets/logos/kajabi.svg";

const techGroups = [
  {
    label: "Frontend & Web Design",
    items: [
      { name: "HTML 5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS 3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux Toolkit", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "Three JS", icon: "https://cdn.simpleicons.org/threedotjs/ffffff" },
      { name: "figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow/ffffff" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
    ],
  },
  {
    label: "Backend & SaaS",
    items: [
      { name: "Node JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    ],
  },
  {
    label: "Funnels, CRM & Automation",
    items: [
      { name: "GoHighLevel", icon: gohighlevelLogo },
      { name: "Kajabi", icon: kajabiLogo },
      { name: "Systeme.io", icon: systemeLogo, wide: true },
      { name: "Shopify", icon: "https://cdn.simpleicons.org/shopify/ffffff" },
      { name: "n8n", icon: "https://cdn.simpleicons.org/n8n/ffffff" },
      { name: "Zapier", icon: "https://cdn.simpleicons.org/zapier/ffffff" },
      { name: "Make", icon: "https://cdn.simpleicons.org/make/ffffff" },
      { name: "Webflow", icon: "https://cdn.simpleicons.org/webflow/ffffff" },
      { name: "WordPress", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" },
      { name: "Framer", icon: "https://cdn.simpleicons.org/framer/ffffff" },
    ],
  },
  {
    label: "Email & Marketing",
    items: [
      { name: "Mailchimp", icon: "https://cdn.simpleicons.org/mailchimp/ffffff" },
      { name: "GHL Email Workflows", Icon: Mail },
    ],
  },
  {
    label: "AI & Agentic Coding",
    items: [
      { name: "Claude", icon: "https://cdn.simpleicons.org/claude/ffffff" },
      { name: "Cursor", icon: "https://cdn.simpleicons.org/cursor/ffffff" },
      { name: "GitHub Copilot", icon: "https://cdn.simpleicons.org/githubcopilot/ffffff" },
      { name: "Antigravity", icon: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/antigravity-color.png" },
      { name: "Opencode", icon: "https://cdn.simpleicons.org/opencode/ffffff" },
      { name: "Codex", icon: "https://cdn.jsdelivr.net/gh/glincker/thesvg@main/public/icons/codex-openai/default.svg" },
    ],
  },
];

const sphereClass =
  "sphere w-24 h-24 rounded-full border border-surface-border hover:border-ember hover:shadow-glow transition-all duration-300 flex items-center justify-center overflow-hidden";

const TechItem = ({ item }) => {
  if ("Icon" in item) {
    const IconComp = item.Icon;
    return (
      <div className={sphereClass}>
        <IconComp size={30} className="text-ember" />
      </div>
    );
  }

  const imgSizing = item.wide
    ? "w-[75%] h-[75%] object-contain"
    : "w-1/2 h-1/2 object-contain";

  return (
    <div className={sphereClass}>
      <img src={item.icon} alt={item.name} className={imgSizing} />
    </div>
  );
};

const Tech = () => {
  return (
    <section id="tech" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">TOOLS OF THE TRADE</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          The stack behind the systems.
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-6">
        {techGroups.map((group) => (
          <motion.div
            key={group.label}
            variants={fadeIn("up", "spring", 0.1, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="bg-surface border border-surface-border rounded-2xl p-6 sm:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-signal/50" />
              <p className="text-signal text-sm font-medium uppercase tracking-wider">{group.label}</p>
            </div>
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-x-4 gap-y-10">
              {group.items.map((item, index) => (
                <motion.div
                  key={item.name}
                  variants={fadeIn("up", "spring", index * 0.03, 0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.25 }}
                  className="flex flex-col items-center gap-3"
                >
                  <TechItem item={item} />
                  <p className="text-paper-muted text-[13px] text-center leading-snug">{item.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
