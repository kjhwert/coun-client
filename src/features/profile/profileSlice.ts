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
  grade: string;
}

export interface ProfileState {
  profiles: Profile[];
  selected: {
    status: "idle" | "loading" | "failed";
    profile: Profile | null;
  };
  status: "idle" | "loading" | "failed";
}

const initialState: ProfileState = {
  profiles: [],
  selected: {
    status: "idle",
    profile: null,
  },
  status: "idle",
};

export const getProfiles = createAsyncThunk("user/getProfiles", async () => {
  const { data } = await api.get("user/profiles");
  return data;
});

export const getProfile = createAsyncThunk(
  "user/getProfile",
  async (id: number) => {
    const { data } = await api.get(`user/profile/${id}`);
    return data;
  }
);

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
      })
      .addCase(getProfile.pending, (state) => {
        state.selected.status = "loading";
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.selected.status = "idle";
        state.selected.profile = payload ? payload : null;
      });
  },
});

export const profileSelector = (state: RootState) => state.profile;
