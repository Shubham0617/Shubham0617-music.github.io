/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../../constants";

const Exp = () => {
  return (
    <div className="bg-zinc-900" id="experience">
      <div className="px-[10px]">
        <h3 className="text-white text-[3rem] opacity-[0.8] font-bold font-serif text-center pt-[1rem]">
          Work Experience
        </h3>
        <p className="text-white text-[1.3rem] opacity-[0.5] font-normal font-serif mt-[20px] mb-[2rem] text-center">
          I've worked with all sorts of companies , leveling up my skills and
          teaming up with smart people. Here's the rundown:{" "}
        </p>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                className="text-white"
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <p
                    className="text-black font-medium font-base opacity-[0.5]"
                    style={{ margin: 0 }}
                  >
                    {experience.date}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2 text-black">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default Exp;
