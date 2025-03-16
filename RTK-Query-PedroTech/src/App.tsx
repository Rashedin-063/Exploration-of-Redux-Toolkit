import { useGetPostsQuery } from "./services/jsonPlaceholderApi"

const App = () => {

  const { data, error, isLoading } = useGetPostsQuery()
  
  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error happens!</p>
  

  console.log(data);
  

  return (
    <div>
      App
    </div>
  )
}
export default App