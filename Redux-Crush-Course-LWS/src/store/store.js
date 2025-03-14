import { configureStore } from "@reduxjs/toolkit";
import countersReducer from '../features/counters/countersSlice'
import postsReducer from '../features/posts/PostsSlice'


const store = configureStore({
  reducer: {
    counters: countersReducer,
    posts: postsReducer,
  }
})

export default store;