const ToolCard = ({ imgSrc, title, color, text_color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color || "#2C394B", color: text_color || "#FDFDFD" }}
      className="cursor-pointer relative flex flex-col items-center gap-3 p-4 border border-[#F5B301] rounded-xl shadow-sm hover:scale-105 transition-transform"
    >
      <img src={imgSrc} alt={title} className="w-10 h-10" style={{ filter: text_color === "#FDFDFD" ? "invert(1)" : "none" }} />
      <h4 className="text-sm font-semibold">{title}</h4>
    </div>
  );
};

export default ToolCard;
