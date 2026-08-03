import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { fadeIn, textVariant } from '../../utils/motion';

// PROJECT IMAGE: replace with a real screenshot or mockup of this project (1200x800px recommended)
import leadDistributionImg from '../../assets/projects/lead-distribution.svg';
import iyosiolaFoodsImg from '../../assets/projects/iyosiola-foods.svg';
import ghlAutomationImg from '../../assets/projects/ghl-automation.svg';
import courseFunnelImg from '../../assets/projects/course-funnel.svg';
import fintechAppImg from '../../assets/projects/fintech-app.svg';
import churchImg from '../../assets/projects/church.svg';

// LINKS: fill in demoUrl for any project with a live/deployed version,
// and githubUrl for any project whose repo is public. Leave either as an
// empty string to hide that button.
const projects = [
  {
    name: "Lead Distribution Platform",
    client: "Insurance Agency",
    problem:
      "Leads were manually assigned to agents, causing delays and inconsistent follow-up.",
    solution:
      "Built a custom Node.js + BullMQ platform with AI-powered lead scoring, automated cap resets, and role-based access, integrated directly with GoHighLevel.",
    result:
      "Cut lead response time significantly and eliminated duplicate assignments.",
    tags: ["Node.js", "BullMQ", "GoHighLevel", "PostgreSQL"],
    image: leadDistributionImg,
    demoUrl: "https://leads-management-saas-xu8h.vercel.app/",
    githubUrl: "",
  },
  {
    name: "Iyosiola Foods E-Commerce",
    client: "Food & Retail Brand",
    problem:
      "No online storefront; sales were limited to in-person and word of mouth.",
    solution:
      "Built a full Next.js storefront with Paystack payments, inventory management, and an admin dashboard.",
    result:
      "Enabled online orders and payments for the first time.",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Paystack"],
    image: iyosiolaFoodsImg,
    demoUrl: "https://iyosi-foods-web-app.vercel.app",
    githubUrl: "",
  },
  {
    name: "Grace Missionary Baptist Church",
    client: "Church Organization",
    problem:
      "The church had no digital presence, making it hard for the community to find service times, ministries, and giving details.",
    solution:
      "Built a modern church website with service schedules, ministries, sermons, pastor's welcome, prayer requests, and online giving powered by Paystack.",
    result:
      "Gave the church a welcoming online home that connects visitors to worship, ministry, and giving.",
    tags: ["React", "Vite", "Tailwind CSS", "Vercel"],
    image: churchImg,
    demoUrl: "https://grace-missionary-baptist-church.vercel.app",
    githubUrl: "",
  },
  {
    name: "GoHighLevel Automation Suite",
    client: "Marketing Agency",
    problem:
      "Client onboarding and follow-up sequences were done manually, eating hours every week.",
    solution:
      "Built a full GHL automation suite covering onboarding, nurture sequences, and pipeline handoffs.",
    result:
      "Freed up an estimated 10+ hours per week for the agency team.",
    tags: ["GoHighLevel", "Zapier", "Automation"],
    image: ghlAutomationImg,
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Course Funnel & Email Sequence",
    client: "Coach / Course Creator",
    problem:
      "Had a course but no funnel or email system to actually sell it — sales were happening only through DMs.",
    solution:
      "Built a complete sales funnel with checkout in Kajabi/Systeme.io, plus a 7-email nurture and launch sequence.",
    result:
      "Gave the client a repeatable, automated way to launch to a cold audience.",
    tags: ["Kajabi", "Systeme.io", "Email Marketing"],
    image: courseFunnelImg,
    demoUrl: "",
    githubUrl: "",
  },
  {
    name: "Fintech Web App (Loans, Investment & Forex Trading Platform)",
    client: "Fintech Company",
    problem:
      "Loans, investments, and forex trading were scattered across separate tools, leaving users without a single place to manage their finances.",
    solution:
      "Built a full fintech web app — loan application flow with status tracking, an investment dashboard for portfolio management, and a forex trading section with curated learning resources and market insights. Delivered responsive UI, RESTful API integration, and secure authentication with real-time data handling.",
    result:
      "Gave users one secure platform to apply for loans, manage investments, and access forex resources with a smooth experience.",
    tags: ["React", "Node.js", "REST API", "PostgreSQL"],
    image: fintechAppImg,
    demoUrl: "",
    githubUrl: "",
  },
];

const ProjectCard = ({ index, name, client, problem, solution, result, tags, image, demoUrl, githubUrl }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="h-full"
    >
      <div className="h-full flex flex-col bg-surface border border-surface-border rounded-2xl overflow-hidden hover:border-ember hover:shadow-glow transition-colors duration-300">
        <div className="h-[200px] overflow-hidden">
          <img src={image} alt={`${name} project preview`} className="w-full h-full object-cover" />
        </div>

        <div className="p-6 flex flex-col flex-1">
          <p className="text-signal text-xs font-medium uppercase tracking-wider">{client}</p>
          <h3 className="mt-2 font-display text-paper font-bold text-[20px]">{name}</h3>

          <div className="mt-4 space-y-2.5 text-[14px]">
            <p className="leading-relaxed">
              <span className="text-paper-faint font-medium">Problem: </span>
              <span className="text-paper-muted">{problem}</span>
            </p>
            <p className="leading-relaxed">
              <span className="text-paper-faint font-medium">Solution: </span>
              <span className="text-paper-muted">{solution}</span>
            </p>
            <p className="leading-relaxed">
              <span className="text-paper-faint font-medium">Result: </span>
              <span className="text-paper-muted">{result}</span>
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-ember/30 text-ember text-xs px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>

          {(demoUrl || githubUrl) && (
            <div className="mt-5 flex flex-wrap items-center gap-2.5">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-ember hover:bg-ember-hover text-ink font-semibold text-sm rounded-full px-4 py-2 transition-colors duration-300"
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 border border-surface-border hover:border-ember text-paper hover:text-ember font-medium text-sm rounded-full px-4 py-2 transition-colors duration-300"
                >
                  <Github size={14} />
                  View Code
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="work" className="relative z-0 max-w-7xl mx-auto py-16 px-6 sm:py-24 lg:px-16">
      <motion.div
        variants={textVariant(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className="section-heading-eyebrow">SELECTED WORK</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1] max-w-3xl">
          Real problems. Real systems. Real results.
        </h2>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
