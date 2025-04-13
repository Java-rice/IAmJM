import React, { useState, useRef, useEffect } from "react";
import ProjectCards from "@src/components/cards/ProjectCards";
import projectData from "@src/contents/projects/project";
import { Button } from "@src/components/button/Button";

const viewOptions = ["grid", "list", "carousel"];
const allCategories = [
  "All",
  ...new Set(projectData.flatMap((p) => p.categories)),
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.categories.includes(selectedCategory));

  const scrollToIndex = (index) => {
    if (index < 0 || index >= filteredProjects.length) return;
    setActiveIndex(index);
    const container = carouselRef.current;
    if (!container) return;
    const slotWidth = container.offsetWidth / 3;
    container.scrollTo({
      left: slotWidth * index,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const slotWidth = container.offsetWidth / 3;
    const scrollPosition = container.scrollLeft;
    const index = Math.round(scrollPosition / slotWidth);
    if (
      index !== activeIndex &&
      index >= 0 &&
      index < filteredProjects.length
    ) {
      setActiveIndex(index);
    }
  };

  const goToPrevious = () => scrollToIndex(activeIndex - 1);
  const goToNext = () => scrollToIndex(activeIndex + 1);

  useEffect(() => {
    setActiveIndex(0);
    setTimeout(() => scrollToIndex(0), 100);
  }, [selectedCategory, viewMode]);

  useEffect(() => {
    if (viewMode !== "carousel") return;
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, viewMode]);

  return (
    <div className="px-[10%] py-10 text-[#FDFDFD] font-rubik flex flex-col gap-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-wide">
          WORKS <span className="text-[#F5B301]">&</span> PROJECTS
        </h1>
      </div>

      {/* View Toggle */}
      <div className="flex justify-center gap-3 flex-wrap">
        {viewOptions.map((option) => (
          <button
            key={option}
            onClick={() => setViewMode(option)}
            className={`px-4 py-2 text-sm border rounded-md transition ${
              viewMode === option
                ? "bg-[#F5B301] text-[#1E2329] font-semibold"
                : "border-[#F5B301] text-[#FDFDFD]"
            }`}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)} View
          </button>
        ))}
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {allCategories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 text-sm rounded-xl border transition ${
              selectedCategory === category
                ? "bg-[#F5B301] text-[#1E2329] font-semibold"
                : "border-[#F5B301] text-[#FDFDFD]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel View */}
      {viewMode === "carousel" ? (
        <div className="relative w-full">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            disabled={activeIndex === 0}
            className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#1E2329]/80 text-white rounded-r-lg p-2 ${
              activeIndex === 0
                ? "opacity-30 cursor-not-allowed"
                : "opacity-70 hover:opacity-100"
            }`}
            aria-label="Previous project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            disabled={activeIndex === filteredProjects.length - 1}
            className={`absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#1E2329]/80 text-white rounded-l-lg p-2 ${
              activeIndex === filteredProjects.length - 1
                ? "opacity-30 cursor-not-allowed"
                : "opacity-70 hover:opacity-100"
            }`}
            aria-label="Next project"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel Container with Fixed Width Items */}
          <div
            className="relative overflow-x-auto w-full"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div
              ref={carouselRef}
              className="flex overflow-x-auto scroll-smooth no-scrollbar py-8"
              onScroll={handleScroll}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                scrollSnapType: "x mandatory",
              }}
            >
              {/* Add padding at the beginning so first card can be centered */}
              <div className="shrink-0 w-1/3"></div>

              {filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className={`shrink-0 w-1/3 px-4 transition-all duration-300 ease-in-out flex justify-center items-center scroll-snap-align-center`}
                  style={{ scrollSnapAlign: "center" }}
                >
                  <div
                    className={`w-full transition-all duration-300 ease-in-out ${
                      index === activeIndex
                        ? "scale-110 opacity-100"
                        : "scale-90 opacity-50"
                    }`}
                  >
                    <ProjectCards project={project} viewMode="grid" />
                  </div>
                </div>
              ))}

              {/* Add padding at the end so last card can be centered */}
              <div className="shrink-0 w-1/3"></div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === activeIndex
                    ? "bg-[#F5B301] scale-125"
                    : "bg-[#FDFDFD]/40 hover:bg-[#F5B301]/60"
                }`}
                onClick={() => scrollToIndex(index)}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        <div
          className={`w-full ${
            viewMode === "grid"
              ? "grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col gap-8"
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCards key={index} project={project} viewMode={viewMode} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
