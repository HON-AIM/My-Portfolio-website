import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { slideIn } from '../../utils/motion';
import EarthCanvas from '../Canvas/Earth';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
            name: '',
            email: '',
            message: '',
        });
    }, 1000);
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto relative z-0 py-16 px-6 sm:py-24 lg:px-16 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h2>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium resize-none"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>

        <div className="mt-10 flex gap-4">
             <a href="#" className="p-3 bg-tertiary rounded-full hover:bg-white hover:text-tertiary transition-all duration-300">
                <Github size={24} />
             </a>
             <a href="#" className="p-3 bg-tertiary rounded-full hover:bg-white hover:text-tertiary transition-all duration-300">
                <Linkedin size={24} />
             </a>
             <a href="#" className="p-3 bg-tertiary rounded-full hover:bg-white hover:text-tertiary transition-all duration-300">
                <Twitter size={24} />
             </a>
             <a href="#" className="p-3 bg-tertiary rounded-full hover:bg-white hover:text-tertiary transition-all duration-300">
                 <Mail size={24} />
             </a>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </section>
  );
};

export default Contact;
