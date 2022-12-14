import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const API = getAPI({ req: `s=batman` });

const initialState = {
  movie: [],
  loading: false,
};

export const fetchData = createAsyncThunk("movie/fetchData", async () => {
  const res = await axios.get(API);
  return res.data.Search;
});

const homeSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchData.fulfilled]: (state, { payload }) => {
      state.movie = payload;
      state.isLoading = false;
    },
    [fetchData.rejected]: (state, action) => {
      state.isLoading = true;
      state.error = action.error.message;
    },
  },
});

export default homeSlice.reducer;
