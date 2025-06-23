import React, { useState } from "react";
import {
  Wrench,
  LayoutDashboard,
  Users,
  Link,
  GalleryHorizontal,
  PanelRight,
} from "lucide-react";

const images = [
  "./projects/komyusagip/komyusagip_0.png",
  "./projects/komyusagip/komyusagip_1.png",
  "./projects/komyusagip/komyusagip_2.png",
  "./projects/komyusagip/komyusagip_3.png",
  "./projects/komyusagip/komyusagip_4.png",
  "./projects/komyusagip/komyusagip_5.png",
  "./projects/komyusagip/komyusagip_6.png",
  "./projects/komyusagip/komyusagip_7.png",
];

const KomyuSagip = () => {
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
            KOMYU-SAGIP
          </h2>
          <h2 className="text-lg font-bold text-center">
            COMP 20133 - Applications Development and Emerging Technologies
          </h2>
          <h2 className="text-lg font-bold text-center">February, 2024</h2>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-justify indent-8">
          Komyu-Sagip is a mobile application designed for community crime
          reporting and public awareness. It aims to empower users to report
          incidents, send SOS messages, and access local crime statistics.
          Inspired by GSM and GIS-based systems, the app leverages the
          widespread use of smartphones in the Philippines to promote a safer
          and more informed society.
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
            <li>Java, Kotlin</li>
            <li>Firebase (Authentication, Realtime DB)</li>
            <li>Android Studio</li>
            <li>Git & GitHub</li>
            <li>Figma (UI/UX Design)</li>
          </ul>
        </div>

        {/* Key Features */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <LayoutDashboard size={20} />
            <h3 className="text-xl font-semibold">Key Features</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>User login and registration</li>
            <li>Crime reporting with optional media</li>
            <li>Community posting and local updates</li>
            <li>“Panic!” mode: Send instant SOS alerts</li>
            <li>Real-time crime statistics display</li>
            <li>Customizable user profiles</li>
            <li>Emergency contact directory</li>
          </ul>
        </div>

        {/* My Role */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">My Role</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Android Developer</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Firebase Authentication and Realtime Database Setup</li>
          </ul>
        </div>

        {/* Live Link (if applicable) */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Repository</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Link size={16} className="text-primary" />
              <a
                href="https://github.com/your-repo-url-here"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                GitHub – Komyu-Sagip
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Empowering communities with timely reporting and information –
          KOMYU-SAGIP. A requirement for COMP 20133 - Applications Development and Emerging Technologies
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

export default KomyuSagip;
