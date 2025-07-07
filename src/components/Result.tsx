import { VocabFormType } from "@/data/types";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "animate.css";
import Score from "./Score";

export default function Result({
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
    return wordList.every((item, index) => item.word === quizForm[index]);
  };

  // const calculateScore = (wordList: VocabFormType[], quizForm: string[]): number => {
  //   const correct = quizForm.filter((word, index) => word === wordList[index].word);
  //   if (correct.length === 0) {
  //     return 0;
  //   }
  //   if (correct.length > 0) {
  //     return Math.round((correct.length / wordList.length) * 100);
  //   }
  //   return 0;
  // }

  const calculateScore = (wordList: VocabFormType[], quizForm: string[], index=0, correctCount=0): number => {
    if (index >= wordList.length) {
      return wordList.length === 0 ? 0 : Math.round((correctCount / wordList.length) * 100);
    }
    const isCorrect = quizForm[index] === wordList[index].word;
    return calculateScore(wordList, quizForm, index+1, isCorrect ? correctCount+1 : correctCount)
  }

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-evenly items-center p-4">
        <div>
          <Score value={calculateScore(wordList, quizForm)} />
        </div>
        <div className="md:text-2xl xl:text-4xl text-center font-extrabold">
          {isAllCorrect(wordList, quizForm) ? (
            <span className="inline-block text-green-600 animate__animated animate__heartBeat animate__infinite">
              Congratulations
            </span>
          ) : (
            <span className="inline-block text-red-600 animate__animated animate__headShake animate__infinite">
              Sorry
            </span>
          )}
        </div>
      </div>

      <table>
        <thead className="bg-[#171717] text-white text-xl">
          <tr>
            <th className="text-base md:text-lg">Definition</th>
            <th className="text-base md:text-lg">Correct Answer</th>
            <th className="text-base md:text-lg">Your Answer</th>
            <th className="text-base md:text-lg">Check</th>
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
