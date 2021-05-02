import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../shared/api";
import { RootState } from "../../app/store";
import { notify } from "../../shared/notify";

interface Image {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  name: string;
  path: string;
  size: number;
  type: string;
}

export interface Profile {
  createdAt: Date;
  updatedAt: Date | null;
  id: number;
  email: string;
  name: string;
  description: string;
  image: Image;
}

export interface ProfileState {
  profiles: Profile[];
  status: "idle" | "loading" | "failed";
}

const initialState: ProfileState = {
  profiles: [],
  status: "idle",
};

export const getProfiles = createAsyncThunk("user/getTeachers", async () => {
  const { data } = await api.get("user/teacher");
  return data;
});

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProfiles.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.profiles = payload;
      })
      .addCase(getProfiles.rejected, (state, { error }) => {
        notify.error(error.message);
      });
  },
});

export const profileSelector = (state: RootState) => state.profile;
