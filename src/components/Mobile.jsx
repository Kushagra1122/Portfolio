import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  //handle open
  const handleOpen = () => {
    setOpen(!open);
  };

  // handle menu clicks
  const handleMenuClick = () => {
    setOpen(false);
  };
  return (
    <div className="small">
      <div className="overflow-hidden fixed w-full z-[1] top-0 ">
        <div className="h-[50px] w-full bg-[#1e1e1e] p-2">
          {open ? (
            <AiOutlineMenuFold
              size={30}
              className="text-[white] cursor-pointer"
              onClick={handleOpen}
            />
          ) : (
            <GiHamburgerMenu
              size={30}
              className="text-[white] cursor-pointer"
              onClick={handleOpen}
            />
          )}
        </div>
        {open && (
          <div className="h-auto w-[200px] bg-[#1e1e1e] pb-5 p-2.5 rounded-br-[10px]">
            <div className="text-white cursor-pointer flex flex-col gap-5 items-center ">
              <div className="nav-item">
                <div className="nav-link">
                  <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcHome />
                    Home
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcAbout />
                    About
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="education"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcReadingEbook />
                    Education
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="techstack"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBiotech />
                    Tech Stack
                  </Link>
                </div>

                <div className="nav-link">
                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcVideoProjector />
                    Projects
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcPortraitMode />
                    Work Experince
                  </Link>
                </div>
                <div className="nav-link">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={100}
                    onClick={handleMenuClick}
                  >
                    <FcBusinessContact />
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
