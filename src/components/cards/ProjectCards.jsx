import React from "react";
import { Button } from "@src/components/button/Button";
import { Link } from "react-router-dom";

const ProjectCards = ({ project, viewMode }) => {
  const { title, description, images, link } = project;
  const imageSrc = images?.[0];

  return (
    <div
      className={`border border-[#F5B301] bg-[#1E2329] rounded-xl shadow-md overflow-hidden ${
        viewMode === "list" ? "flex flex-col sm:flex-row" : ""
      }`}
    >
      {/* Image */}
      <div
        className={`w-full ${
          viewMode === "list" ? "sm:w-1/2 h-[200px]" : "h-[220px]"
        } bg-cover bg-center`}
        style={{ backgroundImage: `url(${imageSrc})` }}
      />

      {/* Info */}
      <div className="p-5 flex flex-col gap-4 sm:w-full">
        <h3
          className={`text-[#F5B301] font-bold text-lg ${
            viewMode === "list" ? "text-left" : "text-center"
          }`}
        >
          {title}
        </h3>
        <p className="text-sm text-[#FDFDFD] text-justify">{description}</p>

        <Link to={link}>
          <div
            className={`w-full mt-2 flex ${
              viewMode === "list" ? "justify-start" : "justify-center"
            }`}
          >
            <Button variant="solid" className="w-[12rem]">
              View Project
            </Button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCards;
