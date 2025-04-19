// src/components/blogPosts/Blog1.jsx
import React from "react";

const Blog1 = () => {
  return (
    <div className="text-[#FDFDFD] flex flex-col gap-6">
      {/* Title & Metadata */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F5B301] mb-2">
          Exploring the Future of Technology
        </h1>
        <p className="italic text-sm text-gray-400">Published: August 22, 2024</p>
      </div>

      {/* Cover Image */}
      <img
        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
        alt="Futuristic city"
        className="w-full max-h-[400px] object-cover rounded-md shadow-md"
      />

      {/* Introduction */}
      <p className="text-justify leading-7 indent-8 text-lg">
        In the rapidly evolving world of technology, we are witnessing groundbreaking innovations that are reshaping how we live, work, and connect. From artificial intelligence to space exploration, the pace of progress is astonishing — and we're only getting started.
      </p>

      {/* Section 1: Artificial Intelligence */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Artificial Intelligence: Beyond Automation</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        AI has evolved far beyond rule-based systems. Today, generative AI models are transforming content creation, customer service, and even art. Whether it's ChatGPT holding human-like conversations or AI designing logos in seconds, the world is beginning to embrace intelligent systems in everyday life.
      </p>
      <img
        src="https://images.unsplash.com/photo-1581091012184-5c1d7b0e65b0"
        alt="AI concept"
        className="w-full rounded-md shadow-md my-4"
      />

      {/* Section 2: Quantum Computing */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Quantum Computing: The Next Frontier</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        Quantum computing is poised to revolutionize how we approach problems that are currently unsolvable by classical computers. With companies like IBM and Google making strides in qubit stability and error correction, we're inching closer to a future where quantum algorithms crack complex simulations in seconds.
      </p>

      {/* Quote block */}
      <blockquote className="border-l-4 border-[#F5B301] pl-4 italic text-gray-300">
        “Quantum computers will not replace classical computers, but they will allow us to solve problems we never thought possible.”
      </blockquote>

      {/* Section 3: Space Tech */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Commercial Space Travel</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        With SpaceX, Blue Origin, and Virgin Galactic leading the way, the dream of space tourism is becoming reality. These private enterprises are creating opportunities not just for billionaires, but eventually for scientists, engineers, and everyday people to explore the stars.
      </p>
      <img
        src="https://images.unsplash.com/photo-1581091012184-d0b8f1bb98b3"
        alt="SpaceX launch"
        className="w-full rounded-md shadow-md my-4"
      />

      {/* Section 4: Future Skills */}
      <h2 className="text-2xl font-semibold text-[#F5B301] mt-6">Preparing for the Jobs of Tomorrow</h2>
      <p className="text-justify leading-7 indent-8 text-base">
        The workforce of the future will demand a mix of technical and human-centric skills. Here are a few fields likely to dominate:
      </p>
      <ul className="list-disc list-inside ml-4 text-base text-[#FDFDFD]">
        <li>AI & Machine Learning Engineering</li>
        <li>Data Privacy and Cybersecurity</li>
        <li>Green Tech & Sustainable Innovation</li>
        <li>Human-AI Collaboration Roles</li>
        <li>Quantum Software Development</li>
      </ul>

      {/* Closing */}
      <p className="text-justify leading-7 indent-8 text-base mt-6">
        As we march forward, embracing these technologies responsibly is crucial. Ethical AI, sustainable engineering, and equitable access to innovation must guide our progress. The future is bright — if we shape it wisely.
      </p>

      {/* Final Image */}
      <img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee981d"
        alt="Futuristic interface"
        className="w-full rounded-md shadow-md mt-4"
      />

      {/* Footer/Signature */}
      <p className="mt-8 text-sm text-center text-gray-400">
        Written by <span className="text-[#F5B301]">The TechVerse Team</span>
      </p>
    </div>
  );
};

export default Blog1;
