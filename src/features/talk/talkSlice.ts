import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../modules/api";
import { HttpStatus } from "../../modules/httpStatus";
import { notify } from "../../modules/notify";

export interface TalkState {
  data: Array<any>;
  status: "idle" | "loading" | "failed";
  message: string | undefined;
}

const initialState: TalkState = {
  data: [],
  status: "idle",
  message: "",
};

export const index = createAsyncThunk("talk/index", async (page: number) => {
  const { data } = await api.get(`talk?page=${page}`);
  return data;
});

export const talkSlice = createSlice({
  name: "talk",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(index.pending, (state) => {
        state.status = "loading";
      })
      .addCase(index.fulfilled, (state, { payload }) => {
        if (payload.statusCode === HttpStatus.OK) {
          state.status = "idle";
          state.data = payload.data;
          return notify.info("데이터 조회에 성공했습니다.");
        }

        notify.warning(payload.message);
      });
  },
});

export const talkStatus = (state: RootState) => state.talk;
export const talkIndex = (state: RootState) => state.talk.data;
