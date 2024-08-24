import React from "react";
import Socials from "../../components/cards/Socials";
import AnimatedProfile from "../../components/cards/AnimatedProfile";
import { Button } from "../../components/button/Button";

const Home = () => {
  return (
    <div className="px-[10%] py-[8%] gap-20 flex flex-col-reverse lg:grid lg:grid-cols-12 ">
      <div className="w-[100%] lg:my-auto lg:text-left lg:col-span-5 justify-center flex flex-col gap-1 text-center">
        <h2 className="text-4xl font-bold  text-[#F5B301]">Hello, Its me</h2>
        <h1 className="font-extrabold text-5xl text-[rgb(253,253,253)]">John Mark</h1>
        <p className="text-[#FDFDFD] leading-8 text-base text-justify font-bold">
          A third year <span className="text-[#F5B301]">Computer Science</span>{" "}
          student from{" "}
          <span className="text-[#F5B301]">
            Polytechnic University of the Philippines
          </span>{" "}
          with a passion for technology and software development. I enjoy
          learning new technologies and willing to contribute on projects.
        </p>
        <Socials></Socials>
        <div className="flex flex-row gap-10 align-center m-auto pt-10">
          <Button variant="solid"><a href="/IAmJM/about">About Me</a></Button>
          <Button variant="bordered"><a href="/IAmJM/contacts">Contact Me</a></Button>
        </div>
      </div>
      <div className="col-span-7">
        <AnimatedProfile></AnimatedProfile>
      </div>
    </div>

  );
};

export default Home;
