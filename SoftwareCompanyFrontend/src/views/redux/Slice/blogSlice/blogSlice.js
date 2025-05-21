import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const API_URL = "http://192.168.0.124:5050/api/v1";

export const getAllBlogs = createAsyncThunk('blogs/getAll', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/getAllBlogs`);
    return response.data.data; 
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch blogs');
  }
});

export const getBlogById = createAsyncThunk('blogs/getById', async (id,{ rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/getBlogById/${id}`);
    return response.data; 
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch blog');
  }
});

const initialState = {
  blogs: [],
  currentBlog: null,
  loading: false,
  error: null,
};

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBlogs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(getAllBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default blogSlice.reducer;
