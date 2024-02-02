import { createSlice } from "@reduxjs/toolkit";

export const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState: "",
  reducers: {
    setSearchTerm: (action) => {
      return action.payload; 
    },
    clearSearchTerm: () => {
      return "";
    }
  
  }
})

export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;