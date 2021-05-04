import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../shared/api";

interface IInterview {}

interface IInitialState {
  interviews: [];
  state: "idle" | "loading" | "failed";
  totalCount: number;
}

const initialState: IInitialState = {
  interviews: [],
  state: "idle",
  totalCount: 0,
};

export const getInterviews = createAsyncThunk(
  "interview/getInterviews",
  async (page: number) => {
    const { data } = await api.get(`interview?page=${page}`);
    return data;
  }
);

export const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {},
});

export const interviewSelector = (state: RootState) => state.interview;
