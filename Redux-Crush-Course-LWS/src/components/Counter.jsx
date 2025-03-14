import { useState } from "react"


const Counter = () => {

  const [count, setCount] = useState(0)

  return (
    <main className="bg-purple-200 p-16 rounded-md ">
      <h2 className='mb-8 text-center text-4xl'>Simple Counter Application</h2>

      <div className="bg-white shadow-md p-8 rounded-md flex flex-col justify-center items-center">
        <h3 className="text-center text-5xl font-semibold">{count}</h3>
        <div className="mt-8 flex gap-4">
          <button className="bg-purple-600 px-8 py-3 text-white font-semibold text-lg rounded-md" onClick={() => setCount(count + 1)}>Increment</button>
          <button className="bg-purple-600 px-8 py-3 text-white font-semibold text-lg rounded-md" onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    </div>
    </main>
  )
}
export default Counter