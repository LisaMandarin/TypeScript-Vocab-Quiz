"use client";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";

export default function Home() {
  const [formData, setFormData] = useState({
    word: "",
    definition: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <div className="flex flex-col items-center min-h-screen m-4">
      <h1 className="block font-black text-5xl">Vocab Quiz</h1>
      <h3 className="block font-normal text-2xl">
        Take quizzes by your own vocabulary and definitions
      </h3>
      <form className="w-[370px] md:w-[600px] xl:w-[1000px] flex flex-col">
        <div className="flex mt-4 gap-2">
          <div className="bg-gray-700 text-white p-1">1</div>
          <div className="flex flex-col md:flex-row gap-3 grow">
            <div className="md:w-1/3">
              <input
                placeholder="Enter the word"
                value={formData.word}
                onChange={(e) => handleChange("word", e.target.value)}
                className="py-1 px-2 border-b-2 focus:outline-0 w-full"
              />
            </div>
            <div className="md:w-2/3">
              <input
                placeholder="Enter the word's definition"
                value={formData.definition}
                onChange={(e) => handleChange("definition", e.target.value)}
                className="py-1 px-2 border-b-2 focus:outline-0 w-full"
              />
            </div>
          </div>
        </div>
        <hr className="text-gray-300 my-2" />
        <div className="flex justify-center">
          <div className="w-9 aspect-square">
            <CiCirclePlus className="w-full h-full" />
          </div>
        </div>
        <div>
          <button className="bg-[#171717] text-white px-3 py-2 rounded-2xl w-full my-2 cursor-pointer">Create Quiz</button>
        </div>
      </form>
    </div>
  );
}
