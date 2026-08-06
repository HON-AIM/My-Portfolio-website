import { useState, useRef, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { slideIn } from '../../utils/motion';
import { Loader2 } from 'lucide-react';
import ConnectWithUs from './ConnectWithUs';

// Lazily loaded 3D canvas — keeps three.js out of the initial bundle.
const EarthCanvas = lazy(() => import('../Canvas/Earth'));

const PROJECT_TYPES = [
  "Website (Design/Development)",
  "Funnel Build (GHL/Kajabi/Systeme.io)",
  "Custom SaaS Platform",
  "E-Commerce Store",
  "Email Marketing/Automation",
  "Something Else",
];

const inputClasses =
  "w-full bg-surface border border-surface-border rounded-xl px-5 py-4 text-paper placeholder:text-paper-faint font-medium focus:outline-none focus:ring-2 focus:ring-ember focus:border-ember transition-colors duration-300";

const labelClasses = "text-paper-muted text-sm font-medium mb-2";

// Formspree form ID — override with VITE_FORMSPREE_ID (Vercel env var or
// .env.local) if you ever use a different form.
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "mlgqqobj";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  // Clear the fields once a submission succeeds — adjusted during render per
  // React's recommended "storing info from previous renders" pattern.
  const [prevSucceeded, setPrevSucceeded] = useState(state.succeeded);
  if (prevSucceeded !== state.succeeded) {
    setPrevSucceeded(state.succeeded);
    if (state.succeeded) {
      setForm({ name: '', email: '', projectType: '', message: '' });
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto relative z-0 py-16 px-6 sm:py-24 lg:px-16 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-surface/40 border border-surface-border p-6 sm:p-8 rounded-2xl backdrop-blur-sm"
      >
        <p className="section-heading-eyebrow">LET'S BUILD SOMETHING</p>
        <h2 className="mt-4 font-display text-white font-black md:text-[48px] sm:text-[40px] text-[30px] leading-[1.1]">
          Have a project in mind?
        </h2>
        <p className="mt-4 text-paper-muted text-[16px] leading-relaxed max-w-xl">
          Whether it's a website, a funnel, a SaaS platform, or an email
          system that's been on your to-do list for months — tell me about it.
          I typically respond within 24 hours.
        </p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >
          <input
            type="hidden"
            name="_subject"
            value={`Portfolio contact from ${form.name || 'visitor'}`}
          />

          <label className="flex flex-col">
            <span className={labelClasses}>Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className={inputClasses}
            />
            <ValidationError field="name" errors={state.errors} className="mt-2 text-ember text-sm" />
          </label>

          <label className="flex flex-col">
            <span className={labelClasses}>Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="What's your email address?"
              className={inputClasses}
            />
            <ValidationError field="email" errors={state.errors} className="mt-2 text-ember text-sm" />
          </label>

          <label className="flex flex-col">
            <span className={labelClasses}>Project Type</span>
            <select
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
              className={`${inputClasses} ${form.projectType ? "" : "text-paper-faint"} bg-surface`}
            >
              <option value="" disabled>
                Select a project type
              </option>
              {PROJECT_TYPES.map((type) => (
                <option key={type} value={type} className="text-paper bg-surface">
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col">
            <span className={labelClasses}>Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className={`${inputClasses} resize-none`}
            />
            <ValidationError field="message" errors={state.errors} className="mt-2 text-ember text-sm" />
          </label>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full sm:w-fit inline-flex items-center justify-center gap-2 bg-ember hover:bg-ember-hover text-ink font-semibold rounded-xl px-10 py-4 shadow-glow transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {state.submitting ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>

          {state.succeeded && (
            <p role="status" className="text-signal text-sm leading-relaxed">
              Thanks! Your message has been sent — I typically respond within 24 hours.
            </p>
          )}

          <ValidationError field={false} errors={state.errors} className="text-ember text-sm" />
        </form>

        <div className="mt-8">
          <ConnectWithUs />
        </div>

        <p className="mt-6 text-paper-faint text-sm">
          📍 Based in Nigeria — working with clients worldwide, remote-first.
        </p>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Suspense fallback={null}>
          <EarthCanvas />
        </Suspense>
      </motion.div>
    </section>
  );
};

export default Contact;
