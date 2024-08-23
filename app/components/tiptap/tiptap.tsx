"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extension-placeholder";
import { Color } from "@tiptap/extension-color";
import {
  FaBold,
  FaItalic,
  FaStrikethrough,
  FaUnderline,
  FaParagraph,
  FaAlignCenter,
  FaAlignLeft,
  FaAlignRight,
} from "react-icons/fa";
import { LuHeading1, LuHeading2, LuHeading3 } from "react-icons/lu";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Typography from "@tiptap/extension-typography";
import ImageResize from "tiptap-extension-resize-image";
import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Typography,
      Underline,
      Image.configure({ inline: true }),
      ImageResize,
      TextStyle,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({
        placeholder: "Start typing here...",
        emptyNodeClass:
          "first:before:h-0 first:before:text-gray-400 first:before:float-left first:before:content-[attr(data-placeholder)] first:before:pointer-events-none",
      }),
      Color.configure({
        types: [TextStyle.name],
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose [&_ol]:list-decimal [&_ul]:list-disc min-h-[800px] h-auto min-w-[800px] w-auto max-w-[1200px] mb-10 rounded-md border-2 p-2 border-five bg-white/50",
      },
    },
    autofocus: true,
    injectCSS: false,
  });
  const [color, setColor] = useState("#aabbcc");
  const [selectedImage, setSelectedImage] = useState<Blob | MediaSource>(
    new Blob()
  );
  const handleColorChange = (color: any) => {
    if (editor) {
      editor.chain().focus().setColor(color).run();
      setColor(color);
    }
  };

  const handleSetImage = (): any => {
    if (editor) {
      editor
        .chain()
        .focus()
        .setImage({ src: URL.createObjectURL(selectedImage) })
        .run();
      editor.commands.createParagraphNear();
      editor.commands.setTextSelection(editor.state.selection.to);
      setSelectedImage(new Blob());
    }
  };

  const Menu = () => {
    return (
      <div className="">
        {editor && (
          <div className="mb-2">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("bold") ? "bg-three text-one" : ""
              }`}>
              <FaBold size={30} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("italic") ? "bg-three text-one" : ""
              }`}>
              <FaItalic size={30} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("strike") ? "bg-three text-one" : ""
              }`}>
              <FaStrikethrough size={30} />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("underline") ? "bg-three text-one" : ""
              }`}>
              <FaUnderline size={30} />
            </button>
            <button
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("paragraph") ? "bg-three text-one" : ""
              }`}>
              <FaParagraph size={30} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("heading", { level: 1 })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <LuHeading1 size={30} className="" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("heading", { level: 2 })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <LuHeading2 size={30} className="" />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 3 }).run()
              }
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive("heading", { level: 3 })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <LuHeading3 size={30} className="" />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive({ textAlign: "left" })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <FaAlignLeft size={30} />
            </button>
            <button
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive({ textAlign: "center" })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <FaAlignCenter size={30} />
            </button>
            <button
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                editor.isActive({ textAlign: "right" })
                  ? "bg-three text-one"
                  : ""
              }`}>
              <FaAlignRight size={30} />
            </button>
            {/* <button onClick={addImage}>Set image</button> */}
            <div className="flex items-center justify-center gap-2 mt-2">
              <label
                htmlFor="image_upload"
                className="border-2 border-five p-1 m-0.5 hover:bg-three hover:text-one rounded-lg whitespace-nowrap">
                Upload Image
              </label>
              <input
                type="file"
                name="myImage"
                id="image_upload"
                className="hidden"
                // Event handler to capture file selection and update the state
                onChange={(event) => {
                  //@ts-ignore
                  setSelectedImage(event.target.files[0]); //Update the state with the selected image
                }}
              />
              <button
                className="border-2 border-five p-1 m-0.5 hover:bg-three hover:text-one rounded-lg whitespace-nowrap"
                onClick={() => handleSetImage()}>
                Set image
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Selected image: {/*@ts-ignore */}
                {selectedImage.name ? (
                  //@ts-ignore
                  <span>{selectedImage.name}</span>
                ) : (
                  <span>None</span>
                )}
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const ColorPicker = () => {
    const [colorOpen, setColorOpen] = useState(true);

    return (
      <div className="ml-2">
        <button
          onClick={() => setColorOpen(!colorOpen)}
          className="border-2 text-four border-four ml-[5px] w-[100px] h-auto rounded-lg mb-2 p-1 hover:bg-three hover:text-one">
          {colorOpen ? "Hide" : "Show"} Colors
        </button>
        {colorOpen && (
          <HexColorPicker
            color={color}
            onChange={(color) => handleColorChange(color)}
            style={{ height: "500px", width: "100px", marginLeft: "5px" }}
          />
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <Menu />
      <div className="flex">
        <EditorContent editor={editor} />
        <ColorPicker />
      </div>
    </div>
  );
};

export default Tiptap;
