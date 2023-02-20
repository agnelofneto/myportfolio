import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScriptimg from "../assets/js.png";
import Reactimg from "../assets/reactimg.png";
import GITHUB from "../assets/github.png";
import BOOTSTRAP from "../assets/bootstrap.png";

const Skills = () => {
  return (
    <div name="skills" className=" text-gray-300 ">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-green-500 py-4">
            Skills
          </p>
          <p className="py-4 mt-10">//These are the technologies I've worked with </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={JavaScriptimg}
              alt="JavaScript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={Reactimg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={GITHUB} alt="React icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={BOOTSTRAP} alt="React icon" />
            <p className="my-4">BOOTSTRAP</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
