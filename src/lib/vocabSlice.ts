import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VocabFormType } from "@/data/types";
import { rootState } from "./store";

const initialState: { wordList: VocabFormType[] } = {
  wordList: [{ word: "", definition: "" }],
};

export const vocabSlice = createSlice({
  name: "vocab",
  initialState,
  reducers: {
    setWordList: (state, action: PayloadAction<VocabFormType[]>) => {
      state.wordList = action.payload;
    },
    updateWordList: (
      state,
      action: PayloadAction<{ index: number; field: string; value: string }>
    ) => {
      const { index, field, value } = action.payload;
      state.wordList[index][field as "word" | "definition"] = value;
    },
    appendWordItem: (state) => {
      state.wordList.push({ word: "", definition: "" });
    },
    deleteWordItem: (state, action: PayloadAction<number>) => {
      state.wordList.splice(action.payload, 1);
    },
    resetWordList: (state) => {
      state.wordList = [{ word: "", definition: "" }];
    }
  },
});

export const {
    setWordList,
    updateWordList,
    appendWordItem,
    deleteWordItem,
    resetWordList,
} = vocabSlice.actions;

export const hasEmptyField = (state: rootState) => {
  return state.vocab.wordList.some((item) => item.word.trim() === "" || item.definition.trim() === "");
}

export default vocabSlice.reducer
