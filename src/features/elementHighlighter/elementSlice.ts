import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { highlightName } from '../../common/elements';
import { HighlightedNameState, NamePayload } from '../../types';

const initialState: HighlightedNameState = {
  firstNameParts: [],
  lastNameParts: []
};

export const elementSlice = createSlice({
  name: 'elementHighlighter',
  initialState,
  reducers: {
    highlightElements: (state, action: PayloadAction<NamePayload>) => {
      state.firstNameParts = highlightName(action.payload.first);
      state.lastNameParts = highlightName(action.payload.last);
    },
  },
});

export const { highlightElements } = elementSlice.actions;

export const selectHighlightedNames = (state: RootState) => ({
  firstNameParts: state.elementHighlighter.firstNameParts,
  lastNameParts: state.elementHighlighter.lastNameParts
});

export default elementSlice.reducer;
