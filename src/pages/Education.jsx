import React from "react";
import { MdSchool, MdWork } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../context/Theme";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { getThemeColors } from "../utils/colors";

const Education = () => {
  const [theme] = useTheme();
  const isLight = theme === "light";
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const themeColors = getThemeColors(theme);

  const timelineElements = [
    {
      type: "education",
      date: "Aug 2023 – Apr 2027",
      title: "B.Tech in Electrical and Electronics Engineering",
      subtitle: "NIT Karnataka, Surathkal",
      details: ["<strong>CGPA:</strong> 7.14/10 (Current)"],
      icon: <MdSchool />,
      iconBg: themeColors.schoolIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "Dec 2025",
      title: "Freelance project",
      subtitle: "BaitAI (Remote)",
      details: [
        "Developed an <strong>AI-powered interview system</strong> using <strong>Django</strong> for backend orchestration and API management.",
        "Integrated <strong>OpenAI Whisper</strong> with <strong>PCM16 audio pipelines</strong> for accurate real-time speech-to-text transcription.",
        "Designed scalable media storage using <strong>Google Cloud Storage (GCS)</strong> for interview audio and metadata.",
        "Implemented end-to-end interview workflows including audio capture, transcription, and structured response persistence.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "Nov 2025 – Dec 2025",
      title: "Backend and AI Intern",
      subtitle: "Spoken Tutorial, IIT Bombay (Remote)",
      details: [
        "Designed and deployed a <strong>LangGraph-based course outline chatbot</strong> generating personalized curricula.",
        "Engineered a <strong>context-aware conversational AI agent</strong> supporting <strong>10+ turn dialogues</strong> with improved response relevance.",
        "Implemented <strong>Google OAuth</strong> with domain-level access control to secure internal tools.",
        "Optimized agent workflows and prompt routing, achieving <strong>~35% faster response times</strong> and reduced token usage.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "Aug 2025 – Oct 2025",
      title: "Software Development Engineer Intern",
      subtitle: "Acredge (Remote)",
      details: [
        "Improved search performance by <strong>60%</strong> by refactoring sequential pipelines into a <strong>parallel processing architecture</strong>.",
        "Built an <strong>intent-driven real estate chatbot</strong> using <strong>n8n</strong> with workflow-based natural language understanding.",
        "Developed a <strong>recommendation engine</strong> using <strong>Recombee</strong> with collaborative and personalized filtering strategies.",
        "Resolved critical production issues, improving overall system reliability and user experience.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "May 2025 – Jul 2025",
      title: "React Native Developer",
      subtitle: "Qlue (Remote)",
      details: [
        "Engineered <strong>cross-platform mobile apps</strong> using <strong>React Native</strong> with modular architecture.",
        "Implemented <strong>real-time chat</strong> with <strong>Socket.io</strong> & <strong>Firebase Firestore</strong>, achieving <strong>99% delivery rate</strong>.",
        "Integrated <strong>FCM push notifications</strong> to boost user engagement.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "Jun 2025 – Aug 2025",
      title: "Software Development Engineer Intern",
      subtitle: "LeastActions (Remote)",
      details: [
        "Developed a modular <strong>IDE frontend</strong> using <strong>TypeScript</strong> and <strong>TanStack Router</strong>.",
        "Built <strong>RESTful backend APIs</strong> enabling code execution, file management, and collaborative workflows.",
        "Implemented comprehensive <strong>unit tests and integration tests</strong> to ensure API reliability and prevent regressions.",
        "Deployed services on <strong>AWS EC2</strong> with <strong>Nginx</strong> and configured <strong>CI/CD pipelines</strong> for automated testing and deployment.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
    {
      type: "work",
      date: "Jan 2025 – Feb 2025",
      title: "Frontend Developer",
      subtitle: "Advista (Remote)",
      details: [
        "Built modular, <strong>responsive UI</strong> with <strong>React.js</strong> & <strong>Tailwind CSS</strong>.",
        "Optimized performance using <strong>code splitting</strong>, <strong>lazy loading</strong>, and refined <strong>routing</strong>.",
        "Transformed <strong>Figma designs</strong> into interactive interfaces with efficient <strong>state management</strong>.",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: themeColors.accent,
    },
  ];


  return (
    <section
      id="education"
      ref={ref}
      className={`py-20 md:py-24 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${themeColors.background}`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education &{" "}
            <span className={`${themeColors.accent} font-extrabold bg-clip-text bg-gradient-to-r ${themeColors.gradientBorder}`}>
              Experience
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${themeColors.muted}`}>
            A simple timeline of school and work so far.
          </p>
        </motion.div>

        <VerticalTimeline
          lineColor={themeColors.timelineLine}
          layout="1-column-left"
        >
          {timelineElements.map((item, index) => {
            const cardBgColor = isLight ? "#ffffff" : "#1f2937";
            const cardBorderColor = isLight ? "#e5e7eb" : "#374151";
            
            return (
              <VerticalTimelineElement
                key={index}
                className="vertical-timeline-element"
                date={item.date}
                dateClassName={`${themeColors.text} font-medium`}
                contentStyle={{
                  background: cardBgColor,
                  color: isLight ? "#1e293b" : "#f1f5f9",
                  boxShadow: isLight
                    ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 0 20px rgba(34, 197, 94, 0.1)",
                  borderRadius: "1rem",
                  border: `1px solid ${cardBorderColor}`,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${cardBgColor}`,
                }}
                iconStyle={{
                  background: item.iconBg,
                  color: "#fff",
                  boxShadow: isLight
                    ? `0 0 0 4px #ffffff, 0 2px 5px 0 rgba(0,0,0,0.25)`
                    : `0 0 0 4px #1f2937, 0 2px 5px 0 rgba(0,0,0,0.25), 0 0 20px rgba(34, 197, 94, 0.3)`,
                }}
                icon={item.icon}
                visible={inView}
              >
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <h3 className={`text-xl font-bold ${item.textColor} mb-2`}>
                    {item.title}
                  </h3>
                  <h4 className={`text-md font-medium ${themeColors.secondary} mb-3`}>
                    {item.subtitle}
                  </h4>
                  <div className="mt-3 space-y-2">
                    {item.details.map((detail, i) => (
                      <p
                        key={i}
                        className={`text-sm leading-relaxed ${themeColors.secondary}`}
                        dangerouslySetInnerHTML={{ __html: detail }}
                      />
                    ))}
                  </div>
                </motion.div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
