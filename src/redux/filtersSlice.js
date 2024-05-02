import { createSlice } from "@reduxjs/toolkit";

const INITAL_STATE = {
  name: '',
}
  
  const filterSlice = createSlice({
    name: 'filters',
    initialState: INITAL_STATE,
    reducers: {
      setFilterName(state, action) { 
        state.name = action.payload;
      },
      
    },
  });
  export const selectFilterName = state => state.filters.name;
  export const { setFilterName } = filterSlice.actions;
  export const filterReducer = filterSlice.reducer;