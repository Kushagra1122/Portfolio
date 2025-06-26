import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import {
  BsFillMoonStarsFill,
  BsFillSunFill,
  BsGithub,
  BsLinkedin,
  BsInstagram,
} from "react-icons/bs";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const themeColors = getThemeColors(theme);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const socialLinks = [
    { icon: BsGithub, url: "https://github.com/Kushagra1122", label: "GitHub" },
    {
      icon: BsLinkedin,
      url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
      label: "LinkedIn",
    },
    {
      icon: BsInstagram,
      url: "https://instagram.com/kushagra_._23_",
      label: "Instagram",
    },
  ];

  const typewriterStrings = [
    "Full Stack Developer",
    "React & Node.js Expert",
    "React Native Developer",
    "Problem Solver",
    "Tech Enthusiast",
  ];

  return (
    <section
      id="home"
      className={`relative min-h-[80vh] flex flex-col justify-center items-center px-6 transition-colors duration-500 ${themeColors.background}`}
    >
      <motion.button
        onClick={handleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full border ${themeColors.border} ${themeColors.cardBg} shadow-lg z-50`}
        aria-label="Toggle Theme"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill className={`text-xl ${themeColors.accent}`} />
        ) : (
          <BsFillSunFill className={`text-xl ${themeColors.accent}`} />
        )}
      </motion.button>

      <div className="max-w-5xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight ${themeColors.text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm{" "}
            <span
              className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}
            >
              Kushagra Tiwari
            </span>
          </motion.h1>

          <motion.h2
            className={`text-xl sm:text-2xl md:text-3xl font-medium mb-6 min-h-[3rem] ${themeColors.secondary}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                cursor: "_",
                cursorClassName: themeColors.muted,
              }}
            />
          </motion.h2>

          <motion.p
            className={`max-w-2xl mx-auto text-lg md:text-xl leading-relaxed ${themeColors.muted}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about building scalable web applications with clean,
            efficient code and exceptional user experiences.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="mt-12 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {socialLinks.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl transition-all ${themeColors.socialIcon}`}
            whileHover={{ y: -5, scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label={social.label}
          >
            <social.icon />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Home;
