import React from 'react';
import profile from '../../assets/profile.png';

const AnimatedProfile = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <svg 
        width="100%" 
        height="80%"
        max-height="1200" 
        viewBox="0 0 538 545" 
        preserveAspectRatio="xMidYMid meet" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Define the pattern for the profile image */}
        <defs>
          <pattern id="pattern0" patternUnits="objectBoundingBox" width="1" height="1">
            <image href={profile} x="0" y="0" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" />
          </pattern>
        </defs>

        {/* Rectangles with animations */}
        <rect x="30%" y="32%" width="58%" height="44%" fill="#F5B301" className="animate-slide-left delay-450" />
        <rect x="19%" y="20%" width="47%" height="34%" fill="#FED154" className="animate-slide-right delay-450" />
        <rect x="0" y="0" width="100%" height="3.8%" fill="#FED154" className="animate-slide-right" />
        <rect x="37%" y="7%" width="55%" height="3.8%" fill="#FED154" className="animate-slide-right delay-150" />
        <rect x="72%" y="14%" width="16%" height="3.8%" fill="#FED154" className="animate-slide-right delay-300" />
        <rect x="19%" y="82%" width="14.7%" height="3.8%" fill="#FED154" className="animate-slide-left delay-300" />
        <rect x="11%" y="89%" width="49.4%" height="3.8%" fill="#FED154" className="animate-slide-left delay-150" />
        <rect y="96%" width="88.6%" height="3.8%" fill="#FED154" className="animate-slide-right delay-600" />

        {/* Rectangle with the profile image pattern */}
        <rect x="1.4%" y="3.8%" width="94%" height="92%" fill="url(#pattern0)" />
      </svg>
    </div>
  );
};

export default AnimatedProfile;
