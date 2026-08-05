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
