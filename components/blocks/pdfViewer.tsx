import React from "react";

const PdfViewer = ({ fileUrl }: { fileUrl: string | undefined }) => {
  return (
    <div className="h-full">
      <iframe
        src={fileUrl + "#toolbar=0"}
        className="h-full  overflow-auto     w-full max-lg:max-w-screen"
      />
    </div>
  );
};

export default PdfViewer;
