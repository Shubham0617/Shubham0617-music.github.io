/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import 'animate.css';
import { skills } from "../../constants";

const Skill = () => {
  return (
    <div className="bg-zinc-900" id='skill'>
      <div className="bg-zinc-700 sm:w-[70%] m-auto flex flex-col justify-center items-center p-[2rem]">
        <h2 className="text-white text-[3rem] opacity-[0.8] font-bold font-serif">
          SKILLS
        </h2>
        <p className="text-white text-[1.3rem] opacity-[0.5] font-normal font-serif mt-[20px] mb-[2rem] text-center">
          Skills I've acquired and utilized extensively in real-world
          situations, demonstrating my ability to apply knowledge, solve complex
          problems, and adapt to new tools and technologies effectively.s
        </p>
        <div className="flex flex-row justify-center items-center flex-wrap gap-[2rem]">
          {skills.map((item, index) => (
            <div
              key={index}
              className="hover:bg-sky-700 bg-white w-[100px] flex flex-col justify-center items-center rounded-xl px-[10px] py-[20px]"
            >
              <img src={item.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
