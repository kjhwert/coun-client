import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { codeSlice } from "../features/code/codeSlice";
import { talkSlice } from "../features/talk/talkSlice";
import { profileSlice } from "../features/profile/profileSlice";
import { interviewSlice } from "../features/interview/interviewSlice";
import { userSlice } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    talk: talkSlice.reducer,
    code: codeSlice.reducer,
    profile: profileSlice.reducer,
    interview: interviewSlice.reducer,
    user: userSlice.reducer,
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
