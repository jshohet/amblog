"use client";
import { usePostContext } from "@/app/hooks/usePostContext";
import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { PiCaretDownBold } from "react-icons/pi";
import { getArchiveHeaders } from "@/app/utils/getArchiveHeaders";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Months } from "@/app/enums/MonthsEnum";

const Archive = () => {
  const { posts, setPosts } = usePostContext();
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2024-03-25"));
  const [endDate, setEndDate] = useState(new Date("2024-07-25"));
  const [error, setError] = useState(false);
  const [archiveHeaders, setArchiveHeaders] = useState(getArchiveHeaders(posts))

  useEffect(() => {
    if (startDate > endDate) {
      setError(true);
    } else {
      setError(false);
    }
  }, [startDate, endDate]);

  useEffect(() =>{
    setArchiveHeaders(getArchiveHeaders(posts))
  },[posts])

  console.log(archiveHeaders, startDate, endDate)

  // const handleFormSubmit = (e: React.MouseEvent<HTMLDivElement>) => {
  //   e.preventDefault();
  //   console.log((getArchiveHeaders(posts.filter((e) => {
  //     return (
  //       new Date(e.createdAt) <= startDate && new Date(e.createdAt) >= endDate
  //     );
  //   }))));
  // };

  const yearsInPosts = Object.keys(archiveHeaders).map((year) => (
    <Accordion className="bg-four shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[0.2rem] text-one">
      <AccordionSummary
        expandIcon={<PiCaretDownBold size={25} className="text-one" />}>
        <h2>{year}</h2>
      </AccordionSummary>
      <AccordionDetails>
        {Object.keys(archiveHeaders[year]).map((month: any) => (
          <Accordion className="bg-one rounded-[0.2rem] mb-2">
            <AccordionSummary
              expandIcon={<PiCaretDownBold size={25} className="text-five" />}>
              <h2>{Months[month]}</h2>
            </AccordionSummary>
            {archiveHeaders[year][month].map((date, idx) => (
              <div
                key={idx}
                className="mx-3 pb-1 hover:text-three/70 hover:font-semibold hover:transition-all hover:duration-100 cursor-pointer">
                {date.id} - {date.title}
              </div>
            ))}
          </Accordion>
        ))}
      </AccordionDetails>
    </Accordion>
  ));

  return (
    <div
      className="ml-24 h-fit p-4 rounded-lg shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]"
      style={{
        background: `linear-gradient(180deg, #A38994 0%, #D1D0CC 100%)`,
      }}>
      <h2 className="text-xl font-bold text-five mb-10">Archived Posts</h2>
      <Accordion
        expanded={open}
        onChange={() => setOpen(!open)}
        className="bg-four shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[0.2rem] text-one">
        <AccordionSummary
          expandIcon={<PiCaretDownBold size={25} className="text-one" />}>
          <h2 className="text-xl">Filter Options</h2>
        </AccordionSummary>
        <AccordionDetails className="">
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-[30%_auto]">
              <label htmlFor="">Start Date</label>
              <DatePicker
                className="mx-10 rounded-sm w-28 text-black p-2"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
              />
            </div>
            <div className="grid grid-cols-[30%_auto]">
              <label htmlFor="">End Date</label>
              <DatePicker
                className="mx-10 rounded-sm w-28 text-black p-2"
                selected={endDate}
                onChange={(date: Date) => setEndDate(date)}
              />
            </div>
            {error && (
              <p className="text-red-500/85 font-semibold">
                Please select a valid date range.
              </p>
            )}
            <div className="mt-10">
              <h2>Tags</h2>
            </div>
            <div className="flex justify-end">
              {error ? (
                <div className="bg-slate-500 px-4 text-lg py-2 w-fit rounded-md cursor-not-allowed">
                  Filter
                </div>
              ) : (
                <div
                  // onClick={handleFormSubmit}
                  className="bg-three px-4 text-lg py-2 w-fit rounded-md cursor-pointer">
                  Filter
                </div>
              )}
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
      <div className="h-fit mt-2 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        {yearsInPosts}
      </div>
    </div>
  );
};

export default Archive;
