import React from "react";
import Cards from "./Cards.js";

const Tours = ({tours, removeTour}) => {
    return (
        <div className="flex flex-wrap justify-around align-center">
            {
                tours.map((tour) => {
                     return (
                        <Cards {...tour} removeTour={removeTour}></Cards>
                     )
                })
            }
        </div>
    );
}

export default Tours;