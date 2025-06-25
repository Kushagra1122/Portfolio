import React from "react";
import { List } from "../utils/list";
import { JackInTheBox } from "react-awesome-reveal";
import { useTheme } from "../context/Theme"; // Theme hook

const TechStack = () => {
  const [theme] = useTheme();
  const isLight = theme === "light";

  return (
    <section
      id="techstack"
      className={`py-24 transition-colors duration-300 ${
        isLight ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            My <span className="text-blue-600">Tech Stack</span>
          </h2>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isLight ? "text-gray-600" : "text-gray-400"
            }`}
          >
            A curated set of technologies I've used across the full stack — from
            frontend UIs to backend systems and deployment.
          </p>
        </div>

        {/* Tech Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {List.map((tech) => (
            <JackInTheBox key={tech._id} triggerOnce>
              <div
                className={`rounded-2xl shadow-md transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  isLight ? "bg-white" : "bg-gray-800"
                }`}
              >
                <div className="p-6 flex flex-col items-center text-center">
                  <tech.icon
                    size={48}
                    className="text-blue-600 dark:text-blue-400 mb-4"
                  />
                  <h3
                    className={`text-md font-semibold ${
                      isLight ? "text-gray-800" : "text-gray-100"
                    }`}
                  >
                    {tech.name}
                  </h3>
                </div>
              </div>
            </JackInTheBox>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
