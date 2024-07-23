import React from 'react'

const BlogCards = () => {
  return (
    <div className="w-[90%] bg-[#2A2E34] text-[#FDFDFD] content-center flex flex-row h-auto py-5 px-2 justify-center align-middle gap-2">
        <div className="my-auto px-10">
            <img className='bg-black w-28 h-28 '/>
        </div>
        <div className="w-[80%] text-xl flex flex-col justify-center align-middle">
            <h3 className="text-[#F5B301]">Title</h3>
            <i>Date</i>
            <p>A Computer Science student with a passion for technology, I'm excited about exploring different career paths in the tech world.</p>
        </div>
    </div>
  )
}

export default BlogCards
