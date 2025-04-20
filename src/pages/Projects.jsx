import React, { useState, useRef, useEffect } from "react";
import ProjectCards from "@src/components/cards/ProjectCards";
import projectData from "@src/contents/projects/project";
import { Button } from "@src/components/button/Button";
import { FolderSearch, ArrowLeft } from "lucide-react";

const viewOptions = ["grid", "list", "carousel"];
const allCategories = [
  "All",
  ...new Set(projectData.flatMap((p) => p.categories)),
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState("grid");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProjectSlug, setActiveProjectSlug] = useState(null);

  const carouselRef = useRef(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projectData
      : projectData.filter((p) => p.categories.includes(selectedCategory));

  const selectedProject = projectData.find((p) => p.link === activeProjectSlug);


  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    if (!container) return;

    const slide = container.children[index + 1]; 
    if (slide) {
      slide.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(index);
    }
  };

  const goToPrevious = () => {
    if (activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const goToNext = () => {
    if (activeIndex < filteredProjects.length - 1) {
      scrollToIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    scrollToIndex(0); 
  }, []);

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

  const handleBack = () => {
    setActiveProjectSlug(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="px-6 md:px-[10%] py-12 text-[#FDFDFD] font-rubik flex flex-col gap-6">
      {!activeProjectSlug ? (
        <>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-wide">
              WORKS <span className="text-[#F5B301]">&</span> PROJECTS
            </h1>
          </div>

          <div className="flex justify-end">
            <select
              value={viewMode}
              onChange={(e) => setViewMode(e.target.value)}
              className="px-4 py-2 text-sm rounded-md border border-[#F5B301] bg-[#1E2329] text-[#F5B301] font-medium focus:outline-none focus:ring-2 focus:ring-[#F5B301]"
            >
              {viewOptions.map((option) => (
                <option key={option} value={option}>
                  {option.charAt(0).toUpperCase() + option.slice(1)} View
                </option>
              ))}
            </select>
          </div>

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

          {filteredProjects.length === 0 ? (
            <div className="flex flex-col items-center text-center gap-4 mt-16 text-gray-400">
              <FolderSearch size={48} className="text-[#F5B301]" />
              <p>No projects found for the selected category.</p>
            </div>
          ) : viewMode === "carousel" ? (
            <div className="relative w-full">
              {/* Left Arrow */}
              <button
                onClick={goToPrevious}
                disabled={activeIndex === 0}
                className={`absolute left-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#1E2329]/80 text-white rounded-r-lg p-2 ${
                  activeIndex === 0
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                ←
              </button>

              {/* Right Arrow */}
              <button
                onClick={goToNext}
                disabled={activeIndex === filteredProjects.length - 1}
                className={`absolute right-0 top-1/2 z-10 transform -translate-y-1/2 bg-[#1E2329]/80 text-white rounded-l-lg p-2 ${
                  activeIndex === filteredProjects.length - 1
                    ? "opacity-30 cursor-not-allowed"
                    : "opacity-70 hover:opacity-100"
                }`}
              >
                →
              </button>

              {/* Scrollable Carousel */}
              <div className="relative overflow-x-auto w-full no-scrollbar">
                <div
                  ref={carouselRef}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar py-8"
                  style={{ scrollSnapType: "x mandatory" }}
                >
                  {/* Padding Left */}
                  <div className="shrink-0 w-[5%] sm:w-[10%]" />

                  {/* Projects */}
                  {filteredProjects.map((project, index) => (
                    <div
                      key={index}
                      className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 flex justify-center items-center scroll-snap-align-center"
                      style={{ scrollSnapAlign: "center" }}
                    >
                      <div
                        className={`w-full transition duration-300 ${
                          index === activeIndex
                            ? "scale-105 opacity-100"
                            : "scale-95 opacity-60"
                        }`}
                      >
                        <ProjectCards
                          project={project}
                          viewMode="grid"
                          onViewClick={() => setActiveProjectSlug(project.link)}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Padding Right */}
                  <div className="shrink-0 w-[5%] sm:w-[10%]" />
                </div>
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
                <ProjectCards
                  key={index}
                  project={project}
                  viewMode={viewMode}
                  onViewClick={() => setActiveProjectSlug(project.link)}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="relative animate-fade-in">
          <div className="flex justify-start mb-6">
            <Button
              variant="long_outline"
              onClick={handleBack}
              className="flex items-center gap-2"
            >
              <ArrowLeft size={18} /> Back to Projects
            </Button>
          </div>

          {selectedProject?.component ? (
            selectedProject.component
          ) : (
            <div className="text-center text-gray-400 py-12">
              <FolderSearch className="mx-auto mb-4 text-[#F5B301]" size={36} />
              <p>Project not found or unavailable.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Projects;
