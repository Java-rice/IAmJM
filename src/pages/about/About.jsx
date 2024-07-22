import React from "react";
import Navigation from "../../components/navigation/Navigation";

const About = () => {
  return (
    <div className="px-[10%] gap-[10%] font-rubik flex lg:flex-row justify-center items-center flex-col-reverse h-auto lg:min-h-screen py-auto">
      <div className="lg:w-[35%] w-[100%]">
        <div>
          <h2>ABOUT ME</h2>
          <h1>ABOUT ME</h1>
        </div>
        <p>A Computer Science student with a passion for technology, I'm excited about exploring different career paths in the tech world. I actively seek out new experiences that help me grow, whether that's learning a new coding language or exploring data analysis. My enthusiasm for tech drives me to discover the opportunities that will shape my future career.</p>
      </div>
      <Navigation></Navigation>
    </div>
  );
};

export default About;
