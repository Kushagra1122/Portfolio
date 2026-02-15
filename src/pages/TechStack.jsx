import React, { useMemo } from "react";
import { List, categoryOrder } from "../utils/list";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const ICON_SIZE = 40;
const CARD_MIN_HEIGHT = 120;

const TechStack = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  const listByCategory = useMemo(() => {
    const grouped = {};
    categoryOrder.forEach((cat) => {
      grouped[cat] = List.filter((item) => item.category === cat);
    });
    return grouped;
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 },
    },
  };

  return (
    <section
      id="techstack"
      ref={ref}
      className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${themeColors.background} relative overflow-hidden`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-64 h-64 ${theme === "dark" ? "bg-green-500/5" : "bg-green-400/5"} rounded-full blur-3xl`} />
        <div className={`absolute bottom-20 right-10 w-64 h-64 ${theme === "dark" ? "bg-emerald-500/5" : "bg-emerald-400/5"} rounded-full blur-3xl`} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My{" "}
            <span className={`${themeColors.accent} bg-gradient-to-r ${themeColors.gradientBorder} bg-clip-text text-transparent`}>
              Tech Stack
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeColors.muted}`}>
            The tools I reach for when building.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categoryOrder.map((category, catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: catIndex * 0.05 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`inline-block w-1 h-7 rounded-full ${theme === "dark" ? "bg-cyan-500" : "bg-green-500"}`}
                  aria-hidden
                />
                <h3 className={`text-lg sm:text-xl font-semibold tracking-tight ${themeColors.text}`}>
                  {category}
                </h3>
              </div>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {listByCategory[category].map((tech) => (
                  <motion.div
                    key={tech._id}
                    variants={itemVariants}
                    whileHover={{
                      y: -4,
                      transition: { type: "spring", stiffness: 400, damping: 18 },
                    }}
                    className="group"
                  >
                    <div
                      className={`rounded-xl ${themeColors.cardBg} ${themeColors.cardBorder} border
                        flex flex-col items-center justify-center text-center min-h-[7.5rem] p-4 sm:p-5
                        cursor-pointer transition-all duration-200 hover:shadow-lg relative overflow-hidden`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradientBorder} opacity-0 group-hover:opacity-[0.08] transition-opacity duration-200`}
                        aria-hidden
                      />
                      <div className="relative z-10 flex flex-col items-center justify-center w-full gap-3">
                        <div
                          className={`flex items-center justify-center w-14 h-14 rounded-lg ${themeColors.iconBg} shrink-0`}
                          aria-hidden
                        >
                          <tech.icon
                            size={ICON_SIZE}
                            className={`${themeColors.accent} transition-transform duration-200 group-hover:scale-110`}
                            aria-hidden
                          />
                        </div>
                        <span
                          className={`text-sm font-medium ${themeColors.text} leading-tight break-words max-w-full group-hover:text-cyan-500 transition-colors`}
                        >
                          {tech.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
