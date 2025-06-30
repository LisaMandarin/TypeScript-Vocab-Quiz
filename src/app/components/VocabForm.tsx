"use client";

import { useEffect, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { VocabFormType } from "../data/types";
import WordDefinitionInputs from "./WordDefinitionInputs";
import {message} from "@/lib/antd"

export default function VocabForm() {
  const [formData, setFormData] = useState<VocabFormType[]>([{
    word: "",
    definition: ""
  }]);

  const handleChange = (field: string, value: string, index: number) => {
    setFormData((prev) => (prev.map((item, i) => (
        i === index ? {...item, [field]: value} : item
    ) )));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.length <= 0) {
        // alert("No data")
        message.error("No data")
        return;
    }
    const hasEmptyField = formData.some((data) => data.word.trim() === "" || data.definition.trim() === "")
    if (hasEmptyField) {
        // alert("You can't leave the field empty");
        message.error("You can't leave the field(s) empty")
        return;
    }
    console.log("Form: ", formData);
  };

  const handleAppend = () => {
    setFormData((prev) => [
      ...prev,
      {
        word: "",
        definition: ""
      }
    ]);
  }

  const handleDelete = (index: number) => {
    setFormData((prev) => prev.filter((item, i) => i !== index))
  }

  useEffect(() => {
    console.log("Form: ", formData);
  }, [formData]);

  return (
    <form
      className="w-[370px] md:w-[600px] xl:w-[1000px] flex flex-col"
      onSubmit={handleSubmit}
    >
      {formData.length > 0 && formData.map((data, index) => (
        <div key={index} className="flex mt-4 gap-2">
            <div className="bg-gray-700 text-white p-1">{index +1}</div>
            <WordDefinitionInputs 
                data={data} 
                handleChange={handleChange} 
                index={index}
                handleDelete={handleDelete}
            />
        </div>
      ))}
      <hr className="text-gray-300 my-2" />
      <div className="flex justify-center">
        <div className="w-9 aspect-square">
          <CiCirclePlus className="w-full h-full" onClick={handleAppend} />
        </div>
      </div>
      <div>
        <button
          type="submit"
          disabled={formData.length <= 0}
          className={`px-3 py-2 rounded-2xl w-full my-2 ${formData.length > 0 ? "bg-[#171717] text-white cursor-pointer hover:bg-[#A9A9A9]" : "bg-[#A9A9A9]"}`}
        >
          Create Quiz
        </button>
      </div>
    </form>
  );
}
