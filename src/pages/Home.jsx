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

const Home = () => {
  const [theme, setTheme] = useTheme();
  const isLight = theme === "light";

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Color definitions
  const colors = {
    light: {
      bg: "bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100",
      text: "text-gray-900",
      secondaryText: "text-gray-700",
      mutedText: "text-gray-600",
      accent: "text-blue-600",
      themeBtnBg: "bg-white",
      themeBtnIcon: "text-gray-700",
      themeBtnBorder: "border-gray-200",
      socialIcon: "text-gray-600 hover:text-blue-600",
    },
    dark: {
      bg: "bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800",
      text: "text-white",
      secondaryText: "text-gray-300",
      mutedText: "text-gray-400",
      accent: "text-blue-400",
      themeBtnBg: "bg-gray-800",
      themeBtnIcon: "text-yellow-300",
      themeBtnBorder: "border-gray-700",
      socialIcon: "text-gray-400 hover:text-blue-400",
    },
  };

  const themeColors = colors[theme];

  const socialLinks = [
    { icon: BsGithub, url: "https://github.com/Kushagra1122", label: "GitHub" },
    {
      icon: BsLinkedin,
      url: "https://linkedin.com/in/kushagra-tiwari-aa2354283",
      label: "LinkedIn",
    },
    {
      icon: BsInstagram,
      url: "https://instagram.com/_kushagra__23",
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
      className={`relative min-h-screen flex flex-col justify-center items-center px-6 transition-colors duration-300 ${themeColors.bg}`}
    >
      {/* Theme Toggle Button - More Elegant */}
      <motion.button
        onClick={handleTheme}
        className={`fixed top-8 right-8 p-3 rounded-full border ${themeColors.themeBtnBorder} ${themeColors.themeBtnBg} shadow-sm z-50`}
        aria-label="Toggle Theme"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {isLight ? (
          <BsFillMoonStarsFill
            className={`text-xl ${themeColors.themeBtnIcon}`}
          />
        ) : (
          <BsFillSunFill className={`text-xl ${themeColors.themeBtnIcon}`} />
        )}
      </motion.button>

      {/* Hero Content */}
      <div className="max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className={`text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight ${themeColors.text}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className={themeColors.accent}>Kushagra Tiwari</span>
          </motion.h1>

          <motion.h2
            className={`text-xl sm:text-2xl md:text-3xl font-medium mb-8 min-h-[3rem] ${themeColors.secondaryText}`}
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
                cursorClassName: themeColors.mutedText,
              }}
            />
          </motion.h2>

          <motion.p
            className={`max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed ${themeColors.mutedText}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Passionate about building scalable web applications with clean,
            efficient code and exceptional user experiences.
          </motion.p>
        </motion.div>
      </div>

      {/* Social Links - More Subtle */}
      <motion.div
        className="fixed bottom-8 flex space-x-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        
      </motion.div>
    </section>
  );
};

export default Home;
