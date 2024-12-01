"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Fullscreen, Loader, Loader2 } from "lucide-react";
import { Button } from "../ui/button";
import { Document, Page, pdfjs } from "react-pdf";
import { useResizeDetector } from "react-resize-detector";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import SimpleBar from "simplebar-react";
import { useToast } from "@/hooks/use-toast";

const PdfFullScreen = ({ fileUrl }: { fileUrl: string | undefined }) => {
  const { toast } = useToast();
  const [numPages, setNumPages] = React.useState<number>();
  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }
  const { width, ref, height } = useResizeDetector();
  const [isOpened, setIsOpened] = React.useState(false);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  return (
    <Dialog
      open={isOpened}
      onOpenChange={(v) => {
        !v && setIsOpened(v);
      }}
    >
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setIsOpened(true)}>
          <Fullscreen className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogHeader>
        <DialogTitle className="sr-only">Document Viewer</DialogTitle>
        <DialogDescription className="sr-only">
          Viewing document in fullscreen mode
        </DialogDescription>
      </DialogHeader>
      <DialogContent className=" w-full sm:max-w-[700px] lg:max-w-[1020px]">
        <SimpleBar autoHide={false} className="max-h-[calc(100vh-6rem)]">
          <div ref={ref}>
            <Document
              className={"rounded-xl"}
              loading={
                <div className="flex justify-center min-h-[90vh] items-center h-full w-full">
                  <Loader2 className="h-10 w-10 animate-spin" />
                </div>
              }
              file={fileUrl}
              onLoad={() => {
                toast({
                  title: "Success",
                  description: "Document loaded successfully",
                });
              }}
              onLoadError={() => {
                toast({
                  title: "Error",
                  description: "Failed to load the document",
                  variant: "destructive",
                });
              }}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              {new Array(numPages).fill(0).map((_, index) => (
                <Page
                  key={index}
                  className={"rounded-xl"}
                  loading={
                    <div className="flex justify-center min-h-[90vh] items-center h-full w-full">
                      <Loader className="h-10 w-10 animate-spin" />
                    </div>
                  }
                  width={width ? width : 1}
                  // height={height ? height : 1}
                  scale={1}
                  pageNumber={index + 1}
                />
              ))}
            </Document>
          </div>
        </SimpleBar>
      </DialogContent>
    </Dialog>
  );
};

export default PdfFullScreen;
