import React from "react";

const ToolCard = ({ imgSrc, color, text_color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color || "#2C394B",
        color: text_color || "#FDFDFD",
      }}
      className="cursor-pointer relative flex items-center justify-center p-4 border border-[#F5B301] rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out text-center"
    >
      {imgSrc && (
        <img
          src={imgSrc}
          alt="Tool Badge"
          className="w-full h-10 object-contain"
          style={{
            filter: text_color === "#FDFDFD" ? "invert(1)" : "none",
          }}
        />
      )}
    </div>
  );
};

export default ToolCard;
