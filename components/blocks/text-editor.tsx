"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import React from "react";
import Placeholder from "@tiptap/extension-placeholder";
import Bold from "@tiptap/extension-bold";
import Paragraph from "@tiptap/extension-paragraph";
import { Button } from "../ui/button";
import EditorExtension from "./editor-extension";
import Highlight from "@tiptap/extension-highlight";
import Code from "@tiptap/extension-code";
import Strike from "@tiptap/extension-strike";
import GapCursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import TextAlign from "@tiptap/extension-text-align";
const TextEditor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Placeholder.configure({ placeholder: "Start taking your notes here..." }),
      Bold,
      Paragraph,
      Highlight.configure({ multicolor: true }),
      Code,
      Strike,
      GapCursor,
      OrderedList,
      BulletList,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
    ],
    content: `
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th colspan="3">Description</th>
            </tr>
            <tr>
              <td>Cyndi Lauper</td>
              <td>Singer</td>
              <td>Songwriter</td>
              <td>Actress</td>
            </tr>
          </tbody>
        </table>
      `,
    editorProps: {
      attributes: {
        class: "focus:outline-none max-h-[90vh] overflow-y-auto",
      },
    },
  });
  return (
    <div id="editor" className="h-full">
      <EditorExtension editor={editor} />
      <div className="p-4">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextEditor;
