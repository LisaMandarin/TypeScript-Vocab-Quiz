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
    // store word-definition list
    setWordList: (state, action: PayloadAction<VocabFormType[]>) => {
      state.wordList = action.payload;
    },
    // update word-definition list
    updateWordList: (
      state,
      action: PayloadAction<{ index: number; field: string; value: string }>
    ) => {
      const { index, field, value } = action.payload;
      state.wordList[index][field as "word" | "definition"] = value;
    },
    // add a new pair of word-definition item into the list
    appendWordItem: (state) => {
      state.wordList.push({ word: "", definition: "" });
    },
    // delete a certain pair of word-definition item from the list
    deleteWordItem: (state, action: PayloadAction<number>) => {
      state.wordList.splice(action.payload, 1);
    },
    // set the word-definition list to empty list
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
