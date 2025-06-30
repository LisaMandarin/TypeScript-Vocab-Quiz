import { VocabFormType } from "@/data/types";
export default function VocabTable({wordList}: {wordList: VocabFormType[]}) {
  
  return (
    <div className="p-4">
      <table className="w-full">
        <thead className="bg-[#171717] text-white text-xl">
          <tr>
            <th>Word</th>
            <th>Definition</th>
          </tr>
        </thead>
        <tbody>
          {wordList.length > 0 &&
            wordList.map((data, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2">{data.word}</td>
                <td className="p-2">{data.definition}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
