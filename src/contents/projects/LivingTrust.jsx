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
  "./projects/living_trust/living_0.png",
  "./projects/living_trust/living_1.png",
  "./projects/living_trust/living_2.png",
  "./projects/living_trust/living_3.png",
  "./projects/living_trust/living_4.png",
  "./projects/living_trust/living_5.png",
  "./projects/living_trust/living_6.png",
  "./projects/living_trust/living_7.png",
  "./projects/living_trust/living_8.png",
  "./projects/living_trust/living_9.png",
  "./projects/living_trust/living_10.png",
  "./projects/living_trust/living_11.png",
  "./projects/living_trust/living_12.png",
];

const LivingTrust = () => {
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
            Living Trust Management System
          </h2>
          <h2 className="text-lg font-bold text-center">February, 2022 - Present</h2>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-justify indent-8">
          The Living Trust Management System is a web-based document automation
          platform designed to generate U.S. living trust documents through
          guided form inputs. It supports multiple user roles including clients,
          trust ambassadors, estate planning coordinators and legacy leaders,
          streamlining estate planning workflows from input to document
          generation and review.
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

        {/* Tools & Technologies */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>React.js, Node.js, Express</li>
            <li>MySQL for relational data</li>
            <li>Form generation, Word document templating (docx)</li>
            <li>Tailwind CSS, Axios, React Hook Form</li>
            <li>Git, Github</li>
            <li>Wordpress, PhpMyAdmin,</li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <LayoutDashboard size={20} />
            <h3 className="text-xl font-semibold">Key Features</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Dynamic form system for legal documents</li>
            <li>Document generation in Word and PDF formats</li>
            <li>
              Multi-role account handling (Clients, Trust Ambassadors, Estate
              Planning Coordinators and Legacy Leaders,)
            </li>
            <li>Document vault for uploads and digital records</li>
            <li>Integrated calendar, notes, and lead referrals</li>
          </ul>
        </div>

        {/* Project Team */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">My Role</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>UI Designer</li>
            <li>Frontend Developer</li>
            <li>API Integration</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Live View</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Link size={16} className="text-primary" />
              <a
                href="https://the-most-comprehensive-living-trust.vercel.app/" // Replace with actual repo
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://the-most-comprehensive-living-trust.vercel.app/
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Built to streamline the U.S. estate planning process through guided
          automation and legal document preparation.
        </p>
      </div>

      {/* Image Preview Modal */}
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

export default LivingTrust;
