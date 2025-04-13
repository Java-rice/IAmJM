import React from "react";

const ToolCard = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-4 bg-[#2C394B] border border-[#F5B301] rounded-xl shadow-sm hover:scale-105 transition-transform">
      <img src={imgSrc} alt={title} className="w-10 h-10" />
      <h4 className="text-sm text-[#FDFDFD] font-semibold">{title}</h4>
    </div>
  );
};

export default ToolCard;
