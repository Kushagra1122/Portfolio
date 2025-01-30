import React from "react";
import { MdSchool } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div className="bg-gray-300 p-8 " id="education">
        <h2 className="my-10  light:text-black dark:text-black text-3xl text-center font-serif">
          Education Details
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title text-xl text-green-600">
              B Tech
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              NIT Surathkal , IN
            </h4>
          </VerticalTimelineElement>
         
        </VerticalTimeline>
      </div>
    
    </>
  );
};

export default Education;
