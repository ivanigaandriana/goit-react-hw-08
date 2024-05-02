import { apiRequest, addContact, deleteContact } from '../components/services/contactsAp';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Змінено імпорт функцій
export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const data = await apiRequest();
        return data; 
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
  
});
export const deleteContactThunk = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        const data = await deleteContact(contactId);
        return data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
export const addContactThunk = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
    try {
        const data = await addContact(contact);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})