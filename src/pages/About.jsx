import React, { useState, useEffect } from "react";
import ToolCard from "@src/components/cards/ToolCard";
import { Button } from "@src/components/button/Button";
import profileImage from "@src/assets/profileimage.png";
import Resume from "@src/assets/Resume.png";
import ResumePDF from "@src/assets/Resume.pdf";
import tools from "@src/data/Tools";
import { motion } from "framer-motion";
import ExperienceData from "@src/data/ExperienceData";
const About = () => {
  const [selectedTool, setSelectedTool] = useState(null);
  const [showCV, setShowCV] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const isPrintShortcut = (e.ctrlKey || e.metaKey) && e.key === "p";
      const isSaveShortcut = (e.ctrlKey || e.metaKey) && e.key === "s";

      if (isPrintShortcut || isSaveShortcut) {
        e.preventDefault();
        alert("Action disabled for this document.");
      }
    };

    if (showCV) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showCV]);

  return (
    <div className="relative px-6 md:px-[10%] py-24 text-[#FDFDFD] font-rubik flex flex-col items-center gap-16 overflow-hidden bg-[#1E2329]">
      {/* About Me Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center w-full">
        {/* Text */}
        <motion.div
          className="lg:col-span-5 flex flex-col gap-5 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-lg md:text-xl font-semibold text-[#F5B301] uppercase tracking-wide">
            About Me
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            John Mark Peroche
          </h1>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed">
            I’m a dedicated{" "}
            <span className="text-[#F5B301] font-medium">
              Computer Science student
            </span>{" "}
            at the
            <span className="text-[#F5B301] font-medium">
              {" "}
              Polytechnic University of the Philippines
            </span>{" "}
            with a strong interest in software development, UI/UX design, and
            building solutions that improve user experience. My passion lies in
            transforming ideas into interactive, accessible, and purposeful
            digital products.
          </p>
          <p className="text-[#D1D5DB] text-base md:text-lg leading-relaxed">
            Whether I'm working on front-end interfaces or exploring the backend
            logic, I enjoy crafting code that’s clean, scalable, and
            user-centric. I'm constantly learning and excited to contribute to
            meaningful projects in the tech space.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-6">
            <Button
              variant="solid_image"
              size="default_image"
              onClick={() => setShowCV(true)}
            >
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-[#1E2329] border border-[#F5B301] w-10 h-10 rounded">
                  <img
                    src={Resume}
                    alt="Resume Icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-[#1E2329] font-bold text-base pr-4">
                  View My Resume
                </span>
              </div>
            </Button>
            <Button variant="bordered">
              <a href="/IAmJM/contacts">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        {/* Profile Image with Geometric Animation */}
        <motion.div
          className="lg:col-span-7 w-full flex justify-center items-center relative min-h-[36rem]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="absolute inset-0 flex justify-center items-center z-0"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            <svg
              className="w-[26rem] h-[26rem] opacity-20"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#F5B301" stopOpacity="1" />
                  <stop offset="100%" stopColor="#F5B301" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <polygon
                points="100,10 190,60 190,160 100,210 10,160 10,60"
                fill="url(#grad2)"
              />
            </svg>
          </motion.div>

          <motion.img
            src={profileImage}
            alt="Profile"
            className="relative z-10 w-[20rem] md:w-[24rem] object-cover"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Education Section */}
      <motion.div
        className="w-full flex flex-col gap-10 pt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-3xl font-bold text-primary text-center">
          Education
        </h3>
        <div className="grid gap-8 sm:grid-cols-2">
          {ExperienceData.education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-[#2A2F36] border-l-[6px] border-[#F5B301] rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h4 className="text-xl font-bold text-[#FDFDFD]">{edu.school}</h4>
              <p className="text-primary font-semibold mt-1">{edu.degree}</p>
              <p className="text-[#D1D5DB] text-sm italic mb-3">
                {edu.duration}
              </p>
              <p className="text-[#D1D5DB] leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience & Organizations Section */}
      <div className="w-full flex flex-col items-center gap-16">
        {/* Experience */}
        <motion.div
          className="w-full flex flex-col gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary text-center">
            Experience
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {ExperienceData.experience.map((item, index) => (
              <motion.div
                key={index}
                className="bg-secondary border-l-[6px] border-primary rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-[#FDFDFD]">
                  {item.role}
                </h4>
                <p className="text-primary font-semibold mt-1">
                  {item.organization}
                </p>
                <p className="text-[#D1D5DB] text-sm italic mb-3">
                  {item.duration}
                </p>
                <p className="text-[#D1D5DB] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Organizations */}
        <motion.div
          className="w-full flex flex-col gap-10 pt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-primary text-center">
            Organizations Joined
          </h3>
          <div className="grid gap-8 sm:grid-cols-2">
            {ExperienceData.organizations.map((org, index) => (
              <motion.div
                key={index}
                className="bg-surface border-l-[6px] border-tertiary rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h4 className="text-xl font-bold text-[#FDFDFD]">{org.name}</h4>
                <p className="text-tertiary font-semibold mt-1">{org.role}</p>
                <p className="text-[#D1D5DB] text-sm italic">{org.duration}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="w-full flex flex-col items-center gap-12">
        <h3 className="text-3xl font-bold text-[#F5B301]">Skills & Tools</h3>
        <div className="flex flex-col gap-12 w-full">
          {Object.entries(tools).map(([category, skillList]) => (
            <div key={category} className="w-full">
              <h4 className="text-xl font-semibold mb-4 text-center text-white">
                {category}
              </h4>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {skillList.map((tool, index) => (
                  <ToolCard
                    key={index}
                    imgSrc={tool.imgSrc}
                    title={tool.title}
                    color={tool.color}
                    text_color={tool.text_color}
                    onClick={() => setSelectedTool(tool)}
                  />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for Projects */}
      {selectedTool && selectedTool.projects?.length > 0 && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="relative w-full max-w-md bg-[#1E2329] border border-[#F5B301] rounded-2xl shadow-2xl p-6 animate-fade-in">
            {/* Close button */}
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-3 right-4 text-[#F5B301] hover:text-red-400 transition-colors"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Title */}
            <h3 className="text-xl font-bold text-[#F5B301] text-center mb-4">
              Projects using {selectedTool.title}
            </h3>

            {/* Project links */}
            <ul className="space-y-3 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-[#F5B301]/80 scrollbar-track-transparent pr-1">
              {selectedTool.projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-white text-base text-center hover:underline hover:text-[#F5B301] transition-colors"
                  >
                    • {project.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {showCV && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md px-4 print:hidden">
          <div className="relative w-full max-w-5xl bg-[#1E2329] rounded-xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setShowCV(false)}
              className="absolute top-4 right-6 z-10 text-[#F5B301] hover:text-red-400 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* PDF Viewer */}
            <iframe
              src={`${ResumePDF}#toolbar=0&navpanes=0&scrollbar=0`}
              className="w-full h-[90vh]"
              title="CV Viewer"
              frameBorder="0"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
