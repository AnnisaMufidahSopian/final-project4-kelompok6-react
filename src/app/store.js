import { configureStore } from "@reduxjs/toolkit";
import detailReducer from "../features/detailSlice";
import homeReducer from "../features/movieSlice";
import savedReducer from "../features/savedSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    home: homeReducer,
    saved: savedReducer,
    search: searchReducer,
    detail: detailReducer,
  },
});
