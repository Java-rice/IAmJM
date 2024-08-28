import React from 'react';

const ToolCard = ({ imgSrc, title, description }) => {
  return (
    <div className="tool-card">
      <div className="image-container">
        <img src={imgSrc} alt={title} />
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ToolCard;