import React, { useState } from "react";
import {
  Wrench,
  LayoutDashboard,
  Users,
  GalleryHorizontal,
  PanelRight,
  Link,
  Github,
} from "lucide-react";

const images = [
  "./projects/filotravel/filotravel_0.png",
  "./projects/filotravel/filotravel_1.png",
  "./projects/filotravel/filotravel_2.png",
  "./projects/filotravel/filotravel_3.png",
  "./projects/filotravel/filotravel_4.png",
  "./projects/filotravel/filotravel_5.png",
  "./projects/filotravel/filotravel_6.png",
  "./projects/filotravel/filotravel_7.png",
  "./projects/filotravel/filotravel_8.png",
];

const FiloTravel = () => {
  const [viewMode, setViewMode] = useState("carousel");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [previewImage, setPreviewImage] = useState(null);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
    <>
      <div className="space-y-8 text-on-primary bg-background p-6 rounded-lg shadow-md">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-primary text-center">
            Filo Travel Website
          </h2>
          <h2 className="text-lg font-bold text-center">
            Explore the Wonders of the Philippines
          </h2>
          <h2 className="text-lg font-bold text-center">July 2024</h2>
        </div>

        <p className="text-base leading-relaxed text-justify indent-8">
          Filo Travel is a React travel website that showcases the top tourist
          spots in the Philippines through detailed guides, carousels, and
          videos. Users can explore scenic locations, read curated content, and
          enjoy a seamless experience across devices. Designed with beginners in
          mind, this project helped us understand the React ecosystem, including
          routing, transitions, video embedding, and component design.
        </p>

        <div className="flex justify-end gap-2">
          <button
            className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
              viewMode === "carousel"
                ? "bg-primary text-on-primary"
                : "bg-surface text-on-primary"
            }`}
            onClick={() => setViewMode("carousel")}
          >
            <PanelRight size={16} /> Carousel
          </button>
          <button
            className={`flex items-center gap-1 px-3 py-1 rounded text-sm ${
              viewMode === "grid"
                ? "bg-primary text-on-primary"
                : "bg-surface text-on-primary"
            }`}
            onClick={() => setViewMode("grid")}
          >
            <GalleryHorizontal size={16} /> Grid
          </button>
        </div>

        {viewMode === "carousel" ? (
          <div className="relative w-full max-w-4xl mx-auto">
            <img
              src={images[currentSlide]}
              alt={`Screenshot ${currentSlide + 1}`}
              className="w-full h-auto rounded-lg shadow-md cursor-pointer"
              onClick={() => setPreviewImage(images[currentSlide])}
            />
            <div className="flex justify-between mt-2">
              <button
                onClick={handlePrev}
                className="text-primary hover:underline text-sm"
              >
                ‹ Prev
              </button>
              <span className="text-sm text-on-primary">
                {currentSlide + 1} / {images.length}
              </span>
              <button
                onClick={handleNext}
                className="text-primary hover:underline text-sm"
              >
                Next ›
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <div key={index} className="relative group">
                <img
                  src={src}
                  alt={`Screenshot ${index + 1}`}
                  className="w-full h-auto rounded-lg shadow-md cursor-pointer"
                  onClick={() => setPreviewImage(src)}
                />
              </div>
            ))}
          </div>
        )}

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <LayoutDashboard size={20} />
            <h3 className="text-xl font-semibold">Key Features</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Explore top destinations in the Philippines</li>
            <li>Watch embedded videos for each location</li>
            <li>Responsive design with smooth transitions</li>
            <li>Carousel and grid image views</li>
            <li>Dynamic routing for navigation</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>React</li>
            <li>CSS</li>
            <li>Git, Github</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Source Code</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Github size={16} className="text-primary" />
              <a
                href="https://github.com/Java-rice/filo-travel"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/filo-travel
              </a>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Live View</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Link size={16} className="text-primary" />
              <a
                href="https://filo-travel-lyart.vercel.app/" 
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
               https://filo-travel-lyart.vercel.app/
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Developed to showcase the travel treasures of the Philippines while
          helping us understanding React concepts and open-source collaboration.
        </p>
      </div>

      {previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-2 right-8 text-white bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
            >
              ✕
            </button>
            <img
              src={previewImage}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-lg max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default FiloTravel;
