import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { findSymbolOnPhrases } from "../functions/funcSearch";


export interface Phrases {
    firstName: [string, boolean][];
    lastName: [string, boolean][];
}

// Define the initial state with the correct type
const initialState: Phrases = {
    firstName: [],
    lastName: []
};

export const wordSlice = createSlice({
    name: "wordPhrases",
    initialState,
    reducers: {
        findSymbolsWithNames: (state, action:  PayloadAction<{ first: string; last: string }>) => {
            state.firstName = findSymbolOnPhrases(action.payload.first);
            state.lastName = findSymbolOnPhrases(action.payload.last);
        },
    },
});
export const { findSymbolsWithNames } = wordSlice.actions;
export const wordSelector = (state: RootState) => state.wordReducer;
export default wordSlice.reducer;