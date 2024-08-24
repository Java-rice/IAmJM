import React from 'react'
import { Button } from '../button/Button'

const LayoutCards = () => {
  return (
    <div className='w-[45%] mx-auto'>
      <div className='bg-[#D9D9D9] w-auto h-[35vh]'> </div>
      <div className="border min-width border-[#D9D9D9] flex flex-col justify-center p-9 gap-5">
        <h3 className='text-[#F5B301] font-md text-center'><b>To Do List Applicaion</b></h3>
        <div>
            <p className='text-base text-justify'>A Computer Science student with a passion for technology, I'm excited about exploring different career paths in the tech world.</p> 
        </div>
        <Button variant="solid" className="w-[14rem] mx-auto">View Design</Button>
      </div>
    </div>
  )
}

export default LayoutCards
