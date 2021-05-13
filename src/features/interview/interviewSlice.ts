import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../shared/api";

export interface Image {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  name: string;
  path: string;
  size: number;
  type: string;
}

interface IInterview {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  title: string;
  description: string;
  view: number;
  image: Image;
}

interface IInitialState {
  interviews: IInterview[];
  status: "idle" | "loading" | "failed";
  totalCount: number;
  pagination: {
    page: number;
  };
}

const initialState: IInitialState = {
  interviews: [],
  status: "idle",
  totalCount: 0,
  pagination: {
    page: 1,
  },
};

export const getInterviews = createAsyncThunk(
  "interview/getInterviews",
  async (page: number) => {
    const { data } = await api.get(`interview?page=${page}`);
    return { data, pagination: { page } };
  }
);

export const interviewSlice = createSlice({
  name: "interview",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getInterviews.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getInterviews.fulfilled, (state, { payload }) => {
        if (state.pagination.page === 1) {
          state.interviews = payload.data.interviews;
        }
        if (state.pagination.page !== 1) {
          state.interviews = state.interviews.concat(payload.data.interviews);
        }
        state.status = "idle";
        state.totalCount = payload.data.totalCount;
        state.pagination = payload.pagination;
      });
  },
});

export const interviewSelector = (state: RootState) => state.interview;
