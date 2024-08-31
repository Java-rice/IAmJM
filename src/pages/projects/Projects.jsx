import React from "react";
import LayoutCards from "../../components/cards/LayoutCards";
import ProjectCards from "../../components/cards/ProjectCards";
import EmblaCarousel from './EmblaCarousel';
import './Projects.css';

const OPTIONS = { dragFree: true, loop: true };

const projectData = [
  {
    title: "To Do List Application",
    description: "A simple To-Do List application to keep track of tasks.",
    imageSrc: "path_to_image1.jpg"
  },
  {
    title: "Weather App",
    description: "A weather forecasting app with real-time data.",
    imageSrc: "path_to_image2.jpg"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills.",
    imageSrc: "path_to_image3.jpg"
  },
  {
    title: "E-Commerce Store",
    description: "A full-featured e-commerce store with cart and checkout.",
    imageSrc: "path_to_image4.jpg"
  },
  {
    title: "Social Media Dashboard",
    description: "A dashboard to manage social media accounts.",
    imageSrc: "path_to_image5.jpg"
  }
];

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
