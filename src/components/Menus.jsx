import React from "react";
import { Fade } from "react-awesome-reveal";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";
import { useTheme } from "../context/Theme";

function Menus() {
  const [theme] = useTheme();
  const isLight = theme === "light";

  // Color definitions
  const colors = {
    light: {
      text: "text-gray-700",
      hoverText: "text-blue-600",
      icon: "text-gray-600",
      hoverBg: "hover:bg-blue-50",
      activeBg: "bg-blue-100/80",
      activeBorder: "border-l-blue-500",
      activeText: "text-blue-700",
    },
    dark: {
      text: "text-gray-300",
      hoverText: "text-blue-400",
      icon: "text-gray-400",
      hoverBg: "hover:bg-gray-700",
      activeBg: "bg-gray-700/80",
      activeBorder: "border-l-blue-400",
      activeText: "text-blue-400",
    },
  };

  const themeColors = isLight ? colors.light : colors.dark;

  return (
    <nav className="space-y-2">
      <Fade cascade damping={0.1} direction="up" triggerOnce>
        {[
          { icon: <FcHome className="text-xl" />, name: "Home", to: "home" },
          { icon: <FcAbout className="text-xl" />, name: "About", to: "about" },
          {
            icon: <FcReadingEbook className="text-xl" />,
            name: "Education",
            to: "education",
          },
          {
            icon: <FcBiotech className="text-xl" />,
            name: "Tech Stack",
            to: "techstack",
          },
          {
            icon: <FcVideoProjector className="text-xl" />,
            name: "Projects",
            to: "projects",
          },
          {
            icon: <FcBusinessContact className="text-xl" />,
            name: "Contact",
            to: "contact",
          },
        ].map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`flex items-center p-3 rounded-lg transition-all cursor-pointer
              ${themeColors.text} ${themeColors.hoverBg} hover:${themeColors.hoverText}
              group transition-colors duration-200`}
            activeClass={`${themeColors.activeBg} ${themeColors.activeText} ${themeColors.activeBorder} border-l-4 font-medium`}
          >
            <span className="mr-4">{item.icon}</span>
            <span>{item.name}</span>
          </Link>
        ))}
      </Fade>
    </nav>
  );
}

export default Menus;
