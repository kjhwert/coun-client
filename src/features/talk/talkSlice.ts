import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { TALK_GROWTH } from "../../shared/code";
import { ITalkState } from "./talk";
import { notify } from "../../shared/notify";
import { getTalks } from "./talk.actions";

const initialState: ITalkState = {
  talks: [],
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
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTalks.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTalks.fulfilled, (state, { payload }) => {
        if (payload.pagination.page !== 1) {
          state.talks = state.talks.concat(payload.data.talks);
        } else {
          state.talks = payload.data.talks;
        }
        state.status = "idle";
        state.totalCount = payload.data.totalCount;
        state.pagination = payload.pagination;
      })
      .addCase(getTalks.rejected, (state, { error }) => {
        notify.error(error.message);
      });
  },
});

export const talksSelector = (state: RootState) => state.talk;
