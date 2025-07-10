'use client'
import React, { useEffect, useState } from "react";
import VocabForm from "../components/VocabForm";
import Link from "next/link";
import * as XLSX from "xlsx";
import { VocabFormType } from "@/data/types";
import UploadFile from "@/components/UploadFile";

export default function Home() {
  const [file, setFile] = useState<File | undefined>(); // uploaded xlsx file
  const [words, setWords] = useState<VocabFormType[] | []>([])  // wordlist from uploaded file for formData
  
  // When the excel file is uploaded, it is converted to readable JSON and stored in "words" to be displayed in the form
  useEffect(() => {
    const fetchFile = async() => {
      if (file) {
        const f = await file.arrayBuffer();

        const workbook = XLSX.read(f);
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data:VocabFormType[] = XLSX.utils.sheet_to_json<VocabFormType>(sheet);

        setWords(data)
      }
    }
    fetchFile()
  }, [file])
  return (
    <div className="flex flex-col items-center min-h-screen m-4">
      <h1 className="block font-black text-5xl">
        <Link href="/">
          Vocab Quiz
        </Link>
      </h1>
      <h3 className="block font-normal text-2xl">
        Take quizzes with your own vocabulary and definitions
      </h3>
      <UploadFile file={file} setFile={setFile} setWords={setWords}/>
      <VocabForm words={words.length > 0 ? words : []}/>
    </div>
  );
}
