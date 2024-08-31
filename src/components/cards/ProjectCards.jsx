import React from 'react'
import { Button } from '../button/Button'

const ProjectCards = ({ title, description, imageSrc }) => {
  return (
    <div className='lg:w-[90%] w-[80%] min-w-[370px] mx-auto'>
      <div className='bg-[#D9D9D9] w-auto h-[35vh]' style={{ backgroundImage: `url(${imageSrc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}> 
      </div>
      <div className="border min-width border-[#D9D9D9] flex flex-col justify-center p-9 gap-5">
        <h3 className='text-[#F5B301] font-md text-center'><b>{title}</b></h3>
        <div>
          <p className='text-base text-justify'>{description}</p> 
        </div>
        <Button variant="solid" className="w-[14rem] mx-auto">View Project</Button>
      </div>
    </div>
  )
}

export default ProjectCards
