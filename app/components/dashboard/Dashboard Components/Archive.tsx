"use client";
import { usePostContext } from "@/app/hooks/usePostContext";
import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { PiCaretDownBold } from "react-icons/pi";

const Archive = () => {
  const { posts, setPosts } = usePostContext();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="ml-24 p-4 rounded-lg shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
      style={{
        background: `linear-gradient(180deg, #A38994 0%, #D1D0CC 100%)`,
      }}>
      <h2 className="text-xl font-bold text-five mb-10">Archived Posts</h2>
      <Accordion
        expanded={open}
        onChange={() => setOpen(!open)}
        className="bg-four shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] text-one">
        <AccordionSummary expandIcon={<PiCaretDownBold size={25} className="text-one"/>}>
          <h2 className="text-xl">Filter Options</h2>
        </AccordionSummary>
        <AccordionDetails>
          <form className="flex flex-col gap-4">
            <div>
              <label htmlFor="">Start Date</label>
              <input className="mx-10 rounded-sm w-28" />
            </div>
            <div>
              <label htmlFor="">End Date</label>
              <input className="mx-10 rounded-sm w-28" />
            </div>
            <div className="mt-10">
              <h2>Tags</h2>
            </div>
            <div className="flex justify-end">
              <button className="bg-three px-4 text-lg py-2 w-fit rounded-md">
                Filter
              </button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Archive;
