"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { CiCirclePlus } from "react-icons/ci";
import { VocabFormType } from "../data/types";
import WordDefinitionInputs from "./WordDefinitionInputs";
import VocabTable from "./VocabTable";
import FormButton from "./FormButton";
import SubmitButton from "./SubmitButton";
import { rootState, AppDispatch } from "@/lib/store";
import { saveFile } from "@/lib/utils";
import { message, Modal } from "@/lib/antd";
import {
  setWordList,
  updateWordList,
  appendWordItem,
  deleteWordItem,
  resetWordList,
  hasEmptyField,
} from "@/lib/vocabSlice";

export default function VocabForm({ words }: { words: VocabFormType[] }) {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const wordList = useSelector((state: rootState) => state.vocab.wordList);
  const emptyFieldExists = useSelector(hasEmptyField);

  const handleChange = (field: string, value: string, index: number) => {
    dispatch(updateWordList({ index, field, value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (wordList.length <= 0) {
      message.error("No data");
      return;
    }
    
    if (emptyFieldExists) {
      message.error("You can't leave the field(s) empty");
      return;
    }
    showModal();
  };

  const handleSave = () => {
    if (wordList.length <= 0) {
      message.info("No data to be saved");
      return;
    }

    if (emptyFieldExists) {
      message.error("You can't leave the field(s) empty");
      return;
    }
    saveFile({ wordList });
  }

  const handlePractice = () => {
    const obj = JSON.stringify(wordList);
    localStorage.setItem("vocab-quiz", obj);
    router.push("/practice")
  }
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleModalOk = () => {
    const obj = JSON.stringify(wordList);
    localStorage.setItem("vocab-quiz", obj);
    router.push("/quiz");
    setIsModalOpen(false);
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  // retrieve words from the uploaded file and put them in the form
  useEffect(() => {
    if (words.length > 0) {
      dispatch(setWordList(words))
    } else {
      dispatch(resetWordList())
    }
  }, [words, dispatch]);

  return (
    <form
      className="w-[calc(100vw-32px)] md:w-[calc(80vw-32px)] xl:w-[1000px] flex flex-col"
      onSubmit={handleSubmit}
    >
      {wordList.length > 0 &&
        wordList.map((data, index) => (
          <div key={index} className="flex mt-4 gap-2">
            <div className="bg-gray-700 text-white p-1 flex justify-center items-center">
              {index + 1}
            </div>
            <WordDefinitionInputs
              data={data}
              handleChange={handleChange}
              index={index}
              handleDelete={() => dispatch(deleteWordItem(index))}
              handleAppend={() => dispatch(appendWordItem())}
              isLast={index === wordList.length - 1}
            />
          </div>
        ))}
      <hr className="text-gray-300 my-2" />
      <div className="flex justify-center">
        <div className="w-9 aspect-square">
          <CiCirclePlus className="w-full h-full" onClick={() => dispatch(appendWordItem())} />
        </div>
      </div>
      <SubmitButton wordList={wordList} buttonName="Create Quiz" />
      <FormButton wordList={wordList} buttonName="Save as File" handleClick={handleSave} />
      <FormButton wordList={wordList} buttonName="Practice" handleClick={handlePractice}/>
      <Modal
        title="Vocabulary - Definitions"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Take quiz"
      >
        <VocabTable wordList={wordList} />
      </Modal>
    </form>
  );
}
