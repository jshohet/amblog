'use client'

import {useState} from 'react';
import { EditorContext } from "../Context/store";

export default function EditorStateProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    
  const [openEditor, setOpenEditor] = useState<boolean>(false);

  return (
    <EditorContext.Provider value={{ openEditor, setOpenEditor }}>
      {children}
    </EditorContext.Provider>
  );
}