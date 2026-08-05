import { createSlice } from "@reduxjs/toolkit";
import { loginUserAction, loginUserHydration } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    isLoading: true,
  },
  // reducers: {
  //   addUser: (state, action) => {
  //     state.user = action.payload;
  //     state.isAuthenticated = true;
  //     state.isLoading = false;
  //   },
  //   removeUser: (state, action) => {
  //     state.user = null;
  //     state.isAuthenticated = false;
  //     state.isLoading = false;
  //   },
  // },
  extraReducers: (builder) => {
    builder
      .addCase(loginUserAction.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginUserAction.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addCase(loginUserHydration.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(loginUserHydration.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.isLoading = false;
      })
      .addCase(loginUserHydration.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
