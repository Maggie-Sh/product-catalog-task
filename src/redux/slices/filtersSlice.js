import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: JSON.parse(localStorage.getItem("filters"))?.filters || {},
  page: 1,
  sortBy: JSON.parse(localStorage.getItem("filters"))?.sortBy || "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
      state.page = 1;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setSortBy: (state, { payload }) => {
      state.sortBy = payload;
      state.page = 1;
    },
  },
});

export const { setFilters, setPage, setSortBy } = filtersSlice.actions;

export default filtersSlice.reducer;
