/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
import Insta from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Twitter from "../../assets/twitter.png";
import GitHub from "../../assets/github.png";
// import Ham from "../../assets/hamburger.png";
import Ham from "../../assets/ham.png";
import Cross from "../../assets/cross.png";
import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import nameLogo from "./1.png";

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="bg-zinc-900 hidden md:flex flex-row py-[2rem] px-[1rem] lg:px-[2rem] justify-between items-center">
        {/* <h2 className="font-bold text-[1.8rem] lg:text-[2rem] text-white font-mono">
          MRIDUL
        </h2> */}
        <img src={nameLogo} alt="" className="h-[100px]" />

        <div className="flex flex-row items-center gap-[1.5rem] lg:gap-[3rem]">
          <div className="list-none text-white flex gap-[15px] lg:gap-[20px] cursor-pointer">
            <li className="text-[1rem] lg:text-[1.3rem] opacity-[0.7] font-semibold font-sans">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                Home
              </Link>
            </li>
            <li className="text-[1rem] lg:text-[1.3rem] opacity-[0.7] font-semibold font-sans">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                Skills
              </Link>
            </li>
            <li className="text-[1rem] lg:text-[1.3rem] opacity-[0.7] font-semibold font-sans">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                Projects
              </Link>
            </li>
            <li className="text-[1rem] lg:text-[1.3rem] opacity-[0.7] font-semibold font-sans">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                Experience
              </Link>
            </li>
          </div>

          <div className="flex gap-[20px] cursor-pointer">
            <a
              href="https://www.instagram.com/its_mridulians/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
            >
              <img src={Insta} alt="Instagram" />
            </a>

            <a
              href="https://www.linkedin.com/in/mridulgupta21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
            >
              <img src={LinkedIn} alt="" />
            </a>
            <a
              href="https://www.instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px]"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://github.com/Mridulians/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] bg-white rounded-full"
            >
              <img src={GitHub} alt="" />
            </a>
          </div>

          <button className="p-[10px] border-2 border-solid border-white relative overflow-hidden group">
            <span className="relative z-10 font-bold text-white group-hover:text-black transition-colors duration-500">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                {" "}
                Let's Connect
              </Link>
            </span>

            <span className="absolute inset-0 bg-gray-300 transition-all duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
          </button>
        </div>
      </div>

      <nav className="flex md:hidden items-center justify-between px-[1rem] py-[10px] bg-zinc-900">
        {/* <h2 className="font-bold text-[2rem] text-white font-mono"></h2> */}
        <img src={nameLogo} alt="" className="h-[100px]" />
        <img
          src={Ham}
          alt=""
          className="w-[2rem] h-[2rem]"
          onClick={toggleSidebar}
        />
      </nav>
      {sidebarVisible && (
        <div className={`sidebar_content ${sidebarVisible ? "show" : ""}`}>
          <img
            src={Cross}
            alt=""
            onClick={toggleSidebar}
            className=" ml-[auto] my-[2rem] py-[0rem] px-[1rem]"
          />

          <div className="flex flex-col items-center justify-center list-none w-[100%]">
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                HOME
              </Link>
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              <Link
                to="skill"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                SKILLS
              </Link>
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              <Link
                to="project"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                PROJECTS
              </Link>
            </li>
            <li className="py-[20px] px-[0px] font-sans font-semibold w-[100%] text-center hover:bg-sky-500 hover:text-white">
              <Link
                to="experience"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                EXPERIENCE
              </Link>
            </li>
          </div>

          <button className="m-auto p-[10px] border-2 border-solid border-zinc-700 relative overflow-hidden group">
            <span className="relative z-10 font-bold text-black group-hover:text-white transition-colors duration-500">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={100}
                offset={-100}
              >
                {" "}
                Let's Connect
              </Link>
            </span>

            <span className="absolute inset-0 bg-zinc-700 transition-all duration-500 ease-out transform translate-x-[-100%] group-hover:translate-x-0"></span>
          </button>

          <div className="flex flex-row justify-center items-center w-[100%] gap-[2rem] py-[4rem] px-[0rem]">
            <a
              href="https://www.instagram.com/its_mridulians/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <img src={Insta} alt="Instagram" />
            </a>

            <a
              href="https://www.instagram.com/its_mridulians/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <img src={Twitter} alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/mridulgupta21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <img src={LinkedIn} alt="" />
            </a>

            <a
              href="https://github.com/Mridulians/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[30px] h-[30px]"
            >
              <img src={GitHub} alt="" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
