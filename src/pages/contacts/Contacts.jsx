import React from "react";
import Navigation from "../../components/navigation/Navigation";
import { Button } from "../../components/button/Button";

const Contacts = () => {
  return (
    <div className="px-[10%] gap-10 font-rubik flex flex-col justify-center items-center h-auto py-[3%]">
      <div className="w-full text-center text-[#FDFDFD]">
        <h1 className="text-4xl"><b>REACH ME OUT</b></h1>
      </div>
      <div className="w-full grid grid-cols-2 gap-10">
        <div className="flex flex-col justify-start gap-5">
          <h2 className="text-[#F5B301] text-3xl"><b>SEND ME A MESSAGE</b></h2>
          <input type="text" placeholder="Full Name" className="p-4 border-b-4 border-[#F5B301]"></input>
          <input type="email" placeholder="Email" className="p-4 border-b-4 border-[#F5B301]"></input>
          <input type="text" placeholder="Mobile Number" className="p-4 border-b-4 border-[#F5B301]"></input>
          <textarea placeholder="Message" className="p-4 border-b-4 h-60 border-[#F5B301]"></textarea>
          <div>
            <Button variant="solid">About Me</Button>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[#FDFDFD] leading-8 text-base text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur atque eligendi laboriosam natus dolores, suscipit magni maiores, neque, error similique eius quod tempora repellat laudantium modi autem sapiente! Quas repellat omnis quibusdam dolor ab recusandae, laborum quisquam reiciendis eligendi nesciunt rerum nulla, repudiandae fuga obcaecati sed sequi quidem quam doloribus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
