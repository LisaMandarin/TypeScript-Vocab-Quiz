import { VocabFormType } from "@/data/types";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "animate.css";

export default function CheckAnswers({
  wordList,
  quizForm,
}: {
  wordList: VocabFormType[];
  quizForm: string[];
}) {
  const isCorrect = (word: string, quizWord: string) => {
    if (word === quizWord) {
      return true;
    } else {
      return false;
    }
  };
  const isAllCorrect = (wordList: VocabFormType[], quizForm: string[]) => {
    return wordList.every((item, index) => item.word === quizForm[index])
  }

  return (
    <div className="w-full flex flex-col">
      <div className="text-4xl p-4 text-center font-extrabold">{isAllCorrect(wordList, quizForm) ? <span className="inline-block text-green-600 animate__animated animate__heartBeat animate__infinite">Congratulations</span>: <span className="inline-block text-red-600 animate__animated animate__headShake animate__infinite">Sorry</span>}</div>
      <table>
        <thead className="bg-[#171717] text-white text-xl">
          <tr>
            <th className="text-lg">Definition</th>
            <th className="text-lg">Correct Answer</th>
            <th className="text-lg">Your Answer</th>
            <th className="text-lg">Check</th>
          </tr>
        </thead>

        <tbody>
          {wordList.length > 0 &&
            quizForm.length > 0 &&
            wordList.map((item, index) => (
              <tr key={index} className="even:bg-gray-100">
                <td className="p-2">{item.definition}</td>
                <td className="p-2">{item.word}</td>
                <td
                  className={`p-2 ${
                    isCorrect(item.word, quizForm[index]) ? "" : "text-red-600"
                  }`}
                >
                  {quizForm[index]}
                </td>
                <td className="p-2">
                  {isCorrect(item.word, quizForm[index]) ? (
                    <FaCheck className="text-green-600" />
                  ) : (
                    <ImCross className="text-red-600" />
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
