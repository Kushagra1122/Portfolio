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
      title: "Approval Orchestrator",
      description:
        "A modern, intelligent approval workflow system transforming manual approvals into automated, auditable workflows.",
      period: "Sep 2025 -- Oct 2025",
      achievements: [
        "Built a modern, intelligent <strong>approval workflow system</strong> transforming manual approvals into automated, auditable workflows.",
        "Implemented <strong>multi-channel notifications</strong> (Slack, Email, Web) for real-time status updates.",
        "Developed analytics dashboards powered by <strong>Recharts</strong> with process and timeline visualization.",
        "Enabled <strong>rollback system</strong>, smart routing, timeout handling, and background <strong>cron jobs</strong> for clean process automation.",
      ],
      technologies: ["Node.js", "SQLite", "React", "Cron Jobs", "Webhooks"],
      githubLink: "https://github.com/Kushagra1122/approval-orchestrator",
      demoLink: "#",
    },
    {
      title: "StreamSync",
      description:
        "Real-time video streaming platform supporting multiple concurrent streams with minimal latency.",
      period: "Mar 2025 -- Jul 2025",
      achievements: [
        "Created a <strong>real-time video streaming</strong> platform supporting multiple concurrent streams with minimal latency.",
        "Introduced <strong>live chat</strong>, superchat donations, and subscription management.",
        "Enabled <strong>screen sharing</strong> and seamless session joining for collaboration.",
        "Enhanced scalability by refining <strong>WebRTC</strong> signaling for low-latency peer connections.",
      ],
      technologies: ["Node.js", "React.js", "Express.js", "MongoDB", "WebRTC", "Socket.io"],
      githubLink: "https://github.com/Kushagra1122/StreamSync",
      demoLink: "#",
    },
    {
      title: "Get Social",
      description:
        "Social media app featuring real-time messaging, friend requests, and profile management.",
      period: "Jan 2025 -- Feb 2025",
      achievements: [
        "Designed a <strong>social media app</strong> featuring <strong>real-time</strong> messaging, friend requests, and profile management.",
        "Applied secure <strong>authentication</strong> with <strong>JWT</strong>, role-based access, and encrypted storage.",
        "Improved <strong>MongoDB</strong> for scalability and faster queries.",
        "Implemented globally unique identifiers with <strong>UUID</strong> for distributed system consistency.",
      ],
      technologies: ["React Native", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      githubLink: "https://github.com/Kushagra1122/Texting",
      demoLink: "#",
    },
    {
      title: "Study AI",
      description:
        "Contextual AI chatbot for YouTube videos enabling interactive, topic-specific learning.",
      period: "Jun 2025 -- Jul 2025",
      achievements: [
        "Developed a <strong>contextual AI chatbot</strong> for YouTube videos enabling interactive, topic-specific learning.",
        "Connected <strong>Gemini API</strong> for automatic transcript summarization and question-answer generation.",
        "Used <strong>FastAPI</strong> and <strong>Express.js</strong> microservices to process requests asynchronously with low latency.",
        "Packaged extension for Chrome Web Store with persistent in-page floating UI button for seamless access.",
      ],
      technologies: ["FastAPI", "Express.js", "Gemini API", "Chrome Extension"],
      githubLink: "https://github.com/Kushagra1122/Study-AI",
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
            <span className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}>
              Projects
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeColors.muted}`}>
            Innovative projects that showcase experimentation with emerging technologies 
            and a passion for building impactful solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className={`group relative rounded-2xl overflow-hidden ${themeColors.cardBg} ${themeColors.cardBorder} border ${themeColors.glow} transition-all duration-500`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${themeColors.gradientBorder} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-6 h-full flex flex-col z-10">
                {/* Header with icon */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                   
                    <h3 className={`text-2xl font-bold ${themeColors.text}`}>{project.title}</h3>
                  </div>
                </div>

                <div className="flex-grow">
                  <p className={`mb-3 leading-relaxed ${themeColors.secondary}`}>
                    {project.description}
                  </p>
                  
                  {project.period && (
                    <p className={`text-sm ${themeColors.muted} mb-4 font-mono`}>
                      {project.period}
                    </p>
                  )}

                  {project.achievements && (
                    <ul className={`mb-6 space-y-2 ${themeColors.secondary} text-sm`}>
                      {project.achievements.map((achievement, achIdx) => (
                        <motion.li
                          key={achIdx}
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: 10 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: idx * 0.15 + achIdx * 0.05 }}
                        >
                          <span className="text-green-500 mt-1.5 flex-shrink-0">▸</span>
                          <span 
                            className="leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: achievement }}
                          />
                        </motion.li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: idx * 0.15 + (project.achievements?.length || 0) * 0.05 + techIdx * 0.05 }}
                        className={`text-xs px-3 py-1.5 rounded-full ${themeColors.iconBg} font-medium border ${themeColors.cardBorder} transition-all hover:scale-105`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className={`flex space-x-4 mt-auto pt-4 border-t ${themeColors.border}`}>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold ${themeColors.button} transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="text-base" />
                    <span>View Code</span>
                  </motion.a>
                  {project.demoLink !== "#" && (
                    <motion.a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-5 py-2.5 rounded-lg text-sm font-semibold ${themeColors.cardBorder} border-2 ${themeColors.text} hover:${themeColors.accent} transition-all`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Live Demo →</span>
                    </motion.a>
                  )}
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
