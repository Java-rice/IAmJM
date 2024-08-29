import React from "react";
import Slider from "react-slick";
import ProjectCards from "../../components/cards/ProjectCards";
import LayoutCards from "../../components/cards/LayoutCards";

// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

  };

  return (
    <div className="px-[10%] lg:gap-10 gap-3 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="flex flex-col justify-center w-full">
        <div className="w-full text-center mb-4 text-[#FDFDFD]">
          <h1 className="font-bold text-2xl">
            WORKS <span className="text-[#F5B301]">&</span> PROJECTS
          </h1>
        </div>
        <div className="slider-container w-full lg:w-[100%]">
          <Slider {...carouselSettings}>
            {[...Array(5)].map((_, index) => (
              <div key={index} className="slide-item">
                <ProjectCards />
              </div>
            ))}
          </Slider>
        </div>
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
