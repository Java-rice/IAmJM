import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Socials from "@src/components/cards/Socials";
import AnimatedProfile from "@src/components/cards/AnimatedProfile";
import { Button } from "@src/components/button/Button";
import projectData from "@src/contents/projects/project";
import ProjectCards from "@src/components/cards/ProjectCards";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Home = () => {
  const carouselRef = useRef(null);
  const cardRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to selected project and center it
  const scrollToProject = (index) => {
    const container = carouselRef.current;
    const target = cardRefs.current[index];
    if (!container || !target) return;

    const containerCenter = container.offsetWidth / 2;
    const targetCenter = target.offsetLeft + target.offsetWidth / 2;
    const scrollPosition = targetCenter - containerCenter;

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setActiveIndex(index);
  };

  // Auto-detect the active index while scrolling
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;

    const children = cardRefs.current;
    const scrollLeft = container.scrollLeft;
    const containerWidth = container.offsetWidth;

    // Find the card that's closest to the center
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, index) => {
      if (!child) return;
      
      const childLeft = child.offsetLeft;
      const childCenter = childLeft + child.offsetWidth / 2;
      const containerCenter = scrollLeft + containerWidth / 2;
      const distance = Math.abs(containerCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeIndex) {
      setActiveIndex(closestIndex);
    }
  };

  // Debounce scroll handler for better performance
  useEffect(() => {
    const ref = carouselRef.current;
    if (!ref) return;

    let timeoutId;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 50);
    };

    ref.addEventListener("scroll", debouncedHandleScroll);
    return () => {
      ref.removeEventListener("scroll", debouncedHandleScroll);
      clearTimeout(timeoutId);
    };
  }, [activeIndex]);

  // Initialize first card as active
  useEffect(() => {
    if (projectData.length > 0) {
      scrollToProject(0);
    }
  }, []);

  return (
    <div className="font-rubik text-white bg-[#1E2329]">
      {/* HERO SECTION */}
      <section className="px-6 md:px-[10%] pt-16 pb-8 grid lg:grid-cols-12 items-center gap-12">
        <motion.div
          className="lg:col-span-5 text-center lg:text-left flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={1}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5B301]">
            Hello, it's me
          </h2>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            John Mark
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-200">
            A graduating{" "}
            <span className="text-[#F5B301] font-medium">Computer Science</span>{" "}
            student at <span className="text-[#F5B301] font-medium">PUP</span>,
            building digital experiences with logic and purpose.
          </p>
          <p className="text-sm text-gray-400">
            I specialize in web development and enjoy creating impactful tools,
            solving problems, and collaborating with driven teams.
          </p>

          <Socials />

          <div className="flex justify-center lg:justify-start gap-4 pt-6">
            <Button variant="solid">
              <a href="/IAmJM/about">About Me</a>
            </Button>
            <Button variant="bordered">
              <a href="/IAmJM/contacts">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-7 w-full flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={2}
        >
          <AnimatedProfile />
        </motion.div>
      </section>

      {/* TECH STACK */}
      <section className="px-6 md:px-[10%] py-8 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
        >
          <h3 className="text-3xl font-semibold text-[#F5B301] mb-4">
            Tech Toolbox
          </h3>
          <p className="text-gray-300 mb-10 max-w-3xl mx-auto">
            I use a modern tech stack for building full-stack web applications —
            from intuitive UIs to scalable APIs.
          </p>

          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div>
              <h4 className="text-xl font-medium text-[#F5B301] mb-3">
                Front-End
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>React + Vite</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#F5B301] mb-3">
                Back-End
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Node.js</li>
                <li>MongoDB, MySQL</li>
                <li>Git</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-medium text-[#F5B301] mb-3">
                Tools & Design
              </h4>
              <ul className="space-y-2 text-gray-300">
                <li>Git & GitHub</li>
                <li>Figma</li>
                <li>Postman</li>
              </ul>
            </div>
          </div>
          <Button variant="solid" className="mt-10">
            <a href="/IAmJM/about">About Me</a>
          </Button>
        </motion.div>
      </section>

      <section className="px-6 md:px-[10%] py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <h3 className="text-3xl font-semibold text-[#F5B301] mb-4">
            Featured Projects
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A quick look at some apps I've crafted — with focus on design,
            usability, and real-world application.
          </p>

          {/* Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto space-x-6 snap-x snap-mandatory scrollbar-hide py-20"
          >
            {projectData.map((project, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className="shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 flex justify-center items-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <div
                  className={`w-full transition-transform duration-300 transform ${
                    index === activeIndex ? "scale-105" : "scale-95"
                  }`}
                >
                  <ProjectCards project={project} viewMode="grid" noButton />
                </div>
              </div>
            ))}
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center mt-5 space-x-3">
            {projectData.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollToProject(i)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-[#F5B301] scale-125" : "bg-gray-500"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <Button variant="solid" className="mt-10">
            <a href="/IAmJM/projects">See More About the Projects</a>
          </Button>
        </motion.div>
      </section>

      {/* QUOTES */}
      <section className="px-6 md:px-[10%] py-20 bg-[#2A2E34] text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
          <h3 className="text-2xl font-semibold text-[#F5B301] mb-4">
            Inspiration
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            I believe in simplicity, clarity, and purpose — here are words I
            keep close while building:
          </p>
          <blockquote className="italic text-gray-400 border-l-4 border-[#F5B301] pl-4 text-lg mb-4">
            "Code is like humor. When you have to explain it, it's bad." – Cory
            House
          </blockquote>
          <blockquote className="italic text-gray-400 border-l-4 border-[#F5B301] pl-4 text-lg">
            "Programs must be written for people to read, and only incidentally
            for machines to execute." – Harold Abelson
          </blockquote>
        </motion.div>
      </section>

      {/* COLLAB INVITE */}
      <section className="px-6 md:px-[10%] py-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
        >
          <h3 className="text-3xl font-semibold text-[#F5B301]">
            Let's Work Together
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto mt-4">
            I'm open for freelance work, internships, mentorship, and team
            collaborations. If you have a vision, let's build it.
          </p>
          <ul className="text-left text-gray-400 mt-6 list-disc list-inside max-w-md mx-auto">
            <li>Landing pages, UI dashboards, and animations</li>
            {/* <li>Backend APIs or Firebase integrations</li> */}
            <li>Contributing to community or open-source projects</li>
          </ul>
          <Button variant="bordered" className="mt-8">
            <a href="/IAmJM/contacts">Start a Conversation</a>
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;