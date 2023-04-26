import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

export const fetchClientData = createAsyncThunk("fetchClientData", async()=>{
    const response = await fetch("http://127.0.0.1:8000/clients/");
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
    extraReducers: (builder:any) => {
        builder.addCase(fetchClientData.pending, (state:any) => {
          state.loading = true;
        });
        builder.addCase(fetchClientData.fulfilled, (state:any, action:any) => {
          state.loading = false;
          state.clientData = action.payload;
        });
        builder.addCase(fetchClientData.rejected, (state:any) => {
          state.error = true;
        });
      },
})

export default clientData.reducer;
