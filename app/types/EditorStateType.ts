import { Dispatch, SetStateAction } from "react";

export interface IEditorProps {
  openEditor: boolean;
  setOpenEditor: Dispatch<SetStateAction<boolean>>;
}
