import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../../utils/motion';
import profilePic from '../../assets/profile.jpg';

const services = [
  {
    title: "Web Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/3242/3242257.png", 
  },
  {
    title: "React Native Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png",
  },
  {
    title: "Backend Developer",
    icon: "https://cdn-icons-png.flaticon.com/512/2166/2166823.png",
  },
  {
    title: "Content Creator",
    icon: "https://cdn-icons-png.flaticon.com/512/3069/3069172.png",
  },
];

const ServiceCard = ({ index, title, icon }) => (
  <div className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
            max: 45,
            scale: 1,
            speed: 450
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto relative z-0 py-16 px-6 sm:py-24 lg:px-16">
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Introduction</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] flex-1"
          >
            I'm a skilled Fullstack Developer with deep knowledge in TypeScript,
            JavaScript, and expertise in frameworks like React, Vue, Angular, Node.js, and
            Three.js. I'm a quick learner and collaborate closely with clients to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems. Let's work together to bring your ideas to life!
          </motion.p>
          
          <motion.div 
            variants={fadeIn("left", "", 0.3, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
              {/* Profile Picture Placeholder - Replace src with your image URL */}
              <div className="w-[200px] h-[200px] rounded-full p-1 violet-gradient">
                <img 
                    src={profilePic}
                    alt="Israel Miracle" 
                    className="w-full h-full object-cover rounded-full border-4 border-primary" 
                />
              </div>
          </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default About;
