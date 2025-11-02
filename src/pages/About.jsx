import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  const highlights = [
    "🚀 2x Internship Experience — Frontend (React.js) & Mobile (React Native)",
    "💻 Built full-stack projects using MERN stack, Firebase, WebRTC, and modern frameworks",
    "🧠 Strong foundation in data structures, algorithms, and system design",
    "🔬 Continuously exploring AI, Web3, and emerging technologies",
    "⚡ Passionate about performance optimization and scalable architecture",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 transition-colors duration-500 ${themeColors.background}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themeColors.text}`}>
            About{" "}
            <span className={`${themeColors.accent} bg-gradient-to-r ${themeColors.gradientBorder} bg-clip-text text-transparent`}>
              Me
            </span>
          </h2>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            className="w-full max-w-4xl space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="text-center lg:text-left">
              
              <p className={`text-lg leading-relaxed ${themeColors.secondary} mb-4`}>
                I'm a{" "}
                <span className={`${themeColors.accent} font-semibold bg-gradient-to-r ${themeColors.gradientBorder} bg-clip-text text-transparent`}>
                  tech explorer
                </span>{" "}
                who thrives on pushing boundaries, experimenting with cutting-edge technologies, 
                and building solutions that make an impact.
              </p>
              <p className={`text-base leading-relaxed ${themeColors.muted}`}>
                From Web3 to AI, I'm always on the lookout for the next big thing in tech, 
                constantly learning and contributing to the developer community.
              </p>

              <div className={`mt-8 p-6 rounded-xl border-l-4 ${themeColors.cardBg} ${themeColors.cardBorder} border-l-cyan-500 ${themeColors.text} ${themeColors.glow} shadow-lg`}>
                <div className="flex items-start gap-3 justify-center lg:justify-start">
                  <span className="text-2xl">🎓</span>
                  <div className="text-center lg:text-left">
                    <p className="font-semibold mb-1">Education</p>
                    <p className={`font-medium leading-relaxed text-sm ${themeColors.muted}`}>
                      B.Tech in Electrical and Electronics Engineering at NIT Surathkal
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-center lg:text-left">
              <h4 className={`text-xl font-semibold ${themeColors.text}`}>
                Key Highlights
              </h4>
              <ul className={`space-y-4 text-md ${themeColors.secondary}`}>
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className={`flex items-start p-3 rounded-lg ${themeColors.cardBg} ${themeColors.cardBorder} border transition-all hover:scale-[1.02] text-left`}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span className="text-xl mr-3">{highlight.split(' ')[0]}</span>
                    <span>{highlight.substring(highlight.indexOf(' ') + 1)}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              className="text-center lg:text-left pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/docs/MyResume.pdf"
                download="Kushagra_Tiwari_Resume.pdf"
                className={`inline-block px-8 py-3 ${themeColors.button} font-medium rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
