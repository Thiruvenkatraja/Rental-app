import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchClientData = createAsyncThunk("fetchClientData", async()=>{
    const response = await fetch("http://127.0.0.1:8000/cart/");
    return response.json();
});

export const clientData = createSlice({
    name:"Client",
    initialState:{
        Url: "http://127.0.0.1:8000",
        loading: false,
        clientData:[],
        error:false,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchClientData.pending, (state) => {
          state.loading = true;
        });
        builder.addCase(fetchClientData.fulfilled, (state, action) => {
          state.loading = false;
          state.clientData = action.payload;
        });
        builder.addCase(fetchClientData.rejected, (state) => {
          state.error = true;
        });
      },
})

export default clientData.reducer;