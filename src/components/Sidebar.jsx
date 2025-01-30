import React from "react";
import Home from "../pages/Home";

import Menus from "./Menus";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import Contact from "../pages/Contact";
import { useTheme } from "../context /Theme";

const Sidebar = () => {
  const [theme] = useTheme();

  return (
    <div>
      <div>
        <aside
          className={`fixed top-0 left-0 h-screen 
            w-52 big `}
        >
          <div className="h-full px-3 py-4 overflow-y-auto bg-[#1e1e1e]">
            <div
              className={`text-white w-8 text-3xl  
             ml-40  `}
            ></div>
            <div>
              <Menus />
            </div>
          </div>
        </aside>
        <div className={`width `} id={theme}>
          <Home />
          <About />
          <Education />
          <TechStack />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
