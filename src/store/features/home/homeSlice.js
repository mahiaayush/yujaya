import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getHomeData } from "../../../services/homeService";

// ✅ Async Thunk (JS)
export const fetchHomeData = createAsyncThunk(
  "home/fetchHomeData",
  async () => {
    const data = await getHomeData();
    return data;
  }
);

// ✅ Initial State (JS)
const initialState = {
  loading: false,
  error: null,
  data: null,
};

// ✅ Slice (JS)
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchHomeData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchHomeData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchHomeData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load home data";
      });
  },
});

export default homeSlice.reducer;
