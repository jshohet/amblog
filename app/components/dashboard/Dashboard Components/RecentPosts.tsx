"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/app/types/PostType";
import { Pagination } from "@nextui-org/pagination";
import { usePostContext } from "@/app/hooks/usePostContext";
import axios from "axios";
import { convertMoodToEmoji } from "@/app/utils/moodConversion";
import { FaEdit, FaTrashAlt, FaTags } from "react-icons/fa";

const RecentPost = () => {
  //global context provider for current user posts
  const { posts, setPosts } = usePostContext();

  //load all posts for logged in user
  useEffect(() => {
    const postsByUser = async () => {
      await axios
        .get("/api/posts")
        .then((response) => {
          setPosts(response.data);
        })
        .catch((error) => console.log(error));
    };
    postsByUser();
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const npages = Math.ceil(posts.length / recordsPerPage);

  const recentPostsMap = records
    ? records.map((post: Post) => (
        <div
          key={post.id}
          className="w-[300px] rounded-b-lg bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="bg-three flex justify-between rounded-t-lg p-4 text-white ">
            <div>
              <h2 className="font-bold text-xl"> {post.title}</h2>
              <div className="flex items-center gap-2">
                <p className="text-[20px]">{convertMoodToEmoji(post.mood)}</p>
                <p>{new Date(post.createdAt).toDateString()}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <FaEdit size={25} />
              <FaTrashAlt size={25} />
            </div>
          </div>
          <div className="  p-4">
            <p>{JSON.stringify(post.text)}</p>
            <div className="flex gap-2">
              <FaTags size={25} className="rotate-90" />
              {post.tags.map((tag, i) => (
                <div key={i}>
                  <p>{tag}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))
    : "";

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">{recentPostsMap}</div>
      <div className="flex flex-col mt-10">
        <h3 className="text-lg">Pages: </h3>
        <Pagination
          total={npages}
          variant="bordered"
          initialPage={1}
          onChange={setCurrentPage}
          siblings={1}
          showControls={true}
          classNames={{
            base: "mt-2 w-fit",
            wrapper: "gap-0 overflow-visible h-8 rounded border border-divider",
            item: "w-8 h-8 text-small rounded-none bg-transparent",
            cursor: "hidden",
            prev: "hidden",
            next: "hidden",
          }}
        />
      </div>
    </div>
  );
};

export default RecentPost;
