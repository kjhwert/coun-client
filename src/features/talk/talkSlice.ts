import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { notify } from "../../shared/notify";
import { getTalk, getTalks } from "./talk.actions";
import { ITALK_TYPES, TALK_GROWTH } from "../../shared/global";

export interface ITalkPagination {
  page: number;
  type: ITALK_TYPES;
}

export interface ITalk {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  title: string;
  description: string | null;
  youtubeUrl: string | null;
  thumbnail: string;
  imagePage: number;
  imageOrder: number;
  view: number;
}

export interface ITalkState {
  talks: ITalk[];
  selected: ITalk | undefined;
  status: "idle" | "loading" | "failed";
  pagination: {
    page: number;
    type: ITALK_TYPES;
  };
  totalCount: number;
}

const initialState: ITalkState = {
  talks: [],
  selected: undefined,
  status: "idle",
  pagination: {
    page: 1,
    type: TALK_GROWTH,
  },
  totalCount: 0,
};

export const talkSlice = createSlice({
  name: "talk",
  initialState,
  reducers: {
    onSelected: (state, { payload }) => {
      state.selected = state.talks.find(({ id }) => payload === id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTalks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTalks.fulfilled, (state, { payload }) => {
        if (payload.pagination.page === 1) {
          state.talks = payload.data.talks;
        }
        if (payload.pagination.page !== 1) {
          state.talks = state.talks.concat(payload.data.talks);
        }
        state.status = "idle";
        state.totalCount = payload.data.totalCount;
        state.pagination = payload.pagination;
      })
      .addCase(getTalks.rejected, (state, { error }) => {
        notify.error(error.message);
      })
      .addCase(getTalk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTalk.fulfilled, (state, { payload }) => {
        if (payload === "") {
          state.status = "failed";
        } else {
          state.status = "idle";
          state.selected = payload;
        }
      });
  },
});

export const { onSelected } = talkSlice.actions;

export const talksSelector = (state: RootState) => state.talk;
