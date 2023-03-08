import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState, useEffect } from "react";

const useTypewriter = (options) => {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const words = options.words;
      const loop = options.loop;
      const delaySpeed = options.delaySpeed;
      const currentIndex = count % words.length;
      const currentWord = words[currentIndex];
      const currentWordLength = currentWord.length;
      const currentWordIsDone = text.length === currentWordLength;

      if (currentWordIsDone) {
        setTimeout(() => {
          clearInterval(intervalId);
          setCount((prevCount) => prevCount + 1);
          setText("");
        }, delaySpeed);
      } else {
        const nextChar = currentWord[text.length];
        setText((prevText) => prevText + nextChar);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [count, options, text]);

  return [text, count];
};

const Hero = () => {
  const [text, count] = useTypewriter({
    words: ["Hi, I'm Gavin"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className="flex flex-col space-y-8 
    items-center justify-center text-center overflow-hidden"
      ></div>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {text}
            <motion.span
              className="text-[#915eff]"
              animate={{ opacity: 0.1 }}
              transition={{
                duration: 0.75,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              _
            </motion.span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a <span className="text-[#915eff]">Frontend Developer. </span>
            <br className="sm:block hidden" />I develop 3D visuals, user
            interfaces and web applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-32
      w-full flex justify-center items-center"
      >
        <a href="#about">
          <div
            className="w-[35px] h-[64px] rounded-3xl
          border-4 border-secondary flex
          justify-center items-start p-2"
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
