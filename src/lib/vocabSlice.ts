import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { VocabFormType } from "@/data/types";

const initialState: { wordList: VocabFormType[]; hasEmptyField: boolean } = {
  wordList: [{ word: "", definition: "" }],
  hasEmptyField: false,
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
    },
    checkHasEmptyField: (state) => {
        state.hasEmptyField = state.wordList.some(
            (item) => item.word.trim() === '' || item.definition.trim() === ''
        );
    },
  },
});

export const {
    setWordList,
    updateWordList,
    appendWordItem,
    deleteWordItem,
    resetWordList,
    checkHasEmptyField,
} = vocabSlice.actions;

export default vocabSlice.reducer
