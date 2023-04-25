import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertyData = createAsyncThunk("fetchPropertyData", async()=>{
    const response = await fetch("http://127.0.0.1:8000/cart/");
    return response.json();
})

export const propertyData = createSlice({
    name:"property",
    initialState:{
        loading: false,
        propertyData:[],
        error:false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPropertyData .pending, (state) => {
          state.loading = true;
        });
        builder.addCase(fetchPropertyData .fulfilled, (state, action) => {
          state.loading = false;
          state.propertyData = action.payload;
        });
        builder.addCase(fetchPropertyData .rejected, (state) => {
          state.error = true;
        });
      },
})

export default propertyData.reducer;