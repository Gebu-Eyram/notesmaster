"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const Tiptap = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: "<p>Hello World! 🌎️</p>",
  });

  return <EditorContent editor={editor} />;
};

import React from "react";
import Placeholder from "@tiptap/extension-placeholder";
const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({ placeholder: "Write something..." }),
    ],
    editorProps: {
      attributes: {
        class: "focus:outline-none max-h-[90vh] overflow-y-auto",
      },
    },
  });
  return (
    <div className="h-full">
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
