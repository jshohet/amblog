import { Dispatch, SetStateAction } from "react";
import { Post } from "./PostType";

export interface IIdProps {
  selectedPost: Post;
  setSelectedPost: Dispatch<SetStateAction<Post>>;
}
