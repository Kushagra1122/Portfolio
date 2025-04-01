import React from "react";
import { Bounce } from "react-awesome-reveal";
import chat from "../assets/images/chat.png";
import ecommerce from "../assets/images/E-commerce.png";
import sastaChatGPT from "../assets/images/sastaChatgpt.png";
import streamSync from "../assets/images/streamSync.jpeg";

const Projects = () => {
  return (
    <div>
      <h2
        className="my-10  text-3xl text-center font-serif text-green-600"
        id="projects"
      >
        Top Recent Projects
      </h2>

      <p className="pb-3 text-center">
        Developed and maintained full-stack applications improving user
        engagement and operational efficiency.
      </p>

      <div className="flex px-2  justify-center flex-wrap gap-20">
        <Bounce>
          {/* E-commerce Website Project */}
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl transition-all hover:scale-105">
            <div className="px-6 py-4">
              <div className="flex gap-2 items-center">
                <div className="flex flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full Stack
                  </span>
                  <img
                    src={ecommerce}
                    alt="E-commerce"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-3">
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Node
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Express
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  React
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  MongoDB
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  JWT
                </span>
              </div>
              <div className="text-center mt-5">
                <h6 className="text-xl">E-commerce Website</h6>
                <p className="text-gray-700 py-2">
                  An e-commerce platform built to handle online transactions,
                  user management, and product listings.
                </p>
                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white text-black"
                  href="https://github.com/Kushagra1122/e-commerce.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Chat App Project */}
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl transition-all hover:scale-105">
            <div className="px-6 py-4">
              <div className="flex justify-start gap-2 items-center">
                <div className="flex flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full Stack
                  </span>
                  <img
                    src={chat}
                    alt="Chat App"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-3">
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Node
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Express
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  React
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  MongoDB
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Socket.IO
                </span>
              </div>
              <div className="text-center mt-5">
                <h6 className="text-xl">Chat App</h6>
                <p className="text-gray-700 py-2">
                  A real-time chat application that allows users to communicate
                  via direct messages and group chats.
                </p>
                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white text-black"
                  href="https://github.com/Kushagra1122/Chat.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Sasta ChatGPT Project */}
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl transition-all hover:scale-105">
            <div className="px-6 py-4">
              <div className="flex justify-start gap-2 items-center">
                <div className="flex flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full Stack
                  </span>
                  <img
                    src={sastaChatGPT}
                    alt="Sasta ChatGPT"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-3">
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Node
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Express
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  React
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  MongoDB
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  lama Ai
                </span>
              </div>
              <div className="text-center mt-5">
                <h6 className="text-xl">Sasta ChatGPT</h6>
                <p className="text-gray-700 py-2">
                  A budget-friendly alternative to ChatGPT with simple
                  conversational AI powered by custom models.
                </p>
                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white text-black"
                  href="https://github.com/Kushagra1122/SastaChatGPT.git"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* StreamSync Project */}
          <div className="max-w-sm rounded-xl overflow-hidden shadow-xl transition-all hover:scale-105">
            <div className="px-6 py-4">
              <div className="flex justify-start gap-2 items-center">
                <div className="flex flex-col gap-2">
                  <span className="bg-orange-400 rounded-lg w-28 px-4 py-1">
                    Full Stack
                  </span>
                  <img
                    src={streamSync}
                    alt="StreamSync"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center mt-3">
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Node
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Express
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  React
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  WebRTC
                </span>
                <span className="bg-yellow-300 p-2 text-black rounded-3xl">
                  Socket.IO
                </span>
              </div>
              <div className="text-center mt-5">
                <h6 className="text-xl">StreamSync</h6>
                <p className="text-gray-700 py-2">
                  A platform that allows users to synchronize live video streams
                  for seamless group watching.
                </p>
                <a
                  className="bg-green-400 px-4 py-2 rounded-xl hover:border border-black hover:bg-white text-black"
                  href="https://github.com/Kushagra1122/StreamSync.git"
                  target="_blank"
                  rel="noopener noreferrer"
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
};

export default Projects;
