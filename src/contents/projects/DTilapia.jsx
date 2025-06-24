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
  "./projects/dtilapia/dtilapia_0.png",
  "./projects/dtilapia/dtilapia_1.png",
  "./projects/dtilapia/dtilapia_2.png",
];

const DTilapia = () => {
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
            D'TILAPIA
          </h2>
          <h2 className="text-lg font-bold text-center">
            COSC 30063 - Principles of Programming Languages
          </h2>
          <h2 className="text-lg font-bold text-center">February, 2024</h2>
        </div>

        <p className="text-base leading-relaxed text-justify indent-8">
          D'TILAPIA is a domain-specific programming language created to support
          problem-solving in Discrete Mathematics. Implemented using Python,
          Flask, JavaScript, and HTML/CSS, it provides an educational platform
          for students and researchers. It features a custom syntax structure
          that mirrors formal mathematical notation and supports operations like
          set theory, permutations, graphs, and number properties, bridging the
          gap between logic theory and actual coding.
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
            <li>Custom language syntax for discrete math operations</li>
            <li>Web-based interpreter using Flask and HTML/CSS</li>
            <li>
              Supports operations like set theory, trees, graphs, and
              permutations
            </li>
            <li>Beginner-friendly grammar and rule-based parsing</li>
            <li>
              Ideal for students studying programming languages or math logic
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Python</li>
            <li>Flask</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Vanilla DOM Parsing</li>
            <li>Git, Github</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">Developers</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Nichole Alpapara</li>
            <li>Danielle Karl Ibao</li>
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
                href="https://github.com/Java-rice/Dtilapia"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/Dtilapia
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          D'TILAPIA merges formal logic and custom parsing to help students code
          math-driven logic fluently and accessibly. A requirement for COSC 30063 - Principles of Programming Languages
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

export default DTilapia;
