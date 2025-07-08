"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "@/styles/carousel.css";
import FlipCard from "@/components/FlipCard";
import FormButton from "@/components/FormButton";
import { VocabFormType } from "@/data/types";
import { AppDispatch, rootState } from "@/lib/store";
import { Carousel, ConfigProvider } from "antd";
import { FetchWordListType } from "@/data/types";
import { setWordList } from "@/lib/vocabSlice";
import { saveFile } from "@/lib/utils";

export default function Page() {
  const wordList = useSelector((state: rootState) => state.vocab.wordList);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const handleQuiz = () => {
    router.push("/quiz");
  };

  const handleSave = () => {
    saveFile({ wordList });
  };

  useEffect(() => {
    const fetchWordList: FetchWordListType = async () => {
      try {
        const data = await Promise.resolve(localStorage.getItem("vocab-quiz"));
        if (data) {
          const words: VocabFormType[] = JSON.parse(data);
          dispatch(setWordList(words));
        }
      } catch (error) {
        console.error("Failed to load vocab quiz: ", error);
      }
    };
    fetchWordList();
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen m-4">
      <h1 className="block font-black text-5xl">
        <Link href="/">Vocab Quiz</Link>
      </h1>
      <h3 className="block font-normal text-2xl">
        Take quizzes with your own vocabulary and definitions
      </h3>
      <div className="w-[370px] md:w-[600px] xl:w-[1200px] mx-auto">
        <ConfigProvider
          theme={{
            components: {
              Carousel: {
                arrowSize: 60,
              },
            },
          }}
        >
          <Carousel arrows infinite={false}>
            {wordList.length > 0 &&
              wordList.map((item, index) => (
                <FlipCard
                  key={index}
                  front={item.word}
                  back={item.definition}
                />
              ))}
          </Carousel>
        </ConfigProvider>
        <br />
        <div className="w-[300px] md:w-[500px] xl:w-[1000px] mx-auto">
          <FormButton
            wordList={wordList}
            buttonName="Quiz"
            handleClick={handleQuiz}
          />
          <FormButton
            wordList={wordList}
            buttonName="Save as File"
            handleClick={handleSave}
          />
        </div>
      </div>
    </div>
  );
}
