import React, { useState } from "react";

const Cards = ( {id, name, info, image, price, removeTour} ) => {

    const[readmore, setRearmore] = useState(false);

    const discription = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandaler() {
        setRearmore(!readmore);
    }

    return (
        <div className="h-[40rem] w-[25rem] border-2 p-[1rem] rounded-md m-4">
            <img src={image} className="h-[20rem] w-[23rem] rounded-md"/>
            <div className="flex justify-between align-center p-[1rem]">
                <h4 className="font-bold text-[2rem] text-green-600">{name}</h4>
                <h4 className="mt-[5px] font-bold text-[1.5rem]">₹ {price}</h4>
            </div>
            <div className="cursor-pointer">
                {
                    discription
                }
                <span onClick={readmoreHandaler}>
                    { readmore ? `Show Less` : `Read More`}
                </span>
            </div>
            <div className="flex justify-center mt-2">
              <button onClick={ () => removeTour(id) } className="font-bold text-2xl rounded-md text-red-500 bg-gray-200 p-[0.5rem] pl-[2rem] m-2 pr-[2rem]">Not Intrested</button>
            </div>
        </div>
    )
}

export default Cards;