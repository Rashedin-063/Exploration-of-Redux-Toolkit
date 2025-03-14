import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";


const initialCounters = [
  {id: 1, value: 0},
  {id: 2, value: 5},
]

function App() {

   const [counters, setCounters] = useState(initialCounters)
  
  const handleIncrement = (counterId) => {
      return alert(counterId)
      setCount(prevCount => prevCount + 1)
    }
  const handleDecrement = (counterId) => {
         return alert(counterId);
      if (count > 0) {
        setCount(prevCount => prevCount - 1)
      } else {
        setCount(0)
      }
    }


  return (
    <div className='flex flex-col gap-8 justify-center items-center min-h-screen bg-indigo-950'>
      <h2 className='mb-8 text-center text-4xl bg-rose-100 px-9 py-3 rounded-md'>
        Simple Counter Application
      </h2>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          count={counter.value}
          handleIncrement={() => handleIncrement(counter.id)}
          handleDecrement={() => handleDecrement(counter.id)}
        />
      ))}

      <Stats totalCount={10} />
    </div>
  );
}

export default App
