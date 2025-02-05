/* eslint-disable react/no-unescaped-entities */
// import React from 'react'
// import Leet from '../../assets/Leet.png'
// import GFG from '../../assets/GFG.png'
// import Ninja from '../../assets/NINJA.png'
import "./Coding.css";

const Coding = () => {
  return (
    <div className="bg-zinc-700">
      <h3 className="text-white text-[3rem] opacity-[0.8] font-bold font-serif text-center pt-[1rem]">
          Coding Profiles
        </h3>
    <div className="mains">
      <div className="row flex flex-col md:flex-row flex-wrap">
        <div className="w-[100%] md:w-[45%] lg:w-[30%] cursor-pointer">
          <div className="card">
            <div className="cover item-a">
            <h2 className="text-center text-gray-100 opacity-[0.7] left-[50px]">Leetcode</h2>
              <div className="card-back">
                {/* <a href="#">Add to cart</a> */}
                <p className="text-white">
                  &quot; Having successfully tackled over 400 uniquely curated
                  challenges, I've honed my problem-solving skills to a fine
                  art, ensuring each solution is both innovative and effective.
                  &quot;{" "}
                </p>

                <a href="https://leetcode.com/u/gmridul898/" target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[45%] lg:w-[30%] cursor-pointer">
          <div className="card">
            <div className="cover item-b">
              <h2 className="text-center text-gray-100 opacity-[0.7]">Coding Ninjas</h2>

              <div className="card-back">
                <p className="text-white">
                  &quot;With a proven track record of conquering more than 200
                  meticulously selected problems, I bring a wealth of experience
                  and expertise to every new challenge I encounter. &quot;
                </p>
                <a href="https://www.naukri.com/code360/profile/Mridulians" target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] md:w-[45%] lg:w-[30%] cursor-pointer">
          <div className="card">
            <div className="cover item-c">
            <h2 className="text-center text-gray-100 opacity-[0.7]">Geeks For Geeks</h2>
              <div className="card-back">
                <p className="text-white">
                  &quot; Boasting a portfolio of over 100 expertly curated
                  problems solved, I have developed a deep understanding of
                  diverse challenges, delivering exceptional results
                  consistently.&quot;
                </p>
                <a href="https://www.geeksforgeeks.org/user/gmridul898/" target="_blank">View Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Coding;
















//col-md-4 col-sm-6 col-xs-12
{
  /* <div classNameName='border-2 border-solid border-gray-100 w-[30%] bg-gradient-to-r from-purple-500 to-pink-500'>
            <img src={Leet} alt="" />
            <p classNameName='text-white'>&quot; Having successfully tackled over 400 uniquely curated challenges, I've honed my problem-solving skills to a fine art, ensuring each solution is both innovative and effective. &quot; </p>
            <button>
                <a href="https://leetcode.com/u/gmridul898/">Visit Profile</a>
            </button>
         </div> */
}
