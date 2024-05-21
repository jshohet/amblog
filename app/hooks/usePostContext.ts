import { useContext } from "react";
import { PostContext } from "../Context/store";

export const usePostContext = () => useContext(PostContext);