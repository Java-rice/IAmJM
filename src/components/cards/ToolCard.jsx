const ToolCard = ({ title, color, text_color, onClick }) => {
  // Convert title to a Shields.io-compatible URL format
  const formattedTitle = encodeURIComponent(title.replace(/\s+/g, ""));
  const shieldLogoURL = `https://img.shields.io/badge/${formattedTitle}-${color?.replace("#", "")}?style=for-the-badge&labelColor=black&logo=${formattedTitle.toLowerCase()}&logoColor=${color?.replace("#", "")}`;

  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: color || "#2C394B", color: text_color || "#FDFDFD" }}
      className="cursor-pointer relative flex flex-col items-center gap-3 p-4 border border-[#F5B301] rounded-xl shadow-sm hover:scale-105 transition-transform text-center"
    >
      <img
        src={shieldLogoURL}
        alt={title}
        className="w-full h-10 object-contain"
        style={{ filter: text_color === "#FDFDFD" ? "invert(1)" : "none" }}
      />
      <h4 className="text-sm font-semibold">{title}</h4>
    </div>
  );
};

export default ToolCard;
