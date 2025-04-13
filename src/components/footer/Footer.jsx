import React from "react";
import Name from "../logo/Name";
import Facebook from "@src/assets/Facebook.png";
import Instagram from "@src/assets/Instagram.png";
import LinkedIn from "@src/assets/LinkedIn.png";
import Github from "@src/assets/GitHub.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#3B4046] text-[#FDFDFD] px-6 md:px-[10%] py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between items-start">
        {/* Left Side */}
        <div className="flex flex-col gap- text-center md:text-left">
          <div className="w-fit mx-auto md:mx-0">
            <Name />
          </div>
          <p className="text-sm opacity-80">Bocaue, Bulacan</p>
          <p className="text-sm opacity-80">© 2024 John Mark Peroche</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col text-center md:text-right items-center md:items-end">
          <h4 className="text-lg font-semibold tracking-wide">Reach Out</h4>
          <p className="text opacity-80">johnmark.p.peroche@gmail.com</p>
          <p className="text opacity-80">perochejmp@gmail.com</p>
          <ul className="flex gap-4">
            <li>
              <a
                href="https://www.instagram.com/jamaaaaaaaaaaaak/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Instagram}
                  alt="Instagram"
                  className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/johnmark.pacaldoperoche/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Facebook}
                  alt="Facebook"
                  className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Java-rice"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={Github}
                  alt="GitHub"
                  className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/john-mark-peroche-61a756229/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn"
                  className="w-6 h-6 transition-transform duration-300 hover:scale-125 hover:-translate-y-1"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
