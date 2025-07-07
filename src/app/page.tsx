'use client'
import React, { useEffect, useRef, useState } from "react";
import VocabForm from "../components/VocabForm";
import Link from "next/link";
import * as XLSX from "xlsx";
import { VocabFormType } from "@/data/types";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function Home() {
  const [file, setFile] = useState<File | undefined>(); // uploaded xlsx file
  const [words, setWords] = useState<VocabFormType[] | []>([])
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value ="";
    }
  }

  const deleteFile = () => {
    setFile(undefined)
    setWords([])
  }

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
      <div className="my-2 flex gap-2 items-center">
        <label 
          htmlFor="fileUpload"
          className="bg-[#171717] text-white rounded-2xl px-4 py-2 cursor-pointer hover:bg-[#A9A9A9]"  
        >
          Choose File
        </label>
        <input 
          id="fileUpload"
          type="file" 
          accept=".xlsx, .xls"
          onChange={handleFileUpload}
          className="hidden"
          ref={fileInputRef}
        />
        {file?.name && (
          <div className="text-sm text-gray-700 flex gap-2">
            <span>{file.name}</span>
            <span className="cursor-pointer" onClick={deleteFile}><MdOutlineDeleteOutline className="w-full h-full" /></span>
          </div>
        )}
      </div>
      <VocabForm words={words.length > 0 ? words : []}/>
    </div>
  );
}
