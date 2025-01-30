import React from "react";
import { List } from "../utils/list";

import { JackInTheBox } from "react-awesome-reveal";

const TechStack = () => {
  return (
    <div id="techstack">
      <h2 className=" my-10 text-3xl text-center font-serif">
        Technologies Stack
      </h2>

      <br />
      <p className="text-xl my-5 text-center">
        👉 including programming Languages, frameworks, databses, front-end and
        back-end tools, and APIs
      </p>

      <br />
      <div className="flex flex-wrap justify-center  gap-5 ">
        {List.map((tech) => (
          <JackInTheBox>
            <div key={tech._id} className="  ">
              <div className="rounded-xl overflow-hidden shadow-xl cursor-pointer  light:text-black dark:text-black h-32 w-52 transition ease-in-out  bg-gray-200 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300">
                <div className="p-10 ">
                  <div className="flex justify-start gap-2 items-center ">
                    <tech.icon size={40} />
                    <span className="text-lg">{tech.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </JackInTheBox>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
