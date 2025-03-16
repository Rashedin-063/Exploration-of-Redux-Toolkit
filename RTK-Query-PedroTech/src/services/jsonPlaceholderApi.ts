import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { Post } from "../types/types";


export const jsonPlaceholderApi = createApi({
  reducerPath: 'jsonPlaceholderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
  }),
  endpoints: (build) => ({
    getPosts: build.query<Post, string>({
      query: () => 'posts'
    }),
    createPosts: build.mutation<Post, string>({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: { 'Content-Type': 'application/json' },
      })
    }),
  })
});