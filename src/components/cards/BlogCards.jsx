// src/components/cards/BlogCards.jsx

import React from "react";

import { Button } from "../button/Button";

const BlogCards = ({ id, title, date, description, onReadClick }) => {
  return (
    <div className="w-[100%] text-[#FDFDFD] h-auto pb-5 lg:py-5 px-2 lg:grid lg:grid-cols-3 lg:space-x-4">
      <div className="my-auto w-100 h-auto lg:col-span-1">
        <img  alt={title} className="mx-auto w-[100%]" />
      </div>

      <div className="lg:col-span-2 mt-4 text-xl flex flex-col gap-4 justify-center">
        <div className="flex lg:flex-row flex-col gap-4 justify-between">
          <div className="lg:text-left text-center">
            <h3 className="text-[#F5B301] font-bold">{title}</h3>
            <i>{date}</i>
          </div>
          <Button variant="long_solid" onClick={onReadClick}>
            Read
          </Button>
        </div>
        <p className="text-justify indent-16 text-base">{description}</p>
      </div>
    </div>
  );
};

export default BlogCards;
