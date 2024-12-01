import Bold from "@tiptap/extension-bold";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import {
  GrTableAdd,
  GrTextAlignCenter,
  GrTextAlignLeft,
  GrTextAlignRight,
} from "react-icons/gr";
import {
  AlignRight,
  BoldIcon,
  Code,
  Heading1,
  Heading2,
  Highlighter,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Table2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const EditorExtension = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <div className="p-2 w-full overflow-auto ">
        <div className="flex gap-1 items-center">
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold") ? "bg-muted px-3 py-2" : "px-3 py-2"
            }
          >
            <BoldIcon className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic") ? "bg-muted px-3 py-2" : "px-3 py-2 "
            }
          >
            <Italic className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={
              editor.isActive("highlight") ? "bg-muted px-3 py-2" : "px-3 py-2"
            }
          >
            <Highlighter className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => {
              editor.chain().setTextAlign("left").run();
            }}
            className={
              editor.isActive({ textAlign: "left" })
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <GrTextAlignLeft className="h-4 w-4 transform " />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().setTextAlign("center").run()}
            className={
              editor.isActive({ textAlign: "center" })
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <GrTextAlignCenter className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => {
              editor.chain().focus().setTextAlign("right").run();
            }}
            className={
              editor.isActive({ textAlign: "right" })
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <GrTextAlignRight className="h-4 w-4" />
          </Button>

          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList") ? "bg-muted px-3 py-2" : "px-3 py-2"
            }
          >
            <List className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList")
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <ListOrdered className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={
              editor.isActive("code") ? "bg-muted px-3 py-2" : "px-3 py-2 "
            }
          >
            <Code className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={
              editor.isActive("strike") ? "bg-muted px-3 py-2" : "px-3 py-2"
            }
          >
            <Strikethrough className="h-4 w-4" />
          </Button>

          <Button
            variant={"ghost"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <Heading1 className="h-4 w-4" />
          </Button>
          <Button
            variant={"ghost"}
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "bg-muted px-3 py-2"
                : "px-3 py-2"
            }
          >
            <Heading2 className="h-4 w-4" />
          </Button>
          <Table editor={editor} />
        </div>
      </div>
    </>
  );
};

const Table = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Table2Icon className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Table</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="px-4 flex items-center">
          <GrTableAdd className="h-4 w-4" />
          Insert Table
        </DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default EditorExtension;
