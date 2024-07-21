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
    <div className="h-[80%] py-12 relative">
      <div className="h-[100%] w-[80%] absolute top-0 left-8 z-0 border-2 py-20 border-[#F5B301]"> </div>
      <nav className="h-[40%] flex flex-col gap-10 z-10 justify-around relative">
        <Link to="/"><img src={AHome}/></Link>
        <Link to="/about"><img src={AAbout}/></Link>
        <Link to="/projects"><img src={AProjects}/></Link>
        <Link to="/contact"><img src={AContact}/></Link>
        <Link to="/blog"><img src={ABlog}/></Link>
      </nav>
    </div>
  )
}

export default Navigation
