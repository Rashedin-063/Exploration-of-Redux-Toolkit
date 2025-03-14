import { useState } from "react"
import Button from "./Button"
import Count from "./Count"


const Counter = ({ count, handleIncrement, handleDecrement }) => {
  return (
    <main className='bg-purple-200 px-8 py-4 rounded-md '>
      <div className='bg-white shadow-md p-8 rounded-md flex flex-col justify-center items-center'>
        <Count count={count} />
        <div className='mt-8 flex gap-4'>
          <Button type='' handler={handleIncrement} text='Increment' />
          <Button type='danger' handler={handleDecrement} text='Decrement' />
        </div>
      </div>
    </main>
  );
};
export default Counter