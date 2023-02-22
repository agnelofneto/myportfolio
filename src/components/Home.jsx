import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-green-500">Hi , my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#009929]">
          Agnelo Neto
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#5ccb5f]">
          {" "}
          I'm Front-end Developer from Porto-Portugal
        </h2>
        <p className="text-gray-50 text-2xl py-3 max-w-[700px]">
          {" "}
          My current tools as a front-end developer include ReactJS, HTML, CSS and JavaScript, which I use to build portfolios and projects
        </p>
        <p className="text-gray-50 text-2xl  py-2 max-w-[700px]">
          Code version control: Github 
        </p>
        <p className="text-gray-50 text-2xl py-2 max-w-[700px]">
          Layout Design: Figma
        </p>


        <div>
          <button
            className="text-white group border-2 px-6 py-3 my-2 flex
       items-center hover:bg-green-500 hover:border-green-500 "
          >
            View Work
            <span className=" group-hover:rotate-90 duration-300">
              <AiOutlineArrowRight className="ml-3 hover:" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
