import React from 'react';
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
    <div className="fixed top-48 right-20 py-8 border border-[#F5B301]">
      <nav className="flex flex-row relative right-8 lg:flex-col gap-10 z-10 justify-around">
        <NavLink to="/IAmJM/" end>
          {({ isActive }) => (
            <img src={isActive ? AHome : Home} className='w-14 h-14' alt="Home" />
          )}
        </NavLink>
        <NavLink to="/IAmJM/about">
          {({ isActive }) => (
            <img src={isActive ? AAbout : About} className='w-14 h-14' alt="About" />
          )}
        </NavLink>
        <NavLink to="/IAmJM/projects">
          {({ isActive }) => (
            <img src={isActive ? AProjects : Project} className='w-14 h-14' alt="Projects" />
          )}
        </NavLink>
        <NavLink to="/IAmJM/contacts">
          {({ isActive }) => (
            <img src={isActive ? AContact : Contacts} className='w-14 h-14' alt="Contacts" />
          )}
        </NavLink>
        <NavLink to="/IAmJM/blogs">
          {({ isActive }) => (
            <img src={isActive ? ABlog : Blog} className='w-14 h-14' alt="Blogs" />
          )}
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
