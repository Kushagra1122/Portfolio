import React from 'react'
import { Fade } from 'react-awesome-reveal';
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcReadingEbook,
  FcVideoProjector,
} from "react-icons/fc";
import { Link } from "react-scroll";

function Menus() {
  return (
    <div className="text-white cursor-pointer flex flex-col items-center my-10 ">
      <div>
        <Fade direction="left">
          <div className="text-white cursor-pointer flex flex-col gap-5 items-center ">
            <div className="nav-link">
              <Link
                to="home"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcHome />
                <span className="lg:text-lg sm:text">Home</span>
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="about"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcAbout />
                <span className="text-lg">About</span>
              </Link>
            </div>
            <div className="nav-link">
              <Link
                to="education"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcReadingEbook />
                <span className="text-lg">Education</span>
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="techstack"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcBiotech />
                <span className="text-lg">Tech Stack</span>
              </Link>
            </div>

            <div className="nav-link">
              <Link
                to="projects"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcVideoProjector />
                <span className="text-lg">Projects</span>
              </Link>
            </div>
            <div>
              <Link
                to="contact"
                className="flex gap-2"
                spy={true}
                smooth={true}
                offset={-500}
                duration={500}
                activeStyle={{
                  color: "#f29f67",
                  borderLeft: "5px solid #f29f67",
                  paddingLeft: "10px",
                  textDecoration: "none",
                }}
              >
                <FcBusinessContact />
                <span className="text-lg">Contact</span>
              </Link>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default Menus
