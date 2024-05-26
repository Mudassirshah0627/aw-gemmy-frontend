import { baseUrl } from "@/config/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const asyncLoginUsers = createAsyncThunk(
  "asyncLoginUsers",
  async function asyncLoginUsers(data: any, { rejectWithValue }) {
    try {
      const loginUser = await baseUrl.post("/api/v1/login", data.user);

      return loginUser;
    } catch (error: any) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const UserSlice = createSlice({
  name: "userSlice",
  initialState: {
    loading: false,
    error: null,
    user: [],
  },
  reducers: {},
  extraReducers(builder) {
    // login
    builder.addCase(asyncLoginUsers.pending, function (state, payload) {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(asyncLoginUsers.fulfilled, function (state, action) {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      }),
      builder.addCase(asyncLoginUsers.rejected, function (state, { payload }) {
        state.loading = false;
        state.error = payload;
      });
  },
});

export default UserSlice.reducer;
