import React from "react";
import Typewriter from "typewriter-effect";
import Resume from "../assets/docs/resume.txt";
import { useTheme } from "../context /Theme";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const [theme, setTheme] = useTheme();
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <div>
      <div
        className="fixed text-white z-40 rounded-full p-3 flex items-center justify-center h-12 w-12 bg-gray-700 mt-16 mr-5 text-center  right-0 cursor-pointer"
        onClick={handleTheme}
      >
        {theme === "light" ? (
          <BsFillMoonStarsFill size={30} />
        ) : (
          <BsFillSunFill size={30} />
        )}
      </div>
      <div className="h-96 bg-black text-white px-10 py-24 " id="home">
        <Fade direction="right">
          <h2 className=" text-3xl">Hi 👋 I'm a</h2>
          <br />
          <h1 className=" text-4xl text-yellow-400">
            <Typewriter
              options={{
                strings: [
                  "FullStack Developer!",
                  "Mern Stack Developer!",
                  "React native developer!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </Fade>
        <Fade direction="up">
          <div className="flex gap-5 mt-10 text-xl">
            <button className=" px-5 py-2 rounded-lg text-black transition ease-in-out  bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ">
              Hire me
            </button>
            <a
              href="/Resume.pdf"
              download="Kushagra-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg text-black transition ease-in-out bg-yellow-400 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300"
            >
              My Resume
            </a>
          </div>
        </Fade>
      </div>
      <hr />
    </div>
  );
};

export default Home;
