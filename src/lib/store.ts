import { configureStore } from "@reduxjs/toolkit";
import vocabReducer from "@/lib/vocabSlice"

export const store = configureStore({
    reducer: {
        vocab: vocabReducer
    }
})

export type rootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;