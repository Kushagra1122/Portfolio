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
import { getThemeColors } from "../utils/colors";

function Menus({ onLinkClick }) {
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  const menuItems = [
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
  ];

  return (
    <nav className="space-y-2">
      <Fade cascade damping={0.1} direction="up" triggerOnce>
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            onClick={onLinkClick}
            className={`flex items-center p-3 rounded-lg transition-all cursor-pointer
              ${themeColors.text} hover:bg-green-50/50 dark:hover:bg-green-900/20 hover:text-green-600 dark:hover:text-green-400
              group transition-colors duration-300`}
            activeClass={`bg-green-100/80 dark:bg-green-900/30 ${themeColors.accent} border-l-green-500 dark:border-l-green-400 border-l-4 font-medium`}
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
