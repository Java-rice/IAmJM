import React from 'react'
import Name from '../logo/Name'
import Facebook from "../../assets/Facebook.png";
import Instagram from "../../assets/Instagram.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Github from "../../assets/GitHub.png"

const Footer = () => {
  return (
    <div className='w-100 bg-[#3B4046] h-[10%] lg:py-4 py-6 bottom-0 relative text-[#FDFDFD] text-l px-[10%] flex lg:flex-row flex-col gap-5 justify-between align-middle'>
      <div className='text-center lg:text-left'>
        <div className='lg:relative lg:right-4 '>
          <Name/>
        </div>
        <p>Bocaue, Bulacan</p>
        <p>@ 2024 John Mark Peroche</p>
      </div>
      <div className='lg:text-right text-center'>
        <h4><b>REACH OUT</b></h4>
        <p>johnmark.p.peroche@gmail.com</p>
        <li className="list-none flex flex-row align-center lg:justify-between justify-center gap-2">
          <ul><a className="cursor-pointer w-1 h-1 m-auto" href="https://www.instagram.com/jamaaaaaaaaaaaak/"><img src={Instagram} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' 
          style={{ width: '2.5rem', height: '2.5rem' }}/></a></ul>
          <ul><a className="cursor-pointer w-1 h-1 m-auto" href="https://www.facebook.com/johnmark.pacaldoperoche/"><img src={Facebook} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' 
          style={{ width: '2.5rem', height: '2.5rem' }}/></a></ul>
          <ul><a className="cursor-pointer w-1 h-1 m-auto" href="https://github.com/Java-rice"><img src={Github} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' 
          style={{ width: '2.5rem', height: '2.5rem' }}/></a></ul>
          <ul><a className="cursor-pointer w-1 h-1 m-auto" href="https://www.linkedin.com/in/john-mark-peroche-61a756229/"><img src={LinkedIn} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' 
          style={{ width: '2.5rem', height: '2.5rem' }}/></a></ul>
      </li>
      </div>
    </div>
  )
}

export default Footer
