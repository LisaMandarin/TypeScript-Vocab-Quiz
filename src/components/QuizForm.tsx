"use client";

import { VocabFormType } from "@/data/types";
import { useEffect, useState } from "react";
import { message, Modal } from "@/lib/antd";
import CheckAnswers from "./CheckAnswers";

export default function QuizForm() {
  const [wordList, setWordList] = useState<VocabFormType[]>([]);

  const [quizForm, setQuizForm] = useState<string[]>([]);
  const handleChange = (value: string, index: number) => {
    setQuizForm((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (quizForm.length === 0) {
      message.error("You did not enter any words");
      return;
    }
    const hasEmptyField = () => {
      return quizForm.some((item) => item.trim() === "");
    };

    if (hasEmptyField()) {
      message.error("You can't leave field(s) empty");
      return;
    }
    showModal();
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const data = localStorage.getItem("vocab-quiz");
    if (data) {
      const words = JSON.parse(data);
      setWordList(words);
      setQuizForm(Array(words.length).fill(""));
    }
  }, []);

  useEffect(() => {
    console.log("quizForm: ", quizForm);
  }, [quizForm]);

  return (
    <div>
      <form
        className="w-[370px] md:w-[600px] xl:w-[1000px] flex flex-col"
        onSubmit={handleSubmit}
      >
        {wordList.length > 0 &&
          wordList.map((data: VocabFormType, index: number) => (
            <div key={index} className="flex mt-3 gap-2">
              <div className="bg-gray-700 text-white p-1">{index + 1}</div>
              <div className="flex flex-col md:flex-row gap-3 grow">
                <p className="md:w-full border-b-2">{data.definition}</p>
                <div className="md:w-1/3">
                  <input
                    placeholder="Enter the word"
                    value={quizForm[index] ?? ""}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="py-1 px-2 border-b-2 focus:outline-0"
                  />
                </div>
              </div>
            </div>
          ))}
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
            Submit Quiz
          </button>
        </div>
      </form>
      <Modal
        title="Check the answers"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        cancelText="Fix the mistakes"
      >
        <CheckAnswers wordList={wordList} quizForm={quizForm}/>
      </Modal>
    </div>
  );
}
