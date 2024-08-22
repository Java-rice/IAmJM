import React from 'react'
import sample from "../../assets/sampleplaceholder.png"
import { Button } from '../button/Button'

const BlogCards = ({title, date, description, img}) => {
  return (
    <div className="w-[100%] text-[#FDFDFD] h-auto pb-5 lg:py-5 px-2 lg:grid lg:grid-cols-3 lg:space-x-4">
        <div className="my-auto w-100 h-auto lg:col-span-1">
          <img src={sample} alt={title} className='mx-auto w-[100%]' />
        </div>
        <div className="lg:col-span-2 mt-4 text-xl flex flex-col gap-4 lg:gap-2 justify-center align-top ">
            <div className="flex lg:flex-row flex-col gap-4 justify-between align-middle">
              <div className="lg:text-left text-l text-center">
                <h3 className="text-[#F5B301]"><b>{title}</b></h3>
                <i>{date}</i>
              </div>
              <Button variant="long_solid">Read</Button>
            </div>
            <p class="text-justify indent-16 text-base">{description}</p>
        </div>
    </div>
  )
}

export default BlogCards
