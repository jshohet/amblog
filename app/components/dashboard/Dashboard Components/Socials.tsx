import React from "react";
import {
  FaPinterest,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex justify-end gap-3 text-2xl pt-2 mr-2">
      <FaPinterest className="text-[#e60023] hover:scale-125 ease-in duration-300 cursor-pointer" size={30} />
      <FaYoutube className="text-[#ff0000] hover:scale-125 ease-in duration-300 cursor-pointer" size={30} />
      <FaFacebook className="text-[#0866ff] hover:scale-125 ease-in duration-300 cursor-pointer" size={30} />      
      <FaTwitter className="text-[#1c96e8] hover:scale-125 ease-in duration-300 cursor-pointer" size={30} />
      <FaTwitch className="text-[#a970ff] hover:scale-125 ease-in duration-300 cursor-pointer" size={30} />
    </div>
  );
};

export default Socials;
