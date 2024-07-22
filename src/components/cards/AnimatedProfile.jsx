import React from 'react';
import profile from '../../assets/profile.png';

const AnimatedProfile = () => {
  return (
    <div className="lg:w-[55%] w-[100%] relative">
      {/* Top Bar */}
      <div className="w-[100%] h-7 bg-[#FED154] absolute top-0 animate-slide-right"></div>
      <div className="relative">
        {/* Left Side Bars */}
        <div className="w-[50%] h-7 bg-[#FED154] absolute right-24 top-[1rem] animate-slide-right delay-150"></div>
        <div className="w-[20%] h-7 bg-[#FED154] absolute right-32 top-[4rem] animate-slide-right delay-300"></div>
        <div className="w-[50%] h-72 bg-[#FED154] absolute left-20 top-[8rem] z-10 animate-slide-right delay-450"></div>
        
        {/* Profile Image */}
        <img src={profile} alt="Profile" className="relative z-20 mt-8 mx-auto" />
        
        {/* Right Side Bars */}
        <div className="w-[50%] h-80 bg-[#F5B301] absolute right-20 top-[12rem] animate-slide-left delay-450"></div>
        <div className="w-[20%] h-7 bg-[#FED154] absolute left-32 top-[34rem] animate-slide-left delay-300"></div>
        <div className="w-[50%] h-7 bg-[#FED154] absolute left-20 top-[37rem] animate-slide-left delay-150"></div>
      </div>
      {/* Bottom Bar */}
      <div className="w-[82%] h-7 bg-[#FED154] absolute bottom-30 animate-slide-right delay-600"></div>
    </div>
  );
};

export default AnimatedProfile;
