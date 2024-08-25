"use client";
import React, { useState } from "react";
import Tiptap from "./tiptap/tiptap";
import RecentPost from "./RecentPosts";
import Archive from "./Archive";

const TiptapHandler = () => {
  const [openEditor, setOpenEditor] = useState(false);
  return (
    <div className="w-full flex flex-col items-center ">
      <div onClick={() => setOpenEditor(!openEditor)}>
        {!openEditor ? (
          <h2 className="select-none mb-10 hover:underline p-1 m-0.5 text-2xl font-semibold hover:bg-three hover:text-one cursor-pointer rounded-lg">
            Create new Post
          </h2>
        ) : (
          <h2 className="select-none mb-2 hover:underline p-1 m-0.5 text-lg font-semibold hover:bg-three hover:text-one cursor-pointer rounded-lg">
            Close Editor
          </h2>
        )}
      </div>
      {openEditor && <Tiptap />}
      {!openEditor && (
        <div className="w-full flex">
          <RecentPost />
          <Archive />
        </div>
      )}
    </div>
  );
};

export default TiptapHandler;
