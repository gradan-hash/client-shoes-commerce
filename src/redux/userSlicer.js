import { createSlice } from "@reduxjs/toolkit";

export const userSlicer = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.error = true;
      state.isFetching = false;
    },
    remove: (state) => (state = {}),
  },
});

const userReducer = userSlicer.reducer;
export const { loginStart, loginSuccess, loginFailure } = userSlicer.actions;
export default userReducer;
