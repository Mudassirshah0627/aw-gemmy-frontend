import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    loading: false,
    error: null,
    users: [],
  },
  reducers: {},
});

export default userSlice.reducer;
