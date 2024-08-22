import React from 'react'
import sample from "../../assets/sampleplaceholder.png"
import { Button } from '../button/Button'

const BlogCards = ({title, date, description, img}) => {
  return (
    <div className="w-[100%] text-[#FDFDFD]  h-auto py-5 px-2 grid grid-cols-3 space-x-4">
        <div className="my-auto w-[100%] h-auto col-span-1">
          <img src={sample} alt={title} className='' />
        </div>
        <div className="col-span-2 text-xl flex flex-col gap-2 justify-center align-top ">
            <div className="flex flex-row justify-between align-middle">
              <div>
                <h3 className="text-[#F5B301]"><b>{title}</b></h3>
                <i>{date}</i>
              </div>
              <Button variant="long_solid">Read</Button>
            </div>
            <p class="text-justify">{description}</p>
        </div>
    </div>
  )
}

export default BlogCards
