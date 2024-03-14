import { combineReducers } from '@reduxjs/toolkit';
import elementReducer from '../features/elementHighlighter/elementSlice';

const rootReducer = combineReducers({
  elementHighlighter: elementReducer,
  // ... other feature reducers
});

export default rootReducer;
