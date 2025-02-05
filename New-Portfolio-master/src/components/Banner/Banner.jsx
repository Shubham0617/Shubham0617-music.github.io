/* eslint-disable react/no-unescaped-entities */
import "./Banner.css";
import Typewriter from "typewriter-effect";
import BannerImg from "../../assets/banner_img.svg";
import Cv from "./Mridul_Resume.pdf";

const Banner = () => {
  return (
    <>
      <div
        className="main h-fit md:h-[100vh] flex flex-col md:flex-row justify-around items-center px-[1rem] md:px-[2rem]"
        id="home"
      >
        {/* <h1>Hi i'm MRIDUL GUPTA </h1> */}

        <div className="new_modify w-[100%] md:w-[60%] mt-[2rem]">
          <p className="text-white font-sans font-bold p-[10px] border-2 border-solid border-white w-fit bg-gradient-to-r from-purple-500 to-pink-500">
            Welcome To My Portfolio
          </p>
          <h3 className="text-white text-[2rem] md:text-[3rem] font-bold font-sans">
            Hi I'm MRIDUL GUPTA
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "Software Developer",
                  "UI/UX Developer",
                  "Web Developer",
                  "Web Designer",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h3>
          <p className="text-white opacity-[0.6] mt-[10px] font-serif text-[20px]">
            As a software developer with more than a year of experience, I
            specialize in frontend development. My skill set includes web
            development, web design, and web app development using React.js,
            Tailwind CSS, Next.js, Redux, Node.js, and Express.js. I focus on
            creating sleek, responsive, and high-performance web applications.
          </p>

          <button className="btn-grad">
            <a href={Cv} download="Mridul_Resume">
              {" "}
              get resume
            </a>
          </button>
        </div>

        <div className="w-[100%] md:w-[40%]">
          <img src={BannerImg} alt="" className="bounce-animation" />
        </div>
      </div>
    </>
  );
};

export default Banner;


         
