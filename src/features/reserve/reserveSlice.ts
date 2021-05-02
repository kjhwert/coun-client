import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { api } from "../../shared/api";

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
        state.status = "idle";
      });
  },
});

export const reserveStatus = (state: RootState) => state.reserve;
