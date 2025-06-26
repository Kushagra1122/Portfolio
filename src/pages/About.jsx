import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "../assets/images/profile.jpeg";
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
    "2x Internship Experience — Frontend (React.js) & Mobile (React Native)",
    "Built full-stack projects using MERN stack, Firebase, WebRTC, and modern CSS frameworks",
    "Strong foundation in data structures, algorithms, and system design",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 transition-colors duration-500 ${themeColors.background}`}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          About{" "}
          <span
            className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}
          >
            Me
          </span>
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div
            className="lg:w-2/5 relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative group">
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${themeColors.gradientBorder} rounded-3xl opacity-75 blur-lg group-hover:opacity-90 transition-all duration-500`}
              ></div>
              <img
                src={profileImg}
                alt="Profile"
                className={`relative rounded-2xl w-full max-w-md border-4 ${themeColors.cardBorder} shadow-xl transition-transform duration-500 group-hover:scale-[1.02]`}
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:w-3/5 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div>
              <h3 className={`text-3xl font-bold mb-6 ${themeColors.text}`}>
                Full Stack Developer & UI Enthusiast
              </h3>
              <p className={`text-lg leading-relaxed ${themeColors.secondary}`}>
                I'm a{" "}
                <span className={`${themeColors.accent} font-medium`}>
                  problem-solver
                </span>{" "}
                at heart who enjoys turning ideas into scalable, real-world
                applications.
              </p>

              <div
                className={`mt-8 p-6 rounded-xl border-l-4 ${themeColors.cardBg} ${themeColors.cardBorder} ${themeColors.text} shadow-md`}
              >
                <p className="font-medium leading-relaxed">
                  Currently pursuing B.Tech in Electrical and Electronics
                  Engineering at NIT Surathkal.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className={`text-xl font-semibold ${themeColors.text}`}>
                Key Highlights
              </h4>
              <ul className={`space-y-3 text-md ${themeColors.secondary}`}>
                {highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <span
                      className={`inline-block w-2 h-2 rounded-full mt-2 mr-3 ${themeColors.highlight}`}
                    ></span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
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
