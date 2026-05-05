"use client";
import React, { useEffect, useState } from "react";
import Tiptap from "./tiptap/tiptap";
import RecentPost from "./RecentPosts";
import Archive from "./Archive";
import { useEditorContext } from "@/app/hooks/useEditorStateContext";
import { useRouter, useSearchParams } from "next/navigation";

const TiptapHandler = () => {
  const { openEditor, setOpenEditor } = useEditorContext();
  const [urlState, setUrlState] = useState<string>("");

  const params = useSearchParams().get("state");


  useEffect(() => {
    if (params === "imgur") {
      setUrlState(window.location.hash);
    }   
  }, []);


  //redirect and save to localStorage for now
  //TODO - maybe use cookies instead
  useEffect(() =>{
    if(urlState && urlState.length > 0){
      localStorage.setItem("imgur info", JSON.stringify(urlState.split('&')))
      window.location.assign("http://localhost:3000/")
    }
  }, [])


  return (
    <div className="w-full flex flex-col items-center ">
      <p>{urlState}</p>
      <p>{params}</p>
      <div onClick={() => setOpenEditor(!openEditor)}>
        {!openEditor ? (
          <h2 className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-two select-none mb-10 hover:underline p-1 m-0.5 text-2xl font-semibold hover:bg-three hover:text-one cursor-pointer rounded-lg">
            Create new Post
          </h2>
        ) : (
          <h2 className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] select-none mb-2 hover:underline bg-two p-1 m-0.5 text-lg font-semibold hover:bg-three hover:text-one cursor-pointer rounded-lg">
            Close Editor
          </h2>
        )}
      </div>
      {openEditor && <Tiptap />}
      {!openEditor && (
        <div className="w-full relative">
          <RecentPost />
          <Archive />
        </div>
      )}
    </div>
  );
};

export default TiptapHandler;
