import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import { RootState } from "../../app/store";
import { I_RESERVE_FIELDS, I_RESERVE_PLACES } from "../../shared/code";
import { notify } from "../../shared/notify";

export interface Code {
  id: number;
  description: string;
}

export interface CodeState {
  codes: Array<Code>;
  status: "idle" | "loading" | "failed";
}

const initialState: CodeState = {
  codes: [],
  status: "idle",
};

export const getCodes = createAsyncThunk(
  "code/getCodes",
  async (groupId: I_RESERVE_FIELDS | I_RESERVE_PLACES) => {
    const { data } = await api.get(`code?groupId=${groupId}`);
    return data;
  }
);

export const codeSlice = createSlice({
  name: "code",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCodes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCodes.fulfilled, (state, { payload }) => {
        state.codes = payload.data;
        state.status = "idle";
      })
      .addCase(getCodes.rejected, (state, { error }) => {
        notify.error(error.message);
      });
  },
});

export const codeStatus = (state: RootState) => state.code;
