import React from "react";
import { NavLink } from "react-router-dom";
import AHome from "../../assets/AHome.png";
import AAbout from "../../assets/AAbout.png";
import AContact from "../../assets/AContact.png";
import AProjects from "../../assets/AProjects.png";
import ABlog from "../../assets/ABlog.png";
import Home from "../../assets/Home.png";
import About from "../../assets/About.png";
import Contacts from "../../assets/Contacts.png";
import Project from "../../assets/Project.png";
import Blog from "../../assets/Blog.png";

const Navigation = () => {
  return (
    <div className="sticky rounded-md my-12 max-w-[80%] w-full bottom-12 left-0 right-0 lg:my-0 lg:fixed lg:w-auto lg:max-w-none lg:bottom-auto lg:right-32 lg:left-auto lg:top-48 mx-auto lg:py-8 bg-[#3B4046] z-20 pointer-events-none">
      <nav className="flex flex-row relative lg:flex-col gap-10 justify-around pointer-events-auto">
        <NavLink to="/IAmJM/" end>
          {({ isActive }) => (
            <div className={`w-14 h-14 flex items-center  p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
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
            <div className={`w-14 h-14 flex items-center p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
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
          <div className={`w-14 h-14 flex items-center  p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
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
            <div className={`w-14 h-14 flex items-center  p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
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
            <div className={`w-14 h-14 flex items-center  p-auto justify-center bg-[#1E2329] relative lg:bottom-0 bottom-4 rounded-full transition-transform transform ${isActive ? "scale-125" : "hover:scale-125"} hover:brightness-110`}>
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
