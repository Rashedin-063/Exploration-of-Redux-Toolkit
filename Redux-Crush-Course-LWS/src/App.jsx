import { useState } from "react";
import Counter from "./components/Counter";
import Stats from "./components/Stats";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./features/counters/countersSlice";


function App() {
  const counters = useSelector((state) => state.counters);
  const dispatch = useDispatch()

  const totalCount = counters.reduce((acc , currVal) => acc + currVal.value , 0)
   
  const handleIncrement = (counterId) => {
    dispatch(increment(counterId));
   
    }
  const handleDecrement = (counterId) => {
        dispatch(decrement(counterId ))
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

      <Stats totalCount={totalCount} />
    </div>
  );
}

export default App
