import React from "react";
import { NavLink } from "react-router-dom";
import AHome from "@src/assets/AHome.png";
import AAbout from "@src/assets/AAbout.png";
import AContact from "@src/assets/AContact.png";
import AProjects from "@src/assets/AProjects.png";
import ABlog from "@src/assets/ABlog.png";
import Home from "@src/assets/Home.png";
import About from "@src/assets/About.png";
import Contacts from "@src/assets/Contacts.png";
import Project from "@src/assets/Project.png";
import Blog from "@src/assets/Blog.png";

const Navigation = () => {
  return (
    <div className="sticky rounded-md my-12 max-w-[80%] w-[100vw] bottom-12 left-0 right-0 lg:my-auto lg:fixed lg:w-auto lg:max-w-none lg:max-h-[80%] lg:h-auto lg:bottom-auto lg:right-[3%] lg:left-auto lg:top-40 mx-auto lg:py-8 bg-[#3B4046] z-20 pointer-events-none">
      <nav className="flex flex-row relative lg:flex-col lg:gap-4 gap-auto lg:justify-around align-middle justify-around pointer-events-auto">
        <NavLink to="/IAmJM/" end>
          {({ isActive }) => (
            <div className={`w-14 h-14 flex items-center  p-auto justify-center lg:right-5 bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
              <img
                src={isActive ? AHome : Home}
                className={`w-10 h-10 rounded-full transition-transform transform ${isActive ? "scale-115" : "hover:scale-115"}`}
                alt="Projects"
              />
            </div>
          )}
        </NavLink>
        <NavLink to="/IAmJM/about">
          {({ isActive }) => (
            <div className={`w-14 h-14 flex items-center p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 lg:right-5 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
              <img
                src={isActive ? AAbout : About}
                className={`w-10 h-10 rounded-full transition-transform transform ${isActive ? "scale-115" : "hover:scale-115"}`}
                alt="Projects"
              />
            </div>
          )}
        </NavLink>
        <NavLink to="/IAmJM/projects">
        {({ isActive }) => (
          <div className={`w-14 h-14 flex items-center  p-auto justify-center lg:right-5 bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
            <img
              src={isActive ? AProjects : Project}
              className={`w-10 h-10 rounded-full transition-transform transform ${isActive ? "scale-115" : "hover:scale-115"}`}
              alt="Projects"
            />
          </div>
        )}
        </NavLink>
        <NavLink to="/IAmJM/contacts">
          {({ isActive }) => (
            <div className={`w-14 h-14 flex items-center  p-auto justify-center lg:right-5 bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
            <img
              src={isActive ? AContact : Contacts}
              className={`w-10 h-10 rounded-full transition-transform transform ${isActive ? "scale-115" : "hover:scale-115"}`}
              alt="Projects"
            />
            </div>
          )}
        </NavLink>
        <NavLink to="/IAmJM/blogs">
          {({ isActive }) => (
            <div className={`w-14 h-14 flex items-center  p-auto justify-center lg:right-5 bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
            <img
              src={isActive ? ABlog : Blog}
              className={`w-10 h-10 rounded-full transition-transform transform ${isActive ? "scale-115" : "hover:scale-115"}`}
              alt="Projects"
            />
            </div>
          )}
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
