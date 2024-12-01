"use client";
import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Loader,
  RotateCcwIcon,
  RotateCwIcon,
  Search,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useResizeDetector } from "react-resize-detector";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
import SimpleBar from "simplebar-react";
import PdfFullScreen from "./pdfFullScreen";

const PdfViewer = ({ fileUrl }: { fileUrl: string | undefined }) => {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const { toast } = useToast();

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const { width, ref, height } = useResizeDetector();

  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  return (
    <div className="h-full w-full overflow-auto border rounded-xl ">
      <div className="p-2 flex items-center gap-2 border-b">
        <Button
          onClick={() => {
            if (pageNumber > 1) {
              setPageNumber(pageNumber - 1);
            }
          }}
          className="px-3"
          variant={"outline"}
          disabled={pageNumber == 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Input
          type="number"
          className="px-2 py-3 w-16"
          min={1}
          max={numPages}
          onChange={(e) => {
            if (e.target.value) {
              numPages &&
                parseInt(e.target.value) <= numPages &&
                parseInt(e.target.value) >= 1 &&
                setPageNumber(parseInt(e.target.value));
            }
          }}
        />
        / {numPages}
        <Button
          variant={"outline"}
          onClick={() => {
            //@ts-ignore
            if (pageNumber < numPages) {
              setPageNumber(pageNumber + 1);
            }
          }}
          className="px-3"
          disabled={!numPages || pageNumber == numPages}
        >
          <ChevronRight className="h-4 w-4 transform" />
        </Button>
        <div className="ml-auto flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button
                aria-label="zoom"
                variant={"outline"}
                className="px-3  flex items-center gap-2"
              >
                <Search className="h-4 w-4" />
                {scale * 100}%
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Zoom options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(0.75)}>
                75%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(0.5)}>
                50%
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onSelect={() => setScale(1)}>
                100%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2)}>
                200%
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setScale(2.5)}>
                250%
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  if (scale < 1.75) {
                    setScale(scale + 0.25);
                  }
                }}
              >
                +25%
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  if (scale > 0.25) {
                    setScale(scale - 0.25);
                  }
                }}
              >
                -25%
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            aria-label="rotate-cw-90"
            variant={"outline"}
            className="px-3"
            onClick={() => {
              setRotation((prev) => prev + 90);
            }}
          >
            <RotateCwIcon className="h-4 w-4" />
          </Button>
          <PdfFullScreen fileUrl={fileUrl} />
        </div>
      </div>
      <SimpleBar autoHide={false} className="max-h-[calc(100vh-6rem)]">
        <div ref={ref}>
          <Document
            className={"rounded-xl"}
            loading={
              <div className="flex justify-center min-h-[90vh] items-center h-full w-full">
                <Loader className="h-10 w-10 animate-spin" />
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
            <Page
              className={"rounded-xl"}
              loading={
                <div className="flex justify-center min-h-[90vh] items-center h-full w-full">
                  <Loader className="h-10 w-10 animate-spin" />
                </div>
              }
              width={width ? width : 1}
              // height={height ? height : 1}
              scale={scale}
              pageNumber={pageNumber}
              rotate={rotation}
            />
          </Document>
        </div>
      </SimpleBar>
    </div>
  );
};

export default PdfViewer;
