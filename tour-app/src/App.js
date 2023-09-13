import React, { useState } from "react";
import Tours from "./components/Tours.js";
import Data from "./data.js";

const App = () => {

  const[tours, setTours] = useState(Data);

  function removeTour(id) {
     const newTours = tours.filter( (tour) => tour.id !== id);
     setTours(newTours);
  }

  if(tours.length === 0) {
    return (
      <div className="flex justify-center align-center mt-40">
        <div className="flex justify-center align-center flex-col">
          <h2 className="font-bold text-[3rem]">No Tour Is Left</h2>
          <button onClick={ () => setTours(Data) } className="font-bold text-3xl rounded-md text-white w-[12rem] bg-blue-500 p-[0.5rem] pl-[2rem] m-2 ml-16 pr-[2rem]">Refresh</button>
        </div>
      </div>
    )
  }

  return (
    <div>
       <h2 className="text-center font-bold text-[4rem] m-5 border-2 rounded-md bg-gray-200">Tour With Anuj</h2>
       <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App;