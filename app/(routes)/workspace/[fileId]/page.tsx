"use client"; // This file is a client-side script
import Header from "@/components/blocks/header";
import PdfViewer from "@/components/blocks/pdfViewer";
import TextEditor from "@/components/blocks/text-editor";
import Tiptap from "@/components/blocks/text-editor";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const { fileId } = useParams();

  const fileInfo = useQuery(api.fileStorage.GetFileRecord, {
    //@ts-ignore
    fileId: fileId,
  });

  useEffect(() => {
    if (fileInfo) {
      console.log(fileInfo);
    }
  }, [fileInfo]);

  return (
    <div className="h-screen w-full max-h-screen overflow-hidden">
      <Header />
      <div className=" grid lg:grid-cols-2 h-full">
        <div className="h-full ">
          <TextEditor />
        </div>
        <div className="overflow-auto ">
          <PdfViewer fileUrl={fileInfo?.fileUrl} />
        </div>
      </div>
    </div>
  );
};

export default page;
