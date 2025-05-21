import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../Slice/ProjectSlice/ProjectSlice.js';
import blogReducer from '../Slice/blogSlice/blogSlice.js'
import contactUsReducer from '../Slice/ContactUsSlice/ContactUsSlice.js'

const store = configureStore({
  reducer: {
    projects: projectReducer,
    blogs: blogReducer,
    contact: contactUsReducer
  },
});

export default store;