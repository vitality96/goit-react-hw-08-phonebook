import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async contact => {
    try {
      const { data } = await axios.post('/contacts', contact);
      return data;
    } catch (error) {
      //error
    }
  }
);

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      //error
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      if (response.status === 200) {
        return contactId;
      } else {
        throw new Error({ message: 'error' });
      }
    } catch (error) {
      //error
    }
  }
);
