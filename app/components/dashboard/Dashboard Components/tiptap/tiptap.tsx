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
import { MutableRefObject, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import TextStyle from "@tiptap/extension-text-style";
import Image from "@tiptap/extension-image";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useSelectedPostContext } from "@/app/hooks/useSelectedPostContext";
import { useEditorContext } from "@/app/hooks/useEditorStateContext";

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
  const [customDate, selectCustomDate] = useState<Date>(new Date());
  const [emoji, setEmoji] = useState<EmojiClickData>();
  const [tags, setTags] = useState<string[]>([]);
  const { selectedPost, setSelectedPost } = useSelectedPostContext();
  const { openEditor, setOpenEditor } = useEditorContext();

  const client = axios.create({ baseURL: "/api/posts" });
  const { data: session } = useSession();

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
      <div className="w-full">
        {editor && (
          <div className="mb-2 flex flex-row items-center justify-start w-full gap-2">
            <div className="">
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
                onClick={() =>
                  editor.chain().focus().setTextAlign("left").run()
                }
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
                onClick={() =>
                  editor.chain().focus().setTextAlign("right").run()
                }
                className={`border-2 border-five p-1 m-0.5 hover:bg-three rounded-lg ${
                  editor.isActive({ textAlign: "right" })
                    ? "bg-three text-one"
                    : ""
                }`}>
                <FaAlignRight size={30} />
              </button>
            </div>
            <div className="flex items-center justify-center gap-2">
              <label
                htmlFor="image_upload"
                className="hover:underline text-lg p-1 m-0.5 hover:bg-three hover:text-one rounded-lg whitespace-nowrap">
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
              <p className="text-xl font-bold">|</p>
              <button
                className="hover:underline text-lg p-1 m-0.5 hover:bg-three hover:text-one rounded-lg whitespace-nowrap"
                onClick={() => handleSetImage()}>
                Set image
              </button>
              <p>
                {/*@ts-ignore */}
                {selectedImage.name && "Selected file:"} {/*@ts-ignore */}
                {selectedImage.name ? (
                  //@ts-ignore
                  <span>{selectedImage.name}</span>
                ) : (
                  <span>
                    {/*@ts-ignore */}
                    {selectedImage.name && "None"}
                  </span>
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
          className=" text-five hover:underline text-lg ml-[5px] w-[150px] whitespace-nowrap h-auto rounded-lg mb-2 p-1 hover:bg-three hover:text-one">
          {colorOpen ? "Hide" : "Show"} Colors
        </button>
        {colorOpen && (
          <HexColorPicker
            color={color}
            onChange={(color) => handleColorChange(color)}
            style={{ height: "500px", width: "150px", marginLeft: "5px" }}
          />
        )}
      </div>
    );
  };

  const PickCustomDate = () => {
    return (
      <div className="mb-4 mt-1 ml-4">
        <h2 className="mb-2 text-lg">Date of events:</h2>
        <DatePicker
          className="rounded-lg text-lg w-32 hover:underline focus:underline focus:bg-three focus:text-one hover:bg-three hover:text-one  text-five bg-one cursor-pointer p-2"
          selected={customDate}
          onChange={(date: Date) => selectCustomDate(new Date(date))}
        />
      </div>
    );
  };

  const PickEmoji = () => {
    const [pickerOpen, setPickerOpen] = useState(false);

    return (
      <div className="ml-4 w-[300px]">
        <h2 className="mb-2 text-lg">How are you feeling?</h2>
        <div
          className="flex items-center gap-1 cursor-pointer ml-2"
          onClick={() => setPickerOpen(!pickerOpen)}>
          <img
            src={
              emoji
                ? emoji.imageUrl
                : "https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f602.png"
            }
            alt="emoji"
            width={40}
            height={40}
            referrerPolicy="no-referrer"
          />
          <span className="text-base text-[#8a727c] ml-2">Click to change</span>
        </div>

        {pickerOpen && (
          <EmojiPicker
            className="mt-2 ml-2"
            onEmojiClick={(emojiData, event) => {
              console.log(emojiData);
              setEmoji(emojiData);
            }}
          />
        )}
      </div>
    );
  };

  const TagsInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key !== "Enter") return;

      const target = e.target as HTMLInputElement;

      if (!target.value.trim()) return;

      setTags([...tags, target.value]);

      target.value = "";

      if (inputRef.current !== null) {
        inputRef.current.focus();
      }
    };

    function removeTag(index: number) {
      setTags(tags.filter((el, i) => i !== index));
    }

    return (
      <div className="ml-2 mb-2 p-1 rounded-[3px] w-[250px] flex items-center flex-wrap gap-1">
        <input
          ref={inputRef}
          onKeyUp={handleKeyDown}
          name="tagsInput"
          type="text"
          id=""
          className="flex-grow mb-1 p-1 text-lg focus:bg-white bg-one border-2 border-three outline-none rounded-lg placeholder-two placeholder-opacity-95"
          placeholder="Add a tag..."
        />
        {tags.map((tag, index) => (
          <div
            className=" py-1 px-2 rounded-2xl ml-1 whitespace-break-spaces break-all bg-two"
            key={index}>
            <span className="">{tag}</span>
            <span
              className="h-[20px] w-[20px] bg-[rgb(48,48,48)] text-[#fff] rounded-[50%] inline-flex justify-center items-center ml-1 text-[18px] cursor-pointer"
              onClick={() => removeTag(index)}>
              &times;
            </span>
          </div>
        ))}
      </div>
    );
  };

  const handlePostCreate = async () => {
    if (session && session.user) {
      await client
        .post("", {
          authorEmail: session.user.email,
          title: "",
          mood: "",
          text: "",
          tags: [],
        })
        .then((response) => {
          setSelectedPost({
            ...selectedPost,
            id: 0,
          });

          setOpenEditor(false);
          // console.log(response);
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Menu />
      <div className="flex">
        <EditorContent editor={editor} />
        <ColorPicker />
        <div>
          <h2 className="text-xl font-semibold ml-2 mt-1 mb-2">
            Entry Information:
          </h2>
          <TagsInput />
          <PickCustomDate />
          <PickEmoji />
        </div>
      </div>
      <div
        onClick={handlePostCreate}
        className="shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)] bg-darkerTwo select-none mb-10 hover:underline p-1 m-0.5 text-2xl font-semibold hover:bg-three hover:text-one cursor-pointer rounded-lg">
        Submit Post
      </div>
    </div>
  );
};

export default Tiptap;
