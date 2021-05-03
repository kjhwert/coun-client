import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TALK_GROWTH } from "../../shared/code";
import { ITalkState } from "./talk";
import { notify } from "../../shared/notify";
import { getTalk, getTalks } from "./talk.actions";

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
        state.status = "idle";
        state.selected = payload;
      });
  },
});

export const { onSelected } = talkSlice.actions;

export const talksSelector = (state: RootState) => state.talk;
