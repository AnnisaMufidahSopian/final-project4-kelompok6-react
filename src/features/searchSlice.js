import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import getAPI from "../app/api";

const initialState = {
  movie: [],
  loading: false,
};

const API = async (search) => {
  const response = await axios.get(
    getAPI({ req: `s=${search}` })
  );
  return response.data.Search;
};

export const fetchData = createAsyncThunk("search/fetchData", API);

export const searchSlice = createSlice({
  name: "search",
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

export default searchSlice.reducer;
