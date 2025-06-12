// src/components/projects/ISchedApp.jsx
import React, {useState} from "react";
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
  "./projects/isched/Isched_1.png",
  "./projects/isched/Isched_2.png",
  "./projects/isched/Isched_3.png",
  "./projects/isched/Isched_4.png",
  "./projects/isched/Isched_5.png",
  "./projects/isched/Isched_6.png",
  "./projects/isched/Isched_7.png",
  "./projects/isched/Isched_8.png",
];

const ISchedApp = () => {
  const [viewMode, setViewMode] = useState("carousel"); // "carousel" or "grid"
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () =>
    setCurrentSlide((prev) => (prev + 1) % images.length);
  const handlePrev = () =>
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="space-y-8 text-on-primary bg-background p-6 rounded-lg shadow-md">
      {/* Title */}
      <h2 className="text-3xl font-bold text-primary text-center">I-SCHED</h2>

      {/* Description */}
      <p className="text-base leading-relaxed text-justify indent-8">
        I-SCHED is a Python-based desktop scheduling application developed using Tkinter, designed to automate job scheduling using the Fractional Knapsack, Earliest Deadline First (EDF), and Merge Sort algorithms. It allows users to input tasks with deadlines, importance, and idle time, and intelligently arranges them based on urgency and value to generate optimized daily schedules.
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
            className="w-full h-auto rounded-lg shadow-md"
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
            <img
              key={index}
              src={src}
              alt={`Screenshot ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
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
          <li>Python 3</li>
          <li>Tkinter (GUI Framework)</li>
          <li>SQLite (Local Database)</li>
          <li>Pillow, tkcalendar, tktimepicker</li>
        </ul>
      </div>

      {/* Features */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-primary">
          <LayoutDashboard size={20} />
          <h3 className="text-xl font-semibold">Key Features</h3>
        </div>
        <ul className="list-disc list-inside ml-4 text-on-primary">
          <li>Job scheduling using EDF and Fractional Knapsack</li>
          <li>Task value calculation and sorting via Merge Sort</li>
          <li>Deadline and idle-time aware scheduling logic</li>
          <li>User-friendly GUI for task input, editing, and tracking</li>
          <li>Real-time updates and visual display of optimized schedules</li>
        </ul>
      </div>

      {/* Team & Collaboration */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-primary">
          <Users size={20} />
          <h3 className="text-xl font-semibold">Project Team & Roles</h3>
        </div>
        <ul className="list-disc list-inside ml-4 text-on-primary">
          <li>Peroche, John Mark – Project Manager, Main Programmer</li>
          <li>Alberca, Cynthia – UI/UX Designer, Documentation</li>
          <li>Ibao, Danielle Karl – System Analyst, Researcher</li>
          <li>Nunez, Mher Angelo – Quality Tester, Documentation</li>
        </ul>
      </div>

      {/* Demo Video */}
      {/* <div className="space-y-2">
        <div className="flex items-center gap-2 text-primary">
          <Video size={20} />
          <h3 className="text-xl font-semibold">Walkthrough Demo</h3>
        </div>
        <div className="aspect-video">
          <iframe
            className="w-full h-full rounded-md shadow-md"
            src="https://www.youtube.com/embed/sample_isched_demo"
            title="I-SCHED Walkthrough Demo"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div> */}

      {/* Links Section */}
      <div>
        <div className="flex items-center gap-2 mb-2 text-primary">
          <Link size={20} />
          <h3 className="text-xl font-semibold">Source Code</h3>
        </div>
        <ul className="list-disc list-inside ml-4 text-on-primary">
          <li className="flex items-center gap-2">
            <Github size={16} className="text-primary" />
            <a
              href="https://github.com/yourusername/isched"
              className="underline text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/yourusername/isched
            </a>
          </li>
        </ul>
      </div>

      {/* Footer Signature */}
      <p className="text-center text-sm text-gray pt-6 border-t border-surface">
        Created as a final project for COSC 30033 - Design and Analysis of Algorithms
      </p>
    </div>
  );
};

export default ISchedApp;
