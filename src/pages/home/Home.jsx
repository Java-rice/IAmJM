import React from "react";
import Socials from "../../components/cards/Socials";
import profile from "../../assets/profile.png";
import AnimatedProfile from "../../components/cards/AnimatedProfile";
import { Button } from "../../components/button/Button";
import Navigation from "../../components/navigation/Navigation";

const Home = () => {
  return (
    <div className="px-[10%] gap-[5%] font-rubik flex lg:flex-row justify-center items-center flex-col-reverse min-h-screen py-auto">
      <div className="lg:w-[35%] w-[100%] m-auto lg:text-left justify-center flex flex-col gap-4 text-center">
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
        <div className="flex flex-row gap-10 align-center py-20">
          <Button variant="solid">About Me</Button>
          <Button variant="bordered">Contact Me</Button>
        </div>
      </div>
      <AnimatedProfile></AnimatedProfile>
      <Navigation></Navigation>
    </div>

  );
};

export default Home;
