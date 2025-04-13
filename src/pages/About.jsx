import React, { useState } from "react";
import ToolCard from "@src/components/cards/ToolCard";
import { Button } from "@src/components/button/Button";
import profileImage from "@src/assets/profileimage.png";
import Resume from "@src/assets/Resume.png";
import tools from "@src/data/Tools";
import { motion } from "framer-motion";

const About = () => {
  const [selectedTool, setSelectedTool] = useState(null);

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
            <Button variant="solid_image" size="default_image">
              <div className="flex items-center gap-3">
                <div className="flex justify-center items-center bg-[#1E2329] border border-[#F5B301] w-10 h-10 rounded">
                  <img
                    src={Resume}
                    alt="Resume Icon"
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span className="text-[#1E2329] font-bold text-base pr-4">
                  View My CV
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="bg-[#1E2329] border border-[#F5B301] p-6 rounded-2xl max-w-md w-full mx-4 shadow-2xl relative">
            <h3 className="text-lg font-semibold text-[#F5B301] text-center mb-4">
              Projects using {selectedTool.title}
            </h3>
            <ul className="text-white space-y-3 text-base max-h-60 overflow-y-auto px-1">
              {selectedTool.projects.map((project, index) => (
                <li key={index}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline block text-center"
                  >
                    • {project.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedTool(null)}
              className="absolute top-2 right-3 text-sm text-gray-400 hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
