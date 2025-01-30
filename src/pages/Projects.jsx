import React from 'react'
import { Bounce } from "react-awesome-reveal";
import chat from "../assets/images/chat.png";
import ecommerce from "../assets/images/E-commerce.png";
const Projects = () => {
  return (
    <div>
      <h2
        className=" my-10 text-3xl text-center font-serif text-green-600"
        id="projects"
      >
        Top Recent Projects
      </h2>

      <p className="pb-3 text-center">
        Developed and maintained full-stack applications improving user
        engagement and operational efficiency.
      </p>
      <div className="flex justify-center flex-wrap gap-10">
        <Bounce>
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-4">
              <div className="flex  gap-2 items-center">
                <div className="flex flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full stack
                  </span>
                  <img src={ecommerce} alt="project1" />
                </div>
              </div>
              <br />
              <div className="flex flex-wrap gap-4 justify-center">
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Node
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Express
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  react
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Mongodb
                </span>
              </div>
              <div className="text-center">
                <h6 className="text-xl m-5">E commerce Website</h6>

                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white light:text-black dark:text-black "
                  href="https://github.com/Kushagra1122/e-commerce.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl">
            <div className="px-6 py-4">
              <div className="flex justify-start gap-2 items-center">
                <div className="flex  flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full stack
                  </span>
                  <img src={chat} alt="project1" />
                </div>
              </div>
              <br />
              <div className="flex flex-wrap gap-4 justify-center">
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Node
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Express
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  react
                </span>
                <span className=" bg-yellow-300 p-2 light:text-black dark:text-black rounded-3xl">
                  Mongodb
                </span>
              </div>
              <div className="text-center">
                <h6 className="text-xl m-5">Chat App</h6>

                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white light:text-black dark:text-black "
                  href="https://github.com/Kushagra1122/Chat.git"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </Bounce>
      </div>
    </div>
  );
}

export default Projects
