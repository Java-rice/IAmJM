import React from 'react'
import Name from '../logo/Name'
import Facebook from "@src/assets/Facebook.png";
import Instagram from "@src/assets/Instagram.png";
import LinkedIn from "@src/assets/LinkedIn.png";
import Github from "@src/assets/GitHub.png"

const Footer = () => {
  return (
    <div className='w-full bg-[#3B4046] py-6 text-[#FDFDFD] text-l px-[10%] flex lg:flex-row flex-col gap-5 justify-between align-middle'>
      <div className='text-center lg:text-left'>
        <div className='lg:relative lg:right-4'>
          <Name />
        </div>
        <div className='w-100 lg:right-4'>
          <p className='text-xs'>Bocaue, Bulacan</p>
          <p className='text-xs'>@ 2024 John Mark Peroche</p>
        </div>
      </div>
      <div className='lg:text-right text-center'>
        <h4 className='text-md'><b>REACH OUT</b></h4>
        <p className='text-xs'>johnmark.p.peroche@gmail.com</p>
        <ul className="list-none flex flex-row align-center justify-center lg:justify-end gap-2">
          <li><a className="cursor-pointer" href="https://www.instagram.com/jamaaaaaaaaaaaak/"><img src="./Instagram.png" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' style={{ width: '1.4rem', height: '1.4rem' }}/></a></li>
          <li><a className="cursor-pointer" href="https://www.facebook.com/johnmark.pacaldoperoche/"><img src={Facebook} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' style={{ width: '1.4rem', height: '1.4rem' }}/></a></li>
          <li><a className="cursor-pointer" href="https://github.com/Java-rice"><img src={Github} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' style={{ width: '1.4rem', height: '1.4rem' }}/></a></li>
          <li><a className="cursor-pointer" href="https://www.linkedin.com/in/john-mark-peroche-61a756229/"><img src={LinkedIn} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125 duration-300' style={{ width: '1.4rem', height: '1.4rem' }}/></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer
