import React, { useState } from "react";
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
import { HiMenu, HiX } from "react-icons/hi";

const Sidebar = () => {
  const [theme] = useTheme();
  const themeColors = getThemeColors(theme);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${theme} flex flex-col min-h-screen transition-colors duration-300`}
    >
      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`md:hidden fixed top-4 left-4 z-50 p-3 rounded-lg ${themeColors.cardBg} ${themeColors.cardBorder} border shadow-lg transition-all hover:scale-110`}
        aria-label="Toggle Menu"
      >
        {mobileMenuOpen ? (
          <HiX className={`text-2xl ${themeColors.accent}`} />
        ) : (
          <HiMenu className={`text-2xl ${themeColors.accent}`} />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <aside
        className={`md:hidden fixed top-0 left-0 h-screen w-64 z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } ${themeColors.background} ${themeColors.border} border-r`}
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-12 overflow-y-auto">
          <div className="relative group mt-12">
            <div
              className={`text-center font-bold text-3xl tracking-widest p-4 rounded-xl
            ${themeColors.cardBg} ${themeColors.primary} ${themeColors.cardBorder} border-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2">
                  <span>KT</span>
                </div>
                <div className={`text-xs font-normal mt-2 tracking-wider ${themeColors.accent} uppercase`}>
                  Portfolio
                </div>
              </div>
            </div>
          </div>
          <Menus onLinkClick={() => setMobileMenuOpen(false)} />
        </div>
      </aside>

      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex fixed top-0 left-0 h-screen w-60 z-50 shadow-lg transform transition-all duration-300 ease-in-out
          ${themeColors.background} ${themeColors.border} border-r`}
      >
        <div className="flex flex-col h-full px-6 py-8 space-y-12 overflow-y-auto">
          <div className="relative group">
            <div
              className={`text-center font-bold text-3xl tracking-widest p-4 rounded-xl
            ${themeColors.cardBg} ${themeColors.primary} ${themeColors.cardBorder} border-2 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-2">
                  <span>KT</span>
                </div>
                <div className={`text-xs font-normal mt-2 tracking-wider ${themeColors.accent} uppercase`}>
                  Portfolio
                </div>
              </div>
            </div>
          </div>
          <Menus />
        </div>
      </aside>

      <main
        className={`md:ml-60 w-full md:w-[calc(100%-16rem)] ${themeColors.background}`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8">
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
