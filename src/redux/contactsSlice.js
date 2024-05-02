import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchContactsThunk, deleteContactThunk , addContactThunk} from "../redux/contactsOps";
// import { createSelector } from "@reduxjs/toolkit";
import { selectFilterName } from "../redux/filtersSlice";

const INITIAL_STATE = {
    items: [], 
    loading : false,
    error: null,
}

// const contactSlice = createSlice({
//     name: 'contacts',
//     initialState: INITIAL_STATE,
const contactSlice = createSlice({
    name: 'contact',
    initialState: INITIAL_STATE,
    reducers: {},
   
    extraReducers: (builder) => {
        builder
          .addCase(fetchContactsThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(fetchContactsThunk.fulfilled, (state, action) => {
            state.loading = false;
      state.items = action.payload;
          })
          .addCase(fetchContactsThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
          })
          .addCase(deleteContactThunk.pending, (state) => {
            state.loading = true;
            state.error = false;
          })
          .addCase(deleteContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.items = state.items.filter((item) => item.id !== action.payload.id);
          })
          .addCase(deleteContactThunk.rejected, (state) => {
            state.loading = false;
      state.error = true;
          })
          .addCase(addContactThunk.pending, (state) => {
            state.loading = true;
      state.error = false;
          })
          .addCase(addContactThunk.fulfilled, (state, action) => {
            state.loading = false;
            state.items.push(action.payload);
          })
          .addCase(addContactThunk.rejected, (state) => {
            state.loading = false;
            state.error = true;
          });
      }
  });
  
  export const contactsReducer = contactSlice.reducer;
  export const selectContacts = state => state.contacts.items;
  
  export const selectIsError = state => state.contacts.error;
  export const selectIsLoading = state => state.contacts.loading;

  export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilterName], // Залежності: масив контактів та значення фільтра
    (contacts, filter) => {
      return contacts.filter((contact) => {
        return contact.name.toLowerCase().includes(filter.toLowerCase()) ||
            contact.name.toLowerCase().includes(filter.toLowerCase())
        });
    }
  );