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
      details: ["<strong>CGPA:</strong> 7.1/10 (Current)"],
      icon: <MdSchool />,
      iconBg: themeColors.schoolIcon,
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
  ];


  return (
    <section
      id="education"
      ref={ref}
      className={`py-24 transition-colors duration-500 ${themeColors.background}`}
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
