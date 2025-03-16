import { useState } from "react";
import { useCreatePostMutation, useGetPostsQuery } from "./services/jsonPlaceholderApi"

const App = () => {

    const [newPost, setNewPost] = useState<{
      title: string;
      body: string;
      id: number;
    }>({ title: '', body: '', id: 99999 });

  const { data, error, isLoading } = useGetPostsQuery();

   const [ createPost, {isLoading: isMutationLoading, error: mutationError} ] = useCreatePostMutation()
 
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error happens!</p>


  if (isMutationLoading) return <p>Post creation loading...</p>
  if (mutationError) return <p>Error happens for post creation</p>
  

  // console.log(data);

  const handleCreatePost = async() => {
    await createPost(newPost)
    refetch()
  }
  

  return (
 
      <div
        style={{
          width: '100vw',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '2rem',
        }}
      >
        <div style={{display: 'flex', flexDirection: 'column', width: '435px', gap: '8px', marginBottom: '2rem', backgroundColor: '#a5a5a5', padding: '16px'}}>
          <input
            type='text'
            placeholder='Title...'
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, title: e.target.value }))
            }
          />
          <input
            type='text'
            placeholder='Body...'
            onChange={(e) =>
              setNewPost((prev) => ({ ...prev, body: e.target.value }))
            }
          />
          <button onClick={handleCreatePost} disabled={isMutationLoading}>
            {' '}
            Create Post{' '}
          </button>
        </div>
        {data?.map((post) => (
          <div
            style={{
              border: '1px dashed #c4c4c4',
              padding: '8px 16px',
              marginBottom: '16px',
              width: '400px',
              borderRadius: '8px',
              backgroundColor: 'rebeccapurple',
            }}
          >
            <p style={{ fontSize: '18px' }}>
              {' '}
              <span style={{ textDecoration: 'underline' }}>Title:</span>{' '}
              {post.title}
            </p>
            <p>
              {' '}
              <span style={{ fontSize: '18px', textDecoration: 'underline' }}>
                Description:
              </span>{' '}
              {post.body}
            </p>
          </div>
        ))}
      </div>
 
  );
}
export default App