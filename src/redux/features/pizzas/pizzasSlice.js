import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'pizzas',
  initialState: {
    activeCategory: 0,
    isLoading: false,
    sortValue: {
      name: 'популярности',
      propertySort: 'rating',
    },
  },
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSortValue: (state, action) => {
      state.sortValue.name = action.payload.name;
      state.sortValue.propertySort = action.payload.propertySort;
    },
  },
});

export const { setActiveCategory, setLoading, setSortValue } =
  counterSlice.actions;

export default counterSlice.reducer;
