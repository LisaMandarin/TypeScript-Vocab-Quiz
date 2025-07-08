"use client";

import { VocabFormType } from "@/data/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { message, Modal } from "@/lib/antd";
import Result from "./Result";
import { FetchWordListType } from "@/data/types";
import { saveFile } from "@/lib/utils";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, rootState } from "@/lib/store";
import { setWordList } from "@/lib/vocabSlice";
import FormButton from "./FormButton";
import SubmitButton from "./SubmitButton";

export default function QuizForm() {
  const router = useRouter();
  const wordList = useSelector((state: rootState) => state.vocab.wordList);
  const [quizForm, setQuizForm] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
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
    const hasEmptyField: () => boolean = () => {
      return quizForm.some((item) => item.trim() === "");
    };
    if (hasEmptyField()) {
      message.error("You can't leave field(s) empty");
      return;
    }
    showModal();
  };

  const handleSave = () => {
    saveFile({ wordList });
  };

  const handlePractice = () => {
    router.push("/practice")
  }

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
    const fetchWordList: FetchWordListType = async () => {
      try {
        const data = await Promise.resolve(localStorage.getItem("vocab-quiz"));
        if (data) {
          const words: VocabFormType[] = JSON.parse(data);
          dispatch(setWordList(words));
          setQuizForm(Array(words.length).fill(""));
        }
      } catch (error) {
        console.error("Failed to load vocab quiz: ", error);
      }
    };
    fetchWordList();
  }, []);

  return (
    <div>
      <form
        className="w-[calc(100vw-32px)] md:w-[calc(80vw-32px)] xl:w-[1000px] flex flex-col"
        onSubmit={handleSubmit}
      >
        {wordList.length > 0 &&
          wordList.map((data: VocabFormType, index: number) => (
            <div key={index} className="flex mt-3 gap-2">
              <div className="bg-gray-700 text-white p-1 flex items-center">
                {index + 1}
              </div>
              <div className="flex flex-col md:flex-row gap-3 grow">
                <p className="md:w-full border-b-2">{data.definition}</p>
                <div className="md:w-1/3 flex">
                  <input
                    placeholder="Enter the word"
                    value={quizForm[index] ?? ""}
                    onChange={(e) => handleChange(e.target.value, index)}
                    className="py-1 px-2 border-b-2 focus:outline-0 grow"
                  />
                </div>
              </div>
            </div>
          ))}
        <SubmitButton wordList={wordList} buttonName="See Score" />
        <FormButton
          wordList={wordList}
          buttonName="Save as File"
          handleClick={handleSave}
        />
        <FormButton wordList={wordList} buttonName="Practice" handleClick={handlePractice} />
      </form>
      <Modal
        title="Check the answers"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        cancelText="Check again"
      >
        <Result wordList={wordList} quizForm={quizForm} />
      </Modal>
    </div>
  );
}
