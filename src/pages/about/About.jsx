import React from "react";
import Navigation from "../../components/navigation/Navigation";

const About = () => {
  return (
    <div className="px-[10%] gap-20 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-auto">
      <div className="flex lg:flex-row flex-col-reverse pt-20 ">
        <div className="lg:w-[35%] w-[100%] ">
          <div className="relative">
            <h2 className="text-[#F5B301] absolute text-5xl z-0 text-center left-20">
              ABOUT ME
            </h2>
            <h1 className="font-extrabold text-center text-5xl z-10">
              ABOUT ME
            </h1>
          </div>
          <p>
            A Computer Science student with a passion for technology, I'm
            excited about exploring different career paths in the tech world. I
            actively seek out new experiences that help me grow, whether that's
            learning a new coding language or exploring data analysis. My
            enthusiasm for tech drives me to discover the opportunities that
            will shape my future career.
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-bold text-3xl">
          <span className="text-[#F5B301]">PERSONAL</span>INFORMATION
        </h3>
        <div></div>
        <div></div>
        <div>
          <div>
            <p>
              Name:<span>John Mark Pacaldo Peroche</span>
            </p>
            <p>
              Age:<span>21 Years Old</span>
            </p>
            <p>
              Nationality:<span>Filipino</span>
            </p>
          </div>
          <div>
            <p>
              City:<span>John Mark Pacaldo Peroche</span>
            </p>
            <p>
              Province:<span>John Mark Pacaldo Peroche</span>
            </p>
            <p>
              Languages:<span>John Mark Pacaldo Peroche</span>
            </p>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
