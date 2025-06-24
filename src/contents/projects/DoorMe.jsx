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
  "./projects/doorme/doorme_0.png",
  "./projects/doorme/doorme_1.png",
  "./projects/doorme/doorme_2.png",
  "./projects/doorme/doorme_3.png",
];

const DoorMe = () => {
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
          <h2 className="text-3xl font-bold text-primary text-center">DOORME: PahingaU</h2>
          <h2 className="text-lg font-bold text-center">
            COMP 20163 - Web Development
          </h2>
          <h2 className="text-lg font-bold text-center">july, 2024</h2>
        </div>

        <p className="text-base leading-relaxed text-justify indent-8">
          DOORME (also known as PahingaU) is a web-based dormitory search platform specifically
          designed for college students in Metro Manila. Built to address the difficulties
          of securing safe, affordable, and student-friendly housing, it leverages an
          interactive map, verification systems, reviews, and smart filters to empower students
          in making better living choices while attending university.
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
              <button onClick={handlePrev} className="text-primary hover:underline text-sm">
                ‹ Prev
              </button>
              <span className="text-sm text-on-primary">
                {currentSlide + 1} / {images.length}
              </span>
              <button onClick={handleNext} className="text-primary hover:underline text-sm">
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
            <li>Map-based housing locator with smart filters</li>
            <li>Verification for both students and property owners</li>
            <li>Private messaging for safe communication</li>
            <li>Price comparison and availability alerts</li>
            <li>User reviews and ratings for housing experiences</li>
            <li>Document and photo upload for secure listings</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Map API</li>
            <li>SQLite</li>
            <li>Git, GitHub</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">Developers</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Adrian Rafael Abelligos</li>
            <li>Nichole Alpapara</li>
            <li>John Patrick Lagatuz</li>
            <li>John Mark Peroche</li>
            <li>Kurt Denver Torreda</li>
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
                href="https://github.com/Java-rice/doorme"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/doorme
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Designed to solve the housing struggles of university students through technology,
          community trust, and location intelligence. A Requirement for COMP 20163 - Web Development
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

export default DoorMe;
