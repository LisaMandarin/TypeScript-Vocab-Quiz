import { VocabFormType } from "@/data/types";

export default function FormButton({wordList, buttonName, handleClick}: {wordList: VocabFormType[]; buttonName: string; handleClick: () => void}) {
    return (
        <div>
        <button
          type="button"
          onClick={handleClick}
          disabled={wordList.length <= 0}
          className={`px-3 py-2 rounded-2xl w-full my-2 ${
            wordList.length > 0
              ? "bg-[#ffffff] text-[#171717] border border-[#A9A9A9] cursor-pointer hover:bg-[#A9A9A9]"
              : "bg-[#A9A9A9]"
          }`}
        >
          {buttonName}
        </button>
      </div>
    )
}