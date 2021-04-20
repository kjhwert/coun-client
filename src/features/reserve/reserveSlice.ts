import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../modules/api";
import { HttpStatus } from "../../modules/httpStatus";
import { notify } from "../../modules/notify";

export interface ReserveState {
  status: "idle" | "loading" | "failed";
  message: string | undefined;
}

const initialState: ReserveState = {
  status: "idle",
  message: "",
};

export interface Reserve {
  fieldId: number;
  reserveDate: Date;
  name: string;
  phone: string;
  placeId: number;
  title: string;
  description: string;
}

export const create = createAsyncThunk(
  "reserve/create",
  async (reserve: Reserve) => {
    const { data } = await api.post("reserve", reserve);
    return data;
  }
);

export const reserveSlice = createSlice({
  name: "reserve",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(create.pending, (state) => {
        state.status = "loading";
      })
      .addCase(create.fulfilled, (state, { payload }) => {
        if (payload.statusCode === HttpStatus.OK) {
          state.status = "idle";
          return;
        }
        state.status = "failed";
      });
  },
});

export const reserveStatus = (state: RootState) => state.reserve;
