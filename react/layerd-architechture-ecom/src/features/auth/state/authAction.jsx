import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/axiosInstance";

export const loginUserAction = createAsyncThunk(
  "/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk triggeredd");
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const loginUserHydration = createAsyncThunk(
  "/hydration",
  async (_, thunkApi) => {
    let token = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.log("hydration user api err", error);
    }
  },
);
