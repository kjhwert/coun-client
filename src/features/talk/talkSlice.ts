import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../modules/api";
import { HttpStatus } from "../../modules/httpStatus";
import { notify } from "../../modules/notify";

export interface Index {
  page: number;
  type: number;
}

export interface Talk {
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

export interface TalkState {
  data: Array<Talk>;
  status: "idle" | "loading" | "failed";
  message: string | undefined;
  paging: {
    hasNextPage: boolean;
  };
}

const initialState: TalkState = {
  data: [],
  status: "idle",
  message: "",
  paging: {
    hasNextPage: false,
  },
};

export const show = createAsyncThunk("talk/show", async (id: number) => {
  const { data } = await api.get(`talk/${id}`);
  return data;
});

export const index = createAsyncThunk(
  "talk/index",
  async ({ page, type }: Index) => {
    const { data } = await api.get(`talk?page=${page}&type=${type}`);
    return data;
  }
);

export const moreIndex = createAsyncThunk(
  "talk/moreIndex",
  async ({ page, type }: Index) => {
    const { data } = await api.get(`talk?page=${page}&type=${type}`);
    return data;
  }
);

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
          state.data = payload.data;
          state.status = "idle";
          state.paging = payload.paging;
          return;
        }
        //TODO Message array 형식으로 줌
        notify.warning(payload.message);
      })
      .addCase(moreIndex.pending, (state) => {
        state.status = "loading";
      })
      .addCase(moreIndex.fulfilled, (state, { payload }) => {
        if (payload.statusCode === HttpStatus.OK) {
          state.data = state.data.concat(payload.data);
          state.status = "idle";
          state.paging = payload.paging;
          return;
        }
        //TODO Message array 형식으로 줌
        notify.warning(payload.message);
      });
  },
});

export const talkStatus = (state: RootState) => state.talk;
