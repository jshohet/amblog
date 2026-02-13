"use client";

import React, { useState } from "react";
import {
  FaPinterest,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaTwitch,
} from "react-icons/fa";

const Socials = () => {
  const [activeToast, setActiveToast] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setActiveToast(key);
    window.setTimeout(() => {
      setActiveToast((current) => (current === key ? null : current));
    }, 5000);
  };

  return (
    <div className="flex justify-end gap-3 text-2xl pt-2 mr-2">
      <div className="relative flex flex-col items-center">
        <FaPinterest
          className="text-[#e60023] hover:scale-125 ease-in duration-300 cursor-pointer"
          size={30}
          onClick={() => handleClick("pinterest")}
        />
        {activeToast === "pinterest" && (
          <div className="absolute top-full left-1/2 mt-2 w-max max-w-35 -translate-x-1/2 rounded bg-transparent px-2 py-1 text-center text-xs text-five shadow-sm whitespace-normal wrap-break-word">
            Feature coming soon
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center">
        <FaYoutube
          className="text-[#ff0000] hover:scale-125 ease-in duration-300 cursor-pointer"
          size={30}
          onClick={() => handleClick("youtube")}
        />
        {activeToast === "youtube" && (
          <div className="absolute top-full left-1/2 mt-2 w-max max-w-35 -translate-x-1/2 rounded bg-transparent px-2 py-1 text-center text-xs text-five shadow-sm whitespace-normal wrap-break-word">
            Feature coming soon
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center">
        <FaFacebook
          className="text-[#0866ff] hover:scale-125 ease-in duration-300 cursor-pointer"
          size={30}
          onClick={() => handleClick("facebook")}
        />
        {activeToast === "facebook" && (
          <div className="absolute top-full left-1/2 mt-2 w-max max-w-35 -translate-x-1/2 rounded bg-transparent px-2 py-1 text-center text-xs text-five shadow-sm whitespace-normal wrap-break-word">
            Feature coming soon
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center">
        <FaTwitter
          className="text-[#1c96e8] hover:scale-125 ease-in duration-300 cursor-pointer"
          size={30}
          onClick={() => handleClick("twitter")}
        />
        {activeToast === "twitter" && (
          <div className="absolute top-full left-1/2 mt-2 w-max max-w-35 -translate-x-1/2 rounded bg-transparent px-2 py-1 text-center text-xs text-five shadow-sm whitespace-normal wrap-break-word">
            Feature coming soon
          </div>
        )}
      </div>
      <div className="relative flex flex-col items-center">
        <FaTwitch
          className="text-[#a970ff] hover:scale-125 ease-in duration-300 cursor-pointer"
          size={30}
          onClick={() => handleClick("twitch")}
        />
        {activeToast === "twitch" && (
          <div className="absolute top-full left-1/2 mt-2 w-max max-w-35 -translate-x-1/2 rounded bg-transparent px-2 py-1 text-center text-xs text-five shadow-sm whitespace-normal wrap-break-word">
            Feature coming soon
          </div>
        )}
      </div>
    </div>
  );
};

export default Socials;
