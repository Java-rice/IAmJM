import React from "react";
import ProjectCards from "../../components/cards/ProjectCards";
import LayoutCards from "../../components/cards/LayoutCards";

const Projects = () => {
  return (
    <div className="px-[10%] lg:gap-10 gap-3 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="flex flex-col justify-center px-auto">
        <div className="w-full text-center mb-4 text-[#FDFDFD]">
          <h1 className="font-bold text-2xl">
            WORKS <span className="text-[#F5B301]">&</span> PROJECTS
          </h1>
        </div>
        <ProjectCards></ProjectCards>
        <div></div>
      </div>
      <div>
        <div className="w-ful mb-4 text-center text-[#FDFDFD]">
          <h1 className="font-bold text-2xl">
          DESIGN <span className="text-[#F5B301]">&</span> LAYOUTS
          </h1>
        </div>
        <LayoutCards></LayoutCards>
        <div></div>
      </div>
    </div>
  );
};

export default Projects;
