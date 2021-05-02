import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { codeSlice } from "../features/code/codeSlice";
import { reserveSlice } from "../features/reserve/reserveSlice";
import { talkSlice } from "../features/talk/talkSlice";
import { profileSlice } from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    talk: talkSlice.reducer,
    code: codeSlice.reducer,
    reserve: reserveSlice.reducer,
    profile: profileSlice.reducer,
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
