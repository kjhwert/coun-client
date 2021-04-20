import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ReserveFields, ReservePlaces } from "../../modules/common";
import { api } from "../../modules/api";
import { RootState } from "../../app/store";
import { HttpStatus } from "../../modules/httpStatus";
import { notify } from "../../modules/notify";

export interface Code {
  id: number;
  description: string;
}

export interface CodeState {
  data: Array<Code>;
  status: "idle" | "loading" | "failed";
  message: string | undefined;
}

const initialState: CodeState = {
  data: [],
  status: "idle",
  message: "",
};

export const index = createAsyncThunk(
  "code/index",
  async (groupId: ReserveFields | ReservePlaces) => {
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
      .addCase(index.pending, (state) => {
        state.status = "loading";
      })
      .addCase(index.fulfilled, (state, { payload }) => {
        if (payload.statusCode === HttpStatus.OK) {
          state.data = payload.data;
          state.status = "idle";
          return;
        }
        //TODO Message array 형식으로 줌
        notify.warning(payload.message);
      });
  },
});

export const codeStatus = (state: RootState) => state.code;
