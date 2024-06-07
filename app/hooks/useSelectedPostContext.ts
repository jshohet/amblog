import { useContext } from "react";
import { SelectedPostContext } from "../Context/store";

export const useSelectedPostContext = () => useContext(SelectedPostContext);