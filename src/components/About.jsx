import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants/constants.js";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] 
        shadow-card"
      >
        <div
          options={{
            max: 45,
            sclae: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text0[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I possess advanced skills in software development, specifically in the
        languages of Typescript and JavaScript, and possess expertise in
        frameworks such as React, Node.js, and Three.js. I am a quick learner
        and adeptly collaborate with clients to design efficient, scalable, and
        user-friendly solutions that effectively address real-world issues. My
        proficiency extends to various languages, frameworks, and databases,
        including but not limited to HTML, CSS, Javascript, Vue.js, React.js,
        Next.js, Sanity.io, Firebase, Solana, Mongo, Express, Node, and Python.
        Additionally, I have replicated several of the applications that are
        ubiquitous in your daily life. It would be a pleasure to work together
        to transform your concepts into reality.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
