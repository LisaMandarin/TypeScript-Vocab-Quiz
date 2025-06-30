import { MdOutlineDeleteOutline } from "react-icons/md";
import { handleFormDeleteType } from "../data/types";
import { handleFormChangeType } from "../data/types";
import { VocabFormType } from "../data/types";

export default function WordDefinitionInputs({
  data,
  handleChange,
  index,
  handleDelete
}: {
  data: VocabFormType;
  handleChange: handleFormChangeType;
  index: number;
  handleDelete: handleFormDeleteType;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 grow">
      <div className="md:w-1/3">
        <input
          placeholder="Enter the word"
          value={data.word}
          onChange={(e) => handleChange("word", e.target.value, index)}
          className="py-1 px-2 border-b-2 focus:outline-0 w-full"
        />
      </div>
      <div className="md:w-full">
        <input
          placeholder="Enter the word's definition"
          value={data.definition}
          onChange={(e) => handleChange("definition", e.target.value, index)}
          className="py-1 px-2 border-b-2 focus:outline-0 w-full"
        />
      </div>
      <div className="w-[30px] aspect-square self-end">
        <MdOutlineDeleteOutline 
          className="w-full h-full cursor-pointer hover:text-[#A9A9A9]"
          onClick={() => handleDelete(index)}  
        />
      </div>
    </div>
  );
}
