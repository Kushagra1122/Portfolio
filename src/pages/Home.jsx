import React, { useState } from "react";
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
import InteractiveTerminal from "../components/InteractiveTerminal";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const themeColors = getThemeColors(theme);
  const [showTerminal, setShowTerminal] = useState(false);

  const handleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // Keyboard shortcut to toggle terminal
  React.useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl+` or Cmd+`
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setShowTerminal((prev) => !prev);
      }
      // ESC to close
      if (e.key === "Escape" && showTerminal) {
        setShowTerminal(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showTerminal]);

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
    "Tech Enthusiast",
    "Full Stack Developer",
    "AI & Web3 Explorer",
    "Innovation Catalyst",
    "Code Architect",
  ];


  return (
    <section
      id="home"
      className={`relative min-h-[90vh] flex flex-col justify-center items-center px-6 transition-colors duration-500 ${themeColors.background} overflow-hidden`}
    >
      <motion.button
        onClick={handleTheme}
        className={`fixed top-6 right-6 p-3 rounded-full border-2 ${themeColors.border} ${themeColors.cardBg} shadow-lg hover:shadow-green-500/30 z-50 transition-all duration-300`}
        aria-label="Toggle Theme"
        whileHover={{ scale: 1.1 }}
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


      {/* Interactive Terminal Modal */}
      {showTerminal && (
        <InteractiveTerminal onClose={() => setShowTerminal(false)} />
      )}

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Terminal Command Style */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight ${themeColors.text}`}>
                Hi, I'm{" "}
                <span className={`${themeColors.accent} bg-gradient-to-r ${themeColors.gradientBorder} bg-clip-text text-transparent`}>
                  Kushagra Tiwari
                </span>
              </h1>
            </motion.div>

            <motion.h2
              className={`text-2xl sm:text-3xl md:text-4xl font-medium mb-6 min-h-[3rem] ${themeColors.secondary} flex items-center gap-3`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Typewriter
                options={{
                  strings: typewriterStrings,
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                  cursor: "|",
                  cursorClassName: `${themeColors.accent}`,
                }}
              />
            </motion.h2>

            <motion.p
              className={`max-w-2xl text-lg md:text-xl leading-relaxed ${themeColors.muted} mb-8`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Full Stack Developer passionate about building innovative solutions, 
              exploring emerging technologies, and creating exceptional user experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.a
                href="#about"
                className={`${themeColors.button} px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Me
              </motion.a>
              <motion.button
                onClick={() => setShowTerminal(true)}
                className={`border-2 ${themeColors.cardBorder} ${themeColors.text} px-6 py-3 rounded-lg font-semibold hover:${themeColors.accent} hover:border-green-500 dark:hover:border-green-400 transition-all duration-300`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Use CLI
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            className="lg:block hidden"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className={`${themeColors.cardBg} ${themeColors.cardBorder} border p-8 rounded-2xl shadow-xl`}>
              <h3 className={`text-2xl font-bold mb-6 ${themeColors.text}`}>Quick Stats</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className={`${themeColors.muted} text-lg`}>Experience</span>
                  <span className={`${themeColors.accent} font-bold text-2xl`}>2+ Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${themeColors.muted} text-lg`}>Projects</span>
                  <span className={`${themeColors.accent} font-bold text-2xl`}>15</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className={`${themeColors.muted} text-lg`}>Technologies</span>
                  <span className={`${themeColors.accent} font-bold text-2xl`}>20+</span>
                </div>
                <div className={`flex items-center justify-between pt-4 border-t ${themeColors.border}`}>
                  <span className={`${themeColors.muted} text-lg`}>Status</span>
                  <span className={`text-green-500 font-semibold flex items-center gap-2`}>
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available
                  </span>
                </div>
              </div>
              
              <div className={`mt-8 pt-6 border-t ${themeColors.border}`}>
                <div className="grid grid-cols-2 gap-4">
                  <div className={`p-4 rounded-lg ${themeColors.secondaryBg} text-center`}>
                    <div className={`${themeColors.accent} font-bold text-2xl mb-1`}>6+</div>
                    <div className={`${themeColors.muted} text-sm`}>Languages</div>
                  </div>
                  <div className={`p-4 rounded-lg ${themeColors.secondaryBg} text-center`}>
                    <div className={`${themeColors.accent} font-bold text-2xl mb-1`}>8+</div>
                    <div className={`${themeColors.muted} text-sm`}>Frameworks</div>
                  </div>
                  <div className={`p-4 rounded-lg ${themeColors.secondaryBg} text-center`}>
                    <div className={`${themeColors.accent} font-bold text-2xl mb-1`}>2</div>
                    <div className={`${themeColors.muted} text-sm`}>Internships</div>
                  </div>
                  <div className={`p-4 rounded-lg ${themeColors.secondaryBg} text-center`}>
                    <div className={`${themeColors.accent} font-bold text-2xl mb-1`}>∞</div>
                    <div className={`${themeColors.muted} text-sm`}>Learning</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          className="mt-16 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className={`text-sm ${themeColors.muted} uppercase tracking-wider`}>
            Connect With Me
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl transition-all ${themeColors.socialIcon} relative group`}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <div className="absolute -inset-2 bg-green-500/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <social.icon />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
