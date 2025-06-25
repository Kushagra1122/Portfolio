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

const Education = () => {
  const [theme] = useTheme();
  const isLight = theme === "light";
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Color definitions
  const colors = {
    light: {
      bg: "bg-gradient-to-b from-gray-50 to-gray-100",
      text: "text-gray-900",
      secondaryText: "text-gray-600",
      accent: "text-blue-600",
      cardBg: "#ffffff",
      cardText: "text-gray-800",
      timelineLine: "#e5e7eb",
      schoolIcon: "#0f766e",
      workIcon: "#1e40af",
    },
    dark: {
      bg: "bg-gradient-to-b from-gray-900 to-gray-800",
      text: "text-white",
      secondaryText: "text-gray-400",
      accent: "text-blue-400",
      cardBg: "#1f2937",
      cardText: "text-gray-300",
      timelineLine: "#374151",
      schoolIcon: "#14b8a6",
      workIcon: "#3b82f6",
    },
  };

  const themeColors = colors[theme];

  const timelineElements = [
    {
      type: "education",
      date: "2023 – Present",
      title: "B.Tech in Electrical & Electronics Engineering",
      subtitle: "NIT Karnataka, Surathkal",
      details: [
        "<strong>CGPA:</strong> 7.1/10 (Current)",
      ],
      icon: <MdSchool />,
      iconBg: themeColors.schoolIcon,
      textColor: "text-green-500 dark:text-green-400",
    },
    {
      type: "work",
      date: "Feb 2025 – Mar 2025",
      title: "Frontend Developer Intern",
      subtitle: "Advista ",
      details: [
        "Built responsive UIs using React.js and Redux Toolkit",
        "Collaborated with designers for pixel-perfect components",
        "Improved performance via code-splitting and lazy loading",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: "text-blue-600 dark:text-blue-400",
    },
    {
      type: "work",
      date: "May 2025 – Jul 2025",
      title: "React Native Developer Intern",
      subtitle: "Qlue ",
      details: [
        "Built mobile apps using React Native",
        "Implemented real-time chat with Socket.io & Firebase",
        "Created push notification system increasing engagement by 40%",
      ],
      icon: <MdWork />,
      iconBg: themeColors.workIcon,
      textColor: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`py-20 px-6 transition-colors duration-300 ${themeColors.bg}`}
      id="education"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education & <span className={themeColors.accent}>Experience</span>
        </motion.h2>
        <motion.p
          className={`text-center mb-16 text-lg ${themeColors.secondaryText}`}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          A timeline of my academic background and professional journey
        </motion.p>

        <VerticalTimeline
          lineColor={themeColors.timelineLine}
          layout="1-column-left"
        >
          {timelineElements.map((item, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              date={item.date}
              dateClassName={`${themeColors.text} font-medium`}
              contentStyle={{
                background: themeColors.cardBg,
                color: isLight ? "#000" : "#fff",
                boxShadow: isLight
                  ? "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                  : "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${themeColors.cardBg}`,
              }}
              iconStyle={{
                background: item.iconBg,
                color: "#fff",
                boxShadow: `0 0 0 4px ${
                  isLight ? "#fff" : "#1f2937"
                }, 0 2px 5px 0 rgba(0,0,0,0.25)`,
              }}
              icon={item.icon}
              visible={inView}
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.15 }}
              >
                <h3 className={`text-xl font-semibold ${item.textColor}`}>
                  {item.title}
                </h3>
                <h4 className={`text-md font-medium ${themeColors.cardText}`}>
                  {item.subtitle}
                </h4>
                <div className="mt-3 space-y-2">
                  {item.details.map((detail, i) => (
                    <p
                      key={i}
                      className={`text-sm ${themeColors.cardText}`}
                      dangerouslySetInnerHTML={{ __html: detail }}
                    />
                  ))}
                </div>
              </motion.div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default Education;
