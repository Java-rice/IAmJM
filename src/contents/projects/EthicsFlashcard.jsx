import React, { useState } from "react";
import {
  Wrench,
  LayoutDashboard,
  Users,
  Link,
  Github,
  GalleryHorizontal,
  PanelRight,
} from "lucide-react";

const images = [
  "./projects/ethics/ethics_0.png",
  "./projects/ethics/ethics_1.png",
  "./projects/ethics/ethics_3.png",
  "./projects/ethics/ethics_4.png",
  "./projects/ethics/ethics_5.png",
  "./projects/ethics/ethics_6.png",
];

const EthicsFlashcard = () => {
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
        {/* Title */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-primary text-center">
            Ethics Flashcard
          </h2>
          <h2 className="text-lg font-bold text-center">March 2025</h2>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-justify indent-8">
          Ethics Flashcard is an interactive web presentation built with React
          that teaches professional ethics through gamified flashcards, slides,
          and mini quizzes. It offers an alternative to traditional slide decks
          by allowing users to flip through cards, test their understanding, and
          experience ethical concepts in a more playful, visual format. Designed
          for classroom use or individual learning, the project emphasizes user
          interaction and simplicity using React, TailwindCSS, and JavaScript
          logic.
        </p>

        {/* View Toggle */}
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

        {/* Image Display */}
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

        {/* Features */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <LayoutDashboard size={20} />
            <h3 className="text-xl font-semibold">Key Features</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Flashcard-style learning interface</li>
            <li>Mini-games and multiple-choice quizzes</li>
            <li>Slide-based ethical concept presentations</li>
            <li>Gamified experience for better engagement</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>React</li>
            <li>TailwindCSS</li>
            <li>JavaScript (ES6+)</li>
            <li>Git, Github</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">Project Team & Roles</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Peroche, John Mark</li>
            <li>Alpapara, Nichole</li>
            <li>Lagatuz, John Patrick</li>
            <li>Torreda, Kurt Denver</li>
          </ul>
        </div>

        {/* Source Code */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Source Code</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Github size={16} className="text-primary" />
              <a
                href="https://github.com/Java-rice/flashcard-presentation"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/flashcard-presentation
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
                href="https://flashcard-presentation.vercel.app/" // Replace with actual repo
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://flashcard-presentation.vercel.app/
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Signature */}
        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Created as a requirement for COSC 30083 - Professional Ethics for
          Computer Scientist
        </p>
      </div>

      {/* Preview Modal */}
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

export default EthicsFlashcard;
