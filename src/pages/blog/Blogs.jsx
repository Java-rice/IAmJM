import React from "react";
import Navigation from "../../components/navigation/Navigation";
import BlogCards from "../../components/cards/BlogCards";

const Blogs = () => {
  return (
    <div className="px-[10%] gap-10 text-[#FDFDFD] font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="w-[100%] text-left">
        <h1 className="font-bold left-0 text-4xl">BLOGS</h1>
      </div>
      <div className="w-[100%] flex flex-col justify-center align-middle lg:py-0 py-[10%] mb-20 h-72 lg:h-auto overflow-auto gap-4">
        <BlogCards></BlogCards>
        <BlogCards></BlogCards>
        <BlogCards></BlogCards>
        <BlogCards></BlogCards>
        <BlogCards></BlogCards>
      </div>
      <Navigation></Navigation>
    </div>
  );
};

export default Blogs;
