"use client";
import uuid4 from "uuid4";
import axios from "axios";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, Plus } from "lucide-react";
import Image from "next/image";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "../ui/toast";

const UploadPdfDialog = () => {
  const { toast } = useToast();
  const { user } = useUser();
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const AddFileEntry = useMutation(api.fileStorage.AddFileEntrytoDb);
  const getFileUrl = useMutation(api.fileStorage.GetFileUrl);
  const embedDocument = useAction(api.myAction.ingest);

  const [open, setOpen] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [fileName, setFileName] = React.useState("");
  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      console.log(e.target.files[0]);
    }
  };

  useEffect(() => {
    file && setFileName(file.name.split(".")[0]);
  }, [file]);

  const onUpload = async () => {
    if (file) {
      setLoading(true);
      // Step 1: Get a short-lived upload URL
      const postUrl = await generateUploadUrl();

      // Step 2: POST the file to the URL
      const result = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      const { storageId } = await result.json();

      const fileUrl = await getFileUrl({ storageId: storageId });
      console.log("fileUrl", fileUrl);

      const fileId = uuid4();
      const resp = await AddFileEntry({
        fileId: fileId,
        storageId: storageId,
        filename: fileName ?? "Untitled File",
        //@ts-ignore
        fileUrl: fileUrl,
        //@ts-ignore
        createdBy: user?.primaryEmailAddress?.emailAddress,
      });

      const ApiResponse = await axios.get("/api/pdf-loader?pdfUrl=" + fileUrl);

      await embedDocument({
        splitText: ApiResponse.data.result,
        fileId: fileId,
      });
      toast({
        title: `File processed successfully`,
        description: `${fileName} has been processed successfully`,
        action: <ToastAction altText="Done">Done</ToastAction>,
      });

      setOpen(false);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          variant={"outline"}
          className="flex items-center gap-3 rounded-lg px-3 py-2 w-full  transition-all delay-300 ease-out my-2"
        >
          <Plus className="h-4 w-4" />
          Add Note
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 mb-2">
            <Image src={"/pencil.png"} height={20} width={20} alt="logo" />
            Upload to Notesmaster AI
          </DialogTitle>
          <DialogDescription>
            Upload your PDF and start creating notes
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="flex flex-col gap-2 p-4 border rounded-xl">
            <Label className="flex-1" htmlFor="file">
              <span className="text-sm">Select a file</span>
            </Label>
            <Input
              name="file"
              type="file"
              accept="application/pdf"
              placeholder="Select file"
              onChange={(e: any) => onFileChange(e)}
            />
            <Label className="flex-1" htmlFor="file">
              <span className="text-sm">Choose a name *</span>
            </Label>
            <Input
              value={fileName}
              onChange={(e) => setFileName(e.target.value)}
              name="file"
              type="text"
              placeholder="Enter file name"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose onClick={() => setOpen(false)} asChild>
            <Button variant={"outline"}>Cancel</Button>
          </DialogClose>
          <Button
            disabled={loading}
            className="duration-500 ease-out"
            onClick={onUpload}
          >
            {loading ? <Loader2 className="animate-spin h-4 w-4" /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
