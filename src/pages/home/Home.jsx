import React from "react";
import Socials from "@src/components/cards/Socials";
import AnimatedProfile from "@src/components/cards/AnimatedProfile";
import { Button } from "@src/components/button/Button";

const Home = () => {
  return (
    <div className="px-6 md:px-[10%] py-12 md:py-[8%] flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 items-center">
      {/* Text Section */}
      <div className="lg:col-span-5 text-center lg:text-left flex flex-col gap-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5B301]">Hello, it's me</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">John Mark</h1>
        </div>

        <p className="text-white text-base md:text-lg leading-relaxed">
          A third year <span className="text-[#F5B301] font-medium">Computer Science</span> student from{" "}
          <span className="text-[#F5B301] font-medium">Polytechnic University of the Philippines</span>.
          I’m passionate about technology, software development, and constantly exploring new tech to contribute to impactful projects.
        </p>

        <Socials />

        <div className="flex justify-center lg:justify-start gap-6 pt-6">
          <Button variant="solid">
            <a href="/IAmJM/about">About Me</a>
          </Button>
          <Button variant="bordered">
            <a href="/IAmJM/contacts">Contact Me</a>
          </Button>
        </div>
      </div>

      {/* Profile Animation Section */}
      <div className="lg:col-span-7 w-full flex justify-center">
        <AnimatedProfile />
      </div>
    </div>
  );
};

export default Home;
