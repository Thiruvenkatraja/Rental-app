import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertyData = createAsyncThunk(
  "fetchPropertyData",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/property/");
    return response.json();
  }
);

export const propertyData = createSlice({
  name: "property",
  initialState: {
    loading: false,
    propertyData: [],
    error: false,
  },
  reducers: {},
  extraReducers: (builder: any) => {
    builder.addCase(fetchPropertyData.pending, (state: any) => {
      state.loading = true;
    });
    builder.addCase(fetchPropertyData.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.propertyData = action.payload;
    });
    builder.addCase(fetchPropertyData.rejected, (state: any) => {
      state.error = true;
    });
  },
});

export default propertyData.reducer;
