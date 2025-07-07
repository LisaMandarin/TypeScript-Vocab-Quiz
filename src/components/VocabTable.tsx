import { VocabFormType } from "@/data/types";
export default function VocabTable({wordList}: {wordList: VocabFormType[]}) {
  
  return (
    <div className="p-4">
      <table className="w-full">
        <thead className="bg-[#171717] text-white text-xl">
          <tr className="">
            <th>Word</th>
            <th className="hidden sm:table-cell">Definition</th>
          </tr>
        </thead>
        <tbody>
          {wordList.length > 0 &&
            wordList.map((data, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2">
                  {data.word}
                  <div className="sm:hidden text-xs text-gray-500">{data.definition}</div>
                </td>
                <td className="p-2 hidden sm:table-cell">{data.definition}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
