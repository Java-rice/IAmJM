import React from 'react'
import { NavLink, Link, useNavigate } from "react-router-dom";
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
    <div className="h-auto py-10 fixed lg:top-48 lg:my-auto lg:right-20 bottom-10 mx-auto">
      <div className="lg:h-[80%] h-[40%] lg:w-[80%] w-[120%] absolute -right-12 bottom-3 lg:bottom-36 lg:left-8 z-0 border-2 lg:py-20 border-[#F5B301]"> </div>
      <nav className="h-[40%] flex flex-row lg:flex-col gap-10 z-10 justify-around relative">
        <Link to="/IAmJm/"><img src={AHome} className='w-14 h-14'/></Link>
        <Link to="/IAmJm/about"><img src={AAbout} className='w-14 h-14'/></Link>
        <Link to="/IAmJm/projects"><img src={AProjects} className='w-14 h-14'/></Link>
        <Link to="/IAmJm/contacts"><img src={AContact} className='w-14 h-14'/></Link>
        <Link to="/IAmJm/blogs"><img src={ABlog} className='w-14 h-14'/></Link>
      </nav>
    </div>
  )
}

export default Navigation
