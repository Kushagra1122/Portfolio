import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub } from "react-icons/fa";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  const projects = [
    {
      title: "StreamSync",
      description:
        "Built a real-time video streaming platform using React and WebRTC for low-latency playback. Integrated live chat, superchat donations, and user subscriptions using Socket.io. Designed responsive UI with seamless UX.",
      technologies: ["React", "WebRTC", "Socket.io", "Tailwind CSS"],
      githubLink: "https://github.com/Kushagra1122/streamsync",
      demoLink: "#",
    },
    {
      title: "Qlueless App",
      description:
        "Developed a mobile app with real-time notifications and chat using Firebase Realtime DB and FCM. Implemented message delivery receipts, typing indicators, and offline support in React Native.",
      technologies: [
        "React Native",
        "Firebase",
        "FCM",
        "Socket.io",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/Kushagra1122/qlueless",
      demoLink: "#",
    },
    {
      title: "FileForge",
      description:
        "Built the frontend for a cloud file-sharing platform using React.js and Tailwind CSS. Integrated secure file upload, preview, and sharing APIs with FastAPI backend. Used PostgreSQL, MinIO, and JWT authentication.",
      technologies: [
        "React.js",
        "FastAPI",
        "PostgreSQL",
        "MinIO",
        "JWT",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/saketjha34/FileForge",
      demoLink: "#",
    },
    {
      title: "Study AI",
      description:
        "Built a Chrome extension that activates on YouTube video pages and injects a Gemini chatbot button. The chatbot allows contextual questions based on video transcript using the Gemini API and a secure Express.js backend.",
      technologies: [
        "Chrome API",
        "React",
        "Gemini",
        "Express.js",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/Kushagra1122/Study_AI",
      demoLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 transition-colors duration-500 ${themeColors.background}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{" "}
            <span
              className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}
            >
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeColors.muted}`}>
            A selection of projects showcasing my skills and approach to
            problem-solving.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className={`rounded-xl overflow-hidden border ${themeColors.cardBorder} ${themeColors.cardBg} shadow-lg transition-all duration-500 hover:shadow-xl`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="p-6 h-full flex flex-col">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className={`mb-5 ${themeColors.muted}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${themeColors.iconBg}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium ${themeColors.button}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
