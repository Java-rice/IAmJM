import React, { useState } from "react";
import {
  Wrench,
  LayoutDashboard,
  Link,
  Github,
  GalleryHorizontal,
  PanelRight,
} from "lucide-react";

const images = [
  "./projects/todo/todo_0.png",
  "./projects/todo/todo_1.png",
  "./projects/todo/todo_2.png",
  "./projects/todo/todo_3.png",
  "./projects/todo/todo_4.png",
];

const Todo = () => {
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
          <h2 className="text-3xl font-bold text-primary text-center">Quick To Do App</h2>
          <h2 className="text-lg font-bold text-center">React Task Management</h2>
          <h2 className="text-lg font-bold text-center">August, 2024</h2>
        </div>

        <p className="text-base leading-relaxed text-justify indent-8">
          Quick To Do is a minimalist task management web app built using React.
          It allows users to create, track, and manage tasks efficiently.
          Tasks can be marked as complete, deleted, or cleared in bulk,
          with localStorage used for persistence. The app includes date pickers,
          responsive styling, and a clean user experience for personal productivity.
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
            <li>Add tasks with title, description, and deadline</li>
            <li>Mark tasks as done or undone</li>
            <li>Delete individual tasks</li>
            <li>Mark all as done or clear all tasks</li>
            <li>Data persists via localStorage</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>React</li>
            <li>Bootstrap</li>
            <li>Git and Github</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Live Site</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Link size={16} className="text-primary" />
              <a
                href="https://lm-todoapp.vercel.app/"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://lm-todoapp.vercel.app/
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          A lightweight productivity tool made for those who love simplicity and speed when managing tasks.
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

export default Todo;
