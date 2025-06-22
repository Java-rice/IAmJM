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
  "./projects/thesis/thesis_0.png",
  "./projects/thesis/thesis_1.png",
  "./projects/thesis/thesis_2.png",
  "./projects/thesis/thesis_3.png",
  "./projects/thesis/thesis_4.png",
  "./projects/thesis/thesis_5.png",
  "./projects/thesis/thesis_6.png",
  "./projects/thesis/thesis_7.png",
  "./projects/thesis/thesis_8.png",
];

const Thesis = () => {
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
            SC-β-VAE-GAN — Shift Correction Model for Handwriting Time Series
          </h2>
          <h2 className="text-lg font-bold text-center">
            COSC 40033 - CS Thesis Writing 2
          </h2>
          <h2 className="text-lg font-bold text-center">March–May 2025</h2>
        </div>

        <p className="text-base leading-relaxed text-justify indent-8">
          SC-β-VAE-GAN is a Python-based standalone desktop tool designed to
          impute and augment handwriting multivariate time series data.
          Leveraging a shift correction variational autoencoder with GAN
          integration, this system addresses data scarcity and missing values in
          online handwriting datasets. It supports pen tablet input and dataset
          uploads, generating realistic synthetic samples and filling in-air pen
          movements. Designed for machine learning practitioners, graphologists,
          and researchers, the app includes modules for data visualization,
          local file tracking, and custom model training using Keras and
          TensorFlow. It was developed using the Rapid Application Development
          paradigm.
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
            <li>Drawing canvas with support for pen tablet input</li>
            <li>Augmentation and imputation using SC-β-VAE-GAN</li>
            <li>Dataset upload and real-time process logging</li>
            <li>Visualization of original and synthetic handwriting data</li>
            <li>Custom model training and evaluation metrics</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Python</li>
            <li>Keras & TensorFlow</li>
            <li>PyQt5</li>
            <li>NumPy, Pandas, Scikit-learn</li>
            <li>Matplotlib</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">Project Team</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>John Mark Peroche</li>
            <li>Nichole Alpapara</li>
            <li>John Patrick Lagatuz</li>
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
                href="https://github.com/Java-rice/Thesis-Project"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/Thesis-Project
              </a>
            </li>
          </ul>
        </div>

        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Developed for COSC 40033 - CS Thesis Writing 2 , requirement for
          Bachelor of Science in Computer Science
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

export default Thesis;
