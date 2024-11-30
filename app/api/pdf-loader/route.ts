import { NextResponse } from "next/server";

import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function GET(req: Request) {
  try {
    const reqUrl = req.url;
    const { searchParams } = new URL(reqUrl);
    const pdfUrl = searchParams.get("pdfUrl");

    //1. Fetch the PDF file
    //@ts-ignore
    const response = await fetch(pdfUrl);
    const data = await response.blob();
    const loader = new PDFLoader(data);
    const docs = await loader.load();

    let pdfTextContent = "";
    docs.forEach((doc) => {
      pdfTextContent += doc.pageContent;
    });
    //2. Split the PDF file
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 100,
      chunkOverlap: 20,
    });

    const output = await splitter.createDocuments([pdfTextContent]);
    //@ts-ignore
    const splitterList = [];

    output.forEach((doc) => {
      splitterList.push(doc.pageContent);
    });

    //@ts-ignore
    return NextResponse.json({ result: splitterList });
  } catch (error) {
    console.error(error);
  }
}
