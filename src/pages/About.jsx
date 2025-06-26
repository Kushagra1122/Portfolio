import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImg from "../assets/images/profile.jpeg";
import { useTheme } from "../context/Theme";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [theme] = useTheme();
  const isLight = theme === "light";

  const colors = {
    light: {
      bg: "bg-gradient-to-b from-white to-gray-50",
      text: "text-gray-900",
      secondaryText: "text-gray-700",
      accent: "text-blue-600",
      cardBg: "bg-blue-50/80 backdrop-blur-sm",
      cardBorder: "border-blue-500",
      cardText: "text-blue-800",
      highlight: "bg-gradient-to-r from-blue-500 to-blue-600",
      button:
        "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white",
      gradientBorder: "from-blue-400 to-purple-500",
    },
    dark: {
      bg: "bg-gradient-to-b from-gray-900 to-gray-800",
      text: "text-white",
      secondaryText: "text-gray-300",
      accent: "text-blue-400",
      cardBg: "bg-blue-900/30 backdrop-blur-sm",
      cardBorder: "border-blue-500",
      cardText: "text-blue-200",
      highlight: "bg-gradient-to-r from-blue-600 to-blue-700",
      button:
        "bg-gradient-to-r from-blue-700 to-blue-800 hover:from-blue-600 hover:to-blue-700 text-white",
      gradientBorder: "from-blue-600 to-purple-700",
    },
  };

  const themeColors = colors[theme];

  const highlights = [
    "2x Internship Experience — Frontend (React.js) & Mobile (React Native)",
    "Built full-stack projects using MERN stack, Firebase, WebRTC, and modern CSS frameworks",
    "Strong foundation in data structures, algorithms, and system design",
  ];

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 px-6 transition-colors duration-500 ${themeColors.bg}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
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
          {/* Profile Image */}
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
                className={`relative rounded-2xl w-full max-w-md border-4 ${
                  isLight ? "border-white" : "border-gray-800"
                } shadow-xl transition-transform duration-500 group-hover:scale-[1.02]`}
              />
            </div>
          </motion.div>

          {/* Text Content */}
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
              <p
                className={`text-lg leading-relaxed ${themeColors.secondaryText}`}
              >
                I'm a{" "}
                <span className={`${themeColors.accent} font-medium`}>
                  problem-solver
                </span>{" "}
                at heart who enjoys turning ideas into scalable, real-world
                applications. With expertise across the stack, I deliver
                seamless digital experiences that combine intuitive interfaces
                with robust backend architecture.
              </p>

              <div
                className={`mt-8 p-6 rounded-xl border-l-4 ${themeColors.cardBg} ${themeColors.cardBorder} ${themeColors.cardText} shadow-md`}
              >
                <p className="font-medium leading-relaxed">
                  Currently pursuing B.Tech in Electrical and Electronics
                  Engineering at NIT Surathkal. I'm actively building products,
                  contributing to open-source, and continuously expanding my
                  technical knowledge.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h4 className={`text-xl font-semibold ${themeColors.text}`}>
                Key Highlights
              </h4>
              <ul className={`space-y-3 text-md ${themeColors.secondaryText}`}>
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

            {/* Download Resume Button */}
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
