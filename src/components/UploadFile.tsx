import { useRef } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { VocabFormType } from "@/data/types";

export default function UploadFile({file, setFile, setWords}: {
    file: File | undefined; 
    setFile: (file: File | undefined) => void; 
    setWords: (words: VocabFormType[]) => void}) {
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
    
    return (
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
    )
}