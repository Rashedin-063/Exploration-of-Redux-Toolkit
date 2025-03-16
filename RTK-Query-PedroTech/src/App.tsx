import { useGetPostsQuery } from "./services/jsonPlaceholderApi"

const App = () => {

  const { data, error, isLoading } = useGetPostsQuery()
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error happens!</p>
  

  // console.log(data);
  

  return (
    <div>
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
        {data?.map((post) => (
          <div
            style={{
              border: '1px dashed #c4c4c4',
              padding: '8px 16px',
              marginBottom: '16px',
              width: '400px',
              borderRadius: '8px',
              backgroundColor: 'rebeccapurple'
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
    </div>
  );
}
export default App