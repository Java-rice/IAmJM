import React, { useEffect, useState } from "react";
import { Button } from "@src/components/button/Button";
import {
  ChevronLeft,
  ChevronRight,
  Eye,
  ExternalLink,
  Github,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectCards = ({ project, viewMode, onViewClick, noButton = false }) => {
  const { title, description, images, date } = project;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 18000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`border border-[#F5B301] bg-[#1E2329] rounded-xl shadow-md overflow-hidden relative ${
        viewMode === "list" ? "flex flex-col sm:flex-row" : ""
      }`}
    >
      {/* Image Section */}
      <div
        className={`relative overflow-hidden bg-black ${
          viewMode === "list"
            ? "sm:w-[480px] w-full h-[320px]"
            : "w-full h-[280px]"
        }`}
        style={{ flexShrink: 0 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={images[currentImageIndex]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 bg-center bg-[#1E2329] bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-40 p-1 rounded-full hover:bg-opacity-60 z-10"
            >
              <ChevronLeft className="text-white w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-40 p-1 rounded-full hover:bg-opacity-60 z-10"
            >
              <ChevronRight className="text-white w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-4 sm:w-full">
        <div className="space-y-1">
          <h3
            className={`text-[#F5B301] font-bold text-lg text-center
            `}
          >
            {title}
          </h3>
          <p className="text-sm italic text-[#FDFDFD] text-center">{date}</p>
        </div>
        <p className="text-sm text-[#FDFDFD] text-justify">{description}</p>

        <div className="flex flex-row flex-wrap gap-2 justify-center">
          {project.live && (
            <div
              className={`mt-2 flex `}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="solid"
                  className="flex text-nowrap items-center gap-2"
                >
                  <ExternalLink size={18} />
                  Live View
                </Button>
              </a>
            </div>
          )}

          {/* Visit Repository link if available */}
          {project.repository && (
            <div
              className={`mt-2 flex `}
            >
              <a
                href={project.repository}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="solid"
                  className="flex  text-nowrap items-center gap-2"
                >
                  <Github size={18} />
                  Visit Repository
                </Button>
              </a>
            </div>
          )}

          {!noButton && (
            <div
              className={`mt-2 flex `}
            >
              <Button
                variant="solid"
                className="flex  text-nowrap items-center gap-2"
                onClick={onViewClick}
              >
                <Eye size={18} />
                View Project
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
