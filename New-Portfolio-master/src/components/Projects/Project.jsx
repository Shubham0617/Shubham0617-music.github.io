

import P0 from "../../assets/P0.png";
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
import P5 from "../../assets/P5.png";
import P6 from "../../assets/P6.png";
import P7 from "../../assets/P7.png";
import P8 from "../../assets/P8.png";

const Project = () => {
  const data = [
    {
      id: 0,
      img: P0,
      name: "Tomato",
      link: "https://food-ordering-frontend-uly6.onrender.com/",
    },
    {
      id: 1,
      img: P1,
      name: "Shop.co",
      link: "https://e-commerce-mridul.netlify.app/",
    },
    {
      id: 2,
      img: P2,
      name: "Music Academy",
      link: "https://music-school-mridul.netlify.app/",   
     },
    {
      id: 3,
      img: P3,
      name: "Shoe Verse",
      link: "https://mriduls.netlify.app/",   
     },
    {
      id: 4,
      img: P4,
      name:"Recipe App",
      link:"https://recipe-mridul.netlify.app/",
    },
    {
      id: 5,
      img: P5,
      name:"Car Rentals",
      link:"https://car-rentals-mridul.netlify.app/",
    },
    {
      id: 6,
      img: P6,
      name:"MyTube App",
      link:"https://mytube-mridul.netlify.app/",
    },
    {
      id: 7,
      img: P7,
      name:"Restaurant",
      link:"https://restaurant-mridul.netlify.app/",
    },
    {
      id: 8,
      img: P8,
      name:"Crypto App",
      link:"https://cryyptomridul.netlify.app/",
    },
  ];

  return (
    <div className="bg-black" id="project">
      <div className="p-[1rem] sm:p-[2rem]">
        <h1 className="text-white text-[3rem] opacity-[0.8] font-bold font-serif text-center">
          Projects
        </h1>

        <p className="text-white text-[1.3rem] opacity-[0.5] font-normal font-serif mt-[20px] mb-[2rem] text-center">
          &quot; Explore a curated selection of my diverse projects, showcasing
          expertise in web development, data analysis, and innovative
          problem-solving. Each project highlights my skills in coding, design,
          and collaboration, demonstrating a commitment to delivering
          high-quality, impactful solutions in various domains.&quot;
        </p>

        <div className="flex flex-row justify-center gap-[2rem] flex-wrap">
          {data.map((item) => (
            <div
              className="relative group w-[100%] md:w-[40%] lg:w-[30%] overflow-hidden"
              key={item.id}
            >
              <img
                src={item.img}
                alt=""
                className="w-full border-4 border-solid border-white cursor-pointer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-y-0 translate-y-full">
                <h1 className="text-white mb-4 font-bold font-sans">{item.name}</h1>
                <button className="bg-white text-black py-2 px-4 rounded">
                  <a href={item.link}  target="_blank" className="font-bold font-sans">Live</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
