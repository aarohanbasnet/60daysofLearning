import { useState } from "react"

function Object(){
    const [car,setCar] = useState({
                                year : 2024,
                                make : "Ford",
                                model : "Mustang"});

    function handleCarYearChange(event){
        setCar(c =>({...c, year : event.target.value}));
    }
    function handleCarMakeChange(event){
        setCar(c => ({...c, make : event.target.value}));
    }
    function handleCarModelChange(event){
        setCar(c => ({...c, model : event.target.value}));
    }




    return(<div>
        <p>Your favourite car is {car.year} {car.make} {car.model}</p>

        <input type="number" value={car.year} onChange={handleCarYearChange}/>
        <input type="text" value={car.make} onChange={handleCarMakeChange}/>
        <input type="text" value={car.model} onChange={handleCarModelChange}/>
    </div>);

    };


   
export default Object