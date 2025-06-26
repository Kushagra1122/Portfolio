import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useTheme } from "../context/Theme";

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [theme] = useTheme();
  const isLight = theme === "light";

  const colors = {
    light: {
      bg: "bg-gradient-to-b from-blue-50/30 to-gray-50",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      accent: "text-blue-600",
      cardBg: "bg-white/90 backdrop-blur-sm",
      cardBorder: "border-gray-200",
      gradientBorder: "from-blue-400 to-purple-500",
    },
    dark: {
      bg: "bg-gradient-to-b from-gray-900 to-gray-800",
      text: "text-white",
      secondaryText: "text-gray-400",
      accent: "text-blue-400",
      cardBg: "bg-gray-800/90 backdrop-blur-sm",
      cardBorder: "border-gray-700",
      gradientBorder: "from-blue-600 to-purple-700",
    },
  };

  const themeColors = colors[theme];

  const projects = [
    {
      title: "StreamSync Platform",
      description:
        "A live streaming platform with real-time chat, donations, and viewer analytics. Implemented WebRTC for low-latency streaming and built a custom dashboard for streamers.",
      technologies: [
        "React",
        "Node.js",
        "WebRTC",
        "MongoDB",
        "Socket.io",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/Kushagra1122/streamsync",
      demoLink: "#",
    },
    {
      title: "Qlueless App",
      description:
        "Community-based Q&A mobile app with real-time notifications and chat functionality. Built the complete chat system and notification service from scratch.",
      technologies: [
        "React Native",
        "Firebase",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
      ],
      githubLink: "https://github.com/Kushagra1122/qlueless",
      demoLink: "#",
    },
    {
      title: "FileForge",
      description:
        "Cloud storage solution with file management, sharing, and collaboration features. Implemented secure file uploads/downloads and real-time updates.",
      technologies: ["React", "FastAPI", "MinIo", "JWT", "Tailwind CSS"],
      githubLink: "https://github.com/saketjha34/FileForge",
      demoLink: "#",
    },
    {
      title: "YT Summary Chrome Extension",
      description:
        "Browser extension that provides AI-generated summaries of YouTube videos. Extracts and processes video transcripts using NLP techniques.",
      technologies: ["Chrome API", "React", "Node.js", "Gemini", "Tailwind CSS"],
      githubLink: "https://github.com/Kushagra1122/Study_AI",
      demoLink: "#",
    },
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-24 transition-colors duration-500 ${themeColors.bg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
          <p
            className={`text-lg max-w-2xl mx-auto ${themeColors.secondaryText}`}
          >
            A selection of projects showcasing my skills and approach to
            problem-solving.
          </p>
        </motion.div>

        {/* Project Grid */}
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
                  <p className={`mb-5 ${themeColors.secondaryText}`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-3 py-1 rounded-full ${
                          isLight
                            ? "bg-blue-100 text-blue-700"
                            : "bg-blue-900/50 text-blue-400"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                      isLight
                        ? "bg-gray-100 hover:bg-gray-200 text-gray-800"
                        : "bg-gray-700 hover:bg-gray-600 text-gray-200"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span>View Code</span>
                  </motion.a>
                  {/* <motion.a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </motion.a> */}
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
