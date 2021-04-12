import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { talkSlice } from "../features/talk/talkSlice";

export const store = configureStore({
  reducer: {
    talk: talkSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
