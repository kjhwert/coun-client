import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import { ITalkPagination } from "./talkSlice";

export const getTalks = createAsyncThunk(
  "talk/getTalks",
  async ({ page, type }: ITalkPagination) => {
    const { data } = await api.get(`talk?page=${page}&type=${type}`);
    return { data, pagination: { page, type } };
  }
);

export const getTalk = createAsyncThunk("talk/getTalk", async (id: number) => {
  const { data } = await api.get(`talk/${id}`);
  return data;
});
