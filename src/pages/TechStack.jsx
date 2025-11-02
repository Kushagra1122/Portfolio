import React from "react";
import { List } from "../utils/list";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const TechStack = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="techstack"
      ref={ref}
      className={`py-24 transition-colors duration-300 ${themeColors.background} relative overflow-hidden`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-64 h-64 ${theme === 'dark' ? 'bg-cyan-500/5' : 'bg-cyan-400/5'} rounded-full blur-3xl`}></div>
        <div className={`absolute bottom-20 right-10 w-64 h-64 ${theme === 'dark' ? 'bg-blue-500/5' : 'bg-blue-400/5'} rounded-full blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className={`${themeColors.accent} bg-gradient-to-r ${themeColors.gradientBorder} bg-clip-text text-transparent`}>Tech Stack</span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeColors.muted}`}>
            A curated set of technologies I've used across the full stack.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {List.map((tech, index) => (
            <motion.div
              key={tech._id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.05,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="group"
            >
              <div
                className={`rounded-2xl ${themeColors.cardBg} ${themeColors.cardBorder} border ${themeColors.glow} 
                  p-4 sm:p-6 flex flex-col items-center text-center cursor-pointer
                  transform transition-all duration-300 hover:shadow-2xl relative overflow-hidden`}
              >
                {/* Hover gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradientBorder} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10 w-full">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <tech.icon
                      size={56}
                      className={`${themeColors.accent} mb-4 transition-all group-hover:scale-110`}
                    />
                  </motion.div>
                  <h3 className={`text-sm sm:text-base font-semibold ${themeColors.text} transition-colors group-hover:text-cyan-400`}>
                    {tech.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
