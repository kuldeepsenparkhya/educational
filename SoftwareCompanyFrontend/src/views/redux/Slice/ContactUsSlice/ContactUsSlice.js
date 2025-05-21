import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = "http://192.168.0.124:5050/api/v1";

export const createContact = createAsyncThunk(
  'contact/createContact', 
  async (contactData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/createContact`, contactData);
      return response.data; 
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to submit contact form');
    }
  }
);

const initialState = {
  success: false,
  loading: false,
  error: null,
};

const contactUsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default contactUsSlice.reducer;
