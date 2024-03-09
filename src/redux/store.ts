import { configureStore } from '@reduxjs/toolkit';
import wordReducer from './action';
import { thunk } from 'redux-thunk';
export const store = configureStore({
  reducer: {
    wordReducer
  }
  , 
  // The reduxjs/toolkit don't need explicity the middleware or ApplyMiddleware. Just used in this case to share knowledge.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;