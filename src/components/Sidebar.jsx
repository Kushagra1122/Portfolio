import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Menus from "./Menus";
import { useTheme } from "../context/Theme";

const Sidebar = () => {
  const [theme] = useTheme();
  const isLight = theme === "light";

  // Color definitions for consistent usage
  const colors = {
    light: {
      primary: "text-blue-700",
      primaryBg: "bg-blue-600",
      primaryBgLight: "bg-blue-50",
      secondary: "text-gray-700",
      secondaryBg: "bg-gray-100",
      background: "bg-white",
      border: "border-gray-200",
      text: "text-gray-800",
      muted: "text-gray-500",
    },
    dark: {
      primary: "text-blue-400",
      primaryBg: "bg-blue-700",
      primaryBgLight: "bg-blue-900 bg-opacity-40",
      secondary: "text-gray-300",
      secondaryBg: "bg-gray-800",
      background: "bg-gray-900",
      border: "border-gray-700",
      text: "text-gray-100",
      muted: "text-gray-400",
    },
  };

  const themeColors = isLight ? colors.light : colors.dark;

  return (
    <div className={`${theme} flex transition-colors duration-300 min-h-screen`}>
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 z-50 shadow-lg transform transition-all duration-300 ease-in-out
          ${themeColors.background} ${themeColors.border} border-r`}
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-12 overflow-y-auto">
          {/* Logo / Name */}
          <div className={`text-center font-bold text-3xl tracking-widest p-3 rounded-lg
            ${themeColors.primaryBgLight} ${themeColors.primary} shadow-sm`}>
            KT
            <div className={`text-xs font-normal mt-1 ${themeColors.muted}`}>
              Portfolio
            </div>
          </div>

          {/* Navigation Menu */}
          <Menus />
          
          {/* Footer */}
          <div className={`mt-auto pt-4 border-t ${themeColors.border} border-opacity-20 text-sm text-center ${themeColors.muted}`}>
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`ml-64 w-[calc(100%-16rem)] ${themeColors.background}`}>
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Home />
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default Sidebar;