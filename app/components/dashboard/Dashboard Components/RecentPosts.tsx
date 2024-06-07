"use client";

import React, { useEffect, useState } from "react";
import { Post } from "@/app/types/PostType";
import { Pagination, PaginationCursor } from "@nextui-org/pagination";
import { usePostContext } from "@/app/hooks/usePostContext";
import axios from "axios";
import { convertMoodToEmoji } from "@/app/utils/moodConversion";
import { FaEdit, FaTrashAlt, FaTags } from "react-icons/fa";
import { useSelectedPostContext } from "@/app/hooks/useSelectedPostContext";

const RecentPost = () => {
  //global context provider for current user posts
  const { posts, setPosts } = usePostContext();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedPost, setSelectedPost } = useSelectedPostContext();

  //load all posts for logged in user
  useEffect(() => {
    const postsByUser = async () => {
      setIsLoading(true);
      await axios
        .get("/api/posts")
        .then((response) => {
          setPosts(response.data);
          setIsLoading(false);
        })
        .catch((error) => console.log(error));
    };
    postsByUser();
  }, []);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 2;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = posts.slice(firstIndex, lastIndex);
  const npages = Math.ceil(posts.length / recordsPerPage);

  const recentPostsMap = records
    ? records.map((post: Post) => (
        <div
          key={post.id}
          className="w-[600px] mb-4 rounded-b-lg bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
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
              <FaTags size={25} className="rotate-90 text-four" />
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
      {selectedPost.id === 0 ? (
        <div>
          <h2 className="text-xl mb-10 font-semibold text-five">
            Recent Posts
          </h2>
          {isLoading ? (
            <div>Posts are loading, please wait...</div>
          ) : (
            <div className="">{recentPostsMap}</div>
          )}
          <div className="flex flex-col ori mt-10">
            <h3 className="text-lg text-five">Page: {currentPage} </h3>
            <Pagination
              total={npages}
              variant="bordered"
              initialPage={1}
              onChange={setCurrentPage}
              page={currentPage}
              siblings={1}
              showControls={true}
              loop={true}
              disableAnimation={false}
              disableCursorAnimation={false}
              classNames={{
                base: "mt-2 w-fit",
                wrapper:
                  "gap-0 overflow-visible h-8 rounded border border-divider",
                item: "w-8 h-8 text-small rounded-none bg-transparent",
                cursor: "hidden",
                prev: "",
                next: "",
              }}
            />
          </div>
        </div>
      ) : (
        <div>
          <h2 className="text-xl mb-10 font-semibold text-five">
            {selectedPost.title}
          </h2>
          <div
            key={selectedPost.id}
            className="w-[800px] mb-4 rounded-b-lg bg-[#D9D9D9] shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
            <div className="bg-three flex justify-between rounded-t-lg p-4 text-white ">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[20px]">
                    {convertMoodToEmoji(selectedPost.mood)}
                  </p>
                  <p>{new Date(selectedPost.createdAt).toDateString()}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <FaEdit size={25} />
                <FaTrashAlt size={25} />
              </div>
            </div>
            <div className="  p-4">
              <p>{JSON.stringify(selectedPost.text)}</p>
              <div className="flex gap-2">
                <FaTags size={25} className="rotate-90 text-four" />
                {selectedPost.tags.map((tag, i) => (
                  <div key={i}>
                    <p>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecentPost;
