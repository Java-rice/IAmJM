import React from 'react';
import profile from '../../assets/profile.png';

const AnimatedProfile = () => {
  return (
    <div className="w-[100%] relative">
      {/* Top Bar */}
      <div className="relative">
        <div className="w-[100%] min-w-4xl h-[4%] bg-[#FED154] absolute -top-10 animate-slide-right"></div>
        {/* Left Side Bars */}
        <div className="w-[50%] h-[4%] bg-[#FED154] absolute right-24 top-[1rem] animate-slide-right delay-150"></div>
        <div className="w-[20%] h-[4%] bg-[#FED154] absolute right-32 top-[4rem] animate-slide-right delay-300"></div>
        <div className="w-[50%] h-[40%] bg-[#FED154] absolute left-20 top-[8rem] z-10 animate-slide-right delay-450"></div>
        
        {/* Profile Image */}
        <img src={profile} alt="Profile" className="relative z-20 h-[80%] mx-auto" />
        
        {/* Right Side Bars */}
        <div className="w-[50%] h-[50%] bg-[#F5B301] absolute right-20 top-[12rem] animate-slide-left delay-450"></div>
        <div className="w-[20%] h-[4%] bg-[#FED154] absolute left-32 top-[34rem] animate-slide-left delay-300"></div>
        <div className="w-[50%] h-[4%] bg-[#FED154] absolute left-20 top-[37rem] animate-slide-left delay-150"></div>
        <div className="w-[82%] h-[4%] bg-[#FED154] absolute bottom-30 animate-slide-right delay-600"></div>
      </div>
      {/* Bottom Bar */}
    </div>
  );
};

export default AnimatedProfile;
