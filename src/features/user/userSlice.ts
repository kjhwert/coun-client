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
    try {
      const { data } = await api.post("user/login", loginForm);
      return data;
    } catch (e) {
      notify.warning([e.message]);
    }
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
        state.user = payload.data;
      });
  },
});

export const userSelector = (state: RootState) => state.user;
