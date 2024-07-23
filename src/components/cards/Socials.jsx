import React from 'react';
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Github from "../../assets/GitHub.png";

const Socials = () => {
  return (
    <div className="border-b-2 border-t-2 border-[#F5B301] py-[3%]">
      <li className="list-none flex flex-row align-center justify-around">
        <ul><a className="cursor-pointer w-12 h-12 m-auto" href="https://www.instagram.com/jamaaaaaaaaaaaak/"><img src={Instagram} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto" href="https://www.facebook.com/johnmark.pacaldoperoche/"><img src={Facebook} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto" href="https://github.com/Java-rice"><img src={Github} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/></a></ul>
        <ul><a className="cursor-pointer w-12 h-12 m-auto" href="https://www.linkedin.com/in/john-mark-peroche-61a756229/"><img src={LinkedIn} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300'/></a></ul>
      </li>
    </div>
  )
}

export default Socials
