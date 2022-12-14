import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  savedItems: JSON.parse(localStorage.getItem("saved")) || [],
  loading: false,
};

const savedSlice = createSlice({
  name: "saved",
  initialState,
  reducers: {
    addToSaved(state, action) {
      state.savedItems.unshift(action.payload);

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
      alert("Movie add to Favorite");
    },

    removeFromSaved(state, action) {
      state.savedItems = state.savedItems.filter(
        (item) => item.Title !== action.payload.Title
      );

      localStorage.setItem("saved", JSON.stringify(state.savedItems));
      alert("Movie remove from Favorite");
    },
  },
});

export const { addToSaved, checkedSaved, removeFromSaved } = savedSlice.actions;

export default savedSlice.reducer;
