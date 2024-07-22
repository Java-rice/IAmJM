import React from 'react';
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Github from "../../assets/GitHub.png";

const Socials = () => {
  return (
    <div className="border-b-2 border-t-2 border-[#F5B301] py-[3%]">
      <li className="list-none flex flex-row align-center justify-around">
        <ul><a className="cursor-pointer w-12 h-12 m-auto"><img src={Instagram}/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto"><img src={Facebook}/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto"><img src={Github}/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto"><img src={LinkedIn}/></a></ul>
      </li>
    </div>
  )
}

export default Socials
