import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../shared/api";
import { notify } from "../../shared/notify";

interface IUser {
  id: number;
  accessToken: string;
  isAdmin: boolean;
}

interface IInitialState {
  status: "idle" | "loading" | "failed";
  user: IUser | null;
}

const initialState: IInitialState = {
  status: "idle",
  user: null,
};

export interface ILoginForm {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  "user/login",
  async (loginForm: ILoginForm) => {
    const { data } = await api.post("user/login", loginForm);
    return data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.user = payload;
      })
      .addCase(userLogin.rejected, (state, action) => {
        notify.warning("아이디 혹은 비밀번호가 일치하지 않습니다.");
      });
  },
});

export const userSelector = (state: RootState) => state.user;
