import { useState } from "react"
import Button from "./Button"
import Count from "./Count"


const Counter = () => {

  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1)
  }
  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1)
    } else {
      setCount(0)
    }
  }

  return (
    <main className="bg-purple-200 p-16 rounded-md ">
      <h2 className='mb-8 text-center text-4xl'>Simple Counter Application</h2>

      <div className="bg-white shadow-md p-8 rounded-md flex flex-col justify-center items-center">
     <Count count={count}/>
        <div className="mt-8 flex gap-4">
         <Button type='' handler={handleIncrement} text='Increment' />
         <Button type='danger' handler={handleDecrement} text='Decrement' />
        </div>
    </div>
    </main>
  )
}
export default Counter