import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../features/posts/PostsSlice";

const Posts = () => {

  const {posts, isLoading, isError, error} = useSelector(state => state.posts);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  
  // decide what to render

  let content;

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (!isLoading && isError) {
    content = <p>An error occurred: {error}</p>
  }

  if (!isLoading && !isError && posts.length === 0) {
    content = <p>No posts found.</p>
  }
  if (!isLoading && !isError && posts.length > 0) {
    content = (
      <ul className='bg-slate-100 px-8 py-4'>
        {posts.map((post, idx) => (
          <li key={post.id} className='text-lg mb-2'>
            {idx + 1} . {post.title}
          </li>
        ))}
      </ul>
    );
  }



  return (
    <div>
{content}
    </div>
  )
}
export default Posts