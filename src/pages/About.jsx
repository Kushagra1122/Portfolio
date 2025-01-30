import React from "react";
import { Zoom } from "react-awesome-reveal";
import img from "../assets/images/profile.jpeg";

const About = () => {
  return (
    <div className="m-10" id="about">
      <Zoom>
        <div className="rounded-xl overflow-hidden shadow-xl ">
          <div className="px-6 py-4">
            <div className="flex flex-wrap justify-center gap-2 items-center">
              <img src={img} alt="profile pic" className="image rounded-xl" />
              <div className="">
                <p className="text-4xl text-center py-10 font-serif font-bold">
                  About me
                </p>

                <p className="py-10 px-2 text-lg  flex flex-col gap-4">
                  <div className="font-light">
                    I am a dedicated MERN stack developer with a passion for
                    building robust, scalable web applications. My expertise
                    lies in leveraging the power of MongoDB, Express.js, React,
                    and Node.js to create dynamic and responsive user
                    experiences. With a solid foundation in front-end and
                    back-end technologies, I excel at designing, developing, and
                    maintaining full-stack applications that meet the evolving
                    needs of users and businesses alike.
                  </div>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default About;
