import { VocabFormType } from "@/data/types";

export default function SubmitButton({wordList, buttonName}: {wordList: VocabFormType[]; buttonName: string}) {
    return (
         <div>
          <button
            type="submit"
            disabled={wordList.length <= 0}
            className={`px-3 py-2 rounded-2xl w-full my-2 ${
              wordList.length > 0
                ? "bg-[#171717] text-white cursor-pointer hover:bg-[#A9A9A9]"
                : "bg-[#A9A9A9]"
            }`}
          >
            {buttonName}
          </button>
        </div>
    )
}