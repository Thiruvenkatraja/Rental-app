import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPropertyData = createAsyncThunk("fetchPropertyData", async()=>{
    const response = await fetch("https://3.226.14.5:7000/property/");
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
    extraReducers: (builder:any) => {
        builder.addCase(fetchPropertyData .pending, (state:any) => {
          state.loading = true;
        });
        builder.addCase(fetchPropertyData .fulfilled, (state:any, action:any) => {
          state.loading = false;
          state.propertyData = action.payload;
        });
        builder.addCase(fetchPropertyData .rejected, (state:any) => {
          state.error = true;
        });
      },
})

export default propertyData.reducer;
