import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { Button } from "../../components/button/Button";
import profileImage from "../../assets/profileimage.png"

const About = () => {
  return (
    <div className="px-[10%] gap-20 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-auto">
      <div className="flex lg:flex-row flex-col-reverse gap-20 pt-20 ">
        <div className="w-[100%] flex flex-col gap-16">
          <div className="relative">
            <h2 className="text-[#F5B301]  absolute inset-0 text-5xl z-0 text-center -top-4">
              ABOUT ME
            </h2>
            <h1 className="font-extrabold relative tracking-wide text-center text-5xl z-10">
              ABOUT ME
            </h1>
          </div>
          <p className="text-[#FDFDFD] text-base text-justify px-16 ">
            A Computer Science student with a passion for technology, I'm
            excited about exploring different career paths in the tech world. I
            actively seek out new experiences that help me grow, whether that's
            learning a new coding language or exploring data analysis. My
            enthusiasm for tech drives me to discover the opportunities that
            will shape my future career.
          </p>
          <Button></Button>
        </div>
        <div className="relative w-full lg:px-auto max-w-xs">
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 332 421" 
            fill="none" 
            preserveAspectRatio="xMidYMid meet" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="170.5" cy="229" rx="148.5" ry="164" fill="#F5B301" />
          </svg>
          <img 
            src={profileImage} 
            alt="Profile" 
            className="relative w-full h-auto object-cover"
          />
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
