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
  "./projects/uwishii/uwishii_0.png",
  "./projects/uwishii/uwishii_1.png",
  "./projects/uwishii/uwishii_2.png",
  "./projects/uwishii/uwishii_3.png",
  "./projects/uwishii/uwishii_4.png",
  "./projects/uwishii/uwishii_5.png",
  "./projects/uwishii/uwishii_6.png",
  "./projects/uwishii/uwishii_7.png",
];

const UwiShii = () => {
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
            UWI-SHI — Crave, Create, and Enjoy
          </h2>
          <h2 className="text-lg font-bold text-center">
            COSC-FE2: CS Free Elective 2 (E-Commerce)
          </h2>
          <h2 className="text-lg font-bold text-center">
            July 2024 - August 2023
          </h2>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-justify indent-8">
          UWI-SHI is an e-commerce website built with Django for a bento-box
          restaurant theme, where users can sign up, customize their own meals,
          and place orders easily. Developed as the final project for COSC-FE2
          (E-Commerce), it features a smooth ordering experience—from browsing
          pages and editing carts to receiving email confirmations. The platform
          uses SQLite for its database and Bootstrap for styling, and was built
          through collaboration between developers handling both design and
          backend features.
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

        {/* Image Gallery */}
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
            <li>Navigate Pages: Home, Menu, About, Jobs, Contact</li>
            <li>Login and Register System</li>
            <li>Customize Orders and Add to Cart</li>
            <li>Review, Modify, or Remove Orders</li>
            <li>Quantity Adjustment and Checkout</li>
            <li>Order Confirmation via Email</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Wrench size={20} />
            <h3 className="text-xl font-semibold">Tools & Technologies Used</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>Django (Backend Web Framework)</li>
            <li>SQLite (Database)</li>
            <li>HTML, CSS, Bootstrap</li>
            <li>Email Services (SMTP)</li>
          </ul>
        </div>

        {/* Collaborators */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Users size={20} />
            <h3 className="text-xl font-semibold">Project Team</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li>John Mark Peroche – Lead Developer, UI/UX Designer</li>
            <li>Zen Desiree Ubungen – UI/UX Designer, Documentation</li>
          </ul>
        </div>

        {/* Repository (Optional) */}
        <div>
          <div className="flex items-center gap-2 mb-2 text-primary">
            <Link size={20} />
            <h3 className="text-xl font-semibold">Source Code</h3>
          </div>
          <ul className="list-disc list-inside ml-4 text-on-primary">
            <li className="flex items-center gap-2">
              <Github size={16} className="text-primary" />
              <a
                href="https://github.com/Java-rice/UWISHI-bentobox-website"
                className="underline text-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Java-rice/UWISHI-bentobox-website
              </a>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-gray pt-6 border-t border-surface">
          Created as a final project for COSC-FE2 - CS Free Elective 2:
          E-Commerce. UWI-SHI combines culinary creativity with seamless
          ordering and fulfillment workflows.
        </p>
      </div>

      {/* Image Modal Preview */}
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

export default UwiShii;
