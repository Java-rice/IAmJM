import React from "react";
import Socials from "../../components/cards/Socials";
import profile from "../../assets/profile.png";
import AnimatedProfile from "../../components/cards/AnimatedProfile";
import { Button } from "../../components/button/Button";

const Home = () => {
  return (
    <div className="px-[10%] gap-[5%] font-rubik flex lg:flex-row flex-col-reverse ">
      <div className="lg:w-[35%] w-[100%] lg:text-left flex flex-col gap-4 text-center">
        <h2 className="text-5xl text-[#F5B301]">Hello, Its me</h2>
        <h1 className="font-extrabold text-6xl text-[rgb(253,253,253)]">John Mark</h1>
        <p className="text-[#FDFDFD] leading-8 text-xl text-justify">
          A third year <span className="text-[#F5B301]">Computer Science</span>{" "}
          student from{" "}
          <span className="text-[#F5B301]">
            Polytechnic University of the Philippines
          </span>{" "}
          with a passion for technology and software development. I enjoy
          learning new technologies and willing to contribute on projects.
        </p>
        <Socials></Socials>
      </div>
      <AnimatedProfile></AnimatedProfile>
    </div>
  );
};

export default Home;
