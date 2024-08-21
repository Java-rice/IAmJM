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
    <div className="fixed top-48 right-20 py-8 border border-[#F5B301]">
      <nav className="flex flex-row relative right-8 lg:flex-col gap-10 z-10 justify-around">
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
