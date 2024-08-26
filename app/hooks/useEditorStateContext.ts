import { useContext } from "react";
import { EditorContext } from "../Context/store";

export const useEditorContext = () => useContext(EditorContext);