import Counter from "./components/Counter";
import Stats from "./components/Stats";

function App() {


  return (
    <div className='flex flex-col gap-8 justify-center items-center min-h-screen bg-indigo-950'>
      <h2 className='mb-8 text-center text-4xl bg-rose-100 px-9 py-3 rounded-md'>Simple Counter Application</h2>
      <Counter />
      <Counter />
      <Stats />
    </div>
  );
}

export default App
