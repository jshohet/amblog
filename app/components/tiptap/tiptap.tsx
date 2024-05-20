"use client";

import { useEditor, EditorContent,  } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";

const Tiptap = () => {
  const editor = useEditor({
    
    extensions: [
      StarterKit,
      Placeholder.configure({
        placeholder: "Start typing here...",
        emptyNodeClass:
          "first:before:h-0 first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
      }),
      Color.configure({
        types: ["textStyle"],
      }),
    ],
    editorProps:{
        attributes:{
            class:"h-[500px] rounded-sm border-2 p-2 border-slate-500"
        }
    },
    autofocus: true,
    injectCSS:false,
    
  });

  return <EditorContent editor={editor} />;
};

export default Tiptap;
