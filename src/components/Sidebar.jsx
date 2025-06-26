import React from "react";
import Home from "../pages/Home";
import About from "../pages/About";
import Education from "../pages/Education";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import Menus from "./Menus";
import { Element } from "react-scroll";
import { useTheme } from "../context/Theme";
import { getThemeColors } from "../utils/colors";

const Sidebar = () => {
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);

  return (
    <div
      className={`${theme} flex flex-col min-h-screen transition-colors duration-300`}
    >
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen w-60 z-50 shadow-lg transform transition-all duration-300 ease-in-out
          ${themeColors.background} ${themeColors.border} border-r`}
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-12 overflow-y-auto">
          <div
            className={`text-center font-bold text-3xl tracking-widest p-3 rounded-lg
            ${themeColors.primaryBgLight} ${themeColors.primary} shadow-sm`}
          >
            KT
            <div className={`text-xs font-normal mt-1 ${themeColors.muted}`}>
              Portfolio
            </div>
          </div>
          <Menus />
        </div>
      </aside>

      <main
        className={`md:ml-60 w-full md:w-[calc(100%-16rem)] ${themeColors.background}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-8">
          <Element name="home">
            <Home />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="education">
            <Education />
          </Element>
          <Element name="techstack">
            <TechStack />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
