import './App.css';
import { useState } from 'react';

function App() {

  const[count, setValue] = useState(0);

  const decrementHandaler = () => {
    setValue(count - 1);
  }

  const incrementhandaler = () => {
    setValue(count + 1);
  }

  const resateHandaler = () => {
    setValue(0);
  }

  return (
    <div className='min-h-screen min-w-screen flex justify-center bg-gray-700'>
      <div>

        <div className='text-teal-400 mt-[12rem] font-bold	text-2xl'>Increment And Decrement</div>

        <div className='flex justify-center items-center bg-white mt-[2rem]'>
          <button onClick={decrementHandaler} className='font-bold text-[4rem] '>-</button>
          <div className='font-bold text-[3rem] ml-[3rem] mr-[3rem]'>{count}</div>
          <button onClick={incrementhandaler} className='font-bold text-[4rem] '>+</button>
        </div>
        
        <div className='flex justify-center items-center mt-7'>
          <button onClick={resateHandaler} className='bg-blue-500 font-bold p-[0.3rem] pl-[1.5rem] pr-[1.5rem] rounded-lg text-2xl'>Resate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
