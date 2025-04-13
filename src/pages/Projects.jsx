import React from "react";
import LayoutCards from "@src/components/cards/LayoutCards";
import ProjectCards from "@src/components/cards/ProjectCards";
import EmblaCarousel from '@src/pages/projects/EmblaCarousel';
import projectData from '@src/contents/projects/project';
import '@src/pages/projects/Projects.css';

const OPTIONS = { dragFree: true, loop: true };

const Projects = () => {
  return (
    <div className="px-[10%] lg:gap-10 gap-3 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="flex flex-col justify-center w-full">
        <div className="w-full text-center mb-4 text-[#FDFDFD]">
          <h1 className="font-bold text-2xl">
            WORKS <span className="text-[#F5B301]">&</span> PROJECTS
          </h1>
        </div>
        <EmblaCarousel options={OPTIONS}>
          {projectData.map((project, index) => (
            <ProjectCards 
              key={index} 
              title={project.title} 
              description={project.description} 
              imageSrc={project.imageSrc} 
            />
          ))}
        </EmblaCarousel>
      </div>
      <div className="w-full">
        <div className="w-full mb-4 text-center text-[#FDFDFD]">
          <h1 className="font-bold text-2xl">
            DESIGN <span className="text-[#F5B301]">&</span> LAYOUTS
          </h1>
        </div>
        <LayoutCards />
      </div>
    </div>
  );
};

export default Projects;
