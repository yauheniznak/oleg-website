import './App.css';
import {useState} from "react";
import {data} from "./data";
import Buttons from './Buttons';
import Auto from './Auto'



function Buses (){
     const [bus,setbuses]=useState(data);

     const chosenBuses = (type)=>{
         const newBuses = data.filter (element => element.type===type
            )
            setbuses(newBuses)
     }
    return(
        <div>
        <div className="header">
<h1> Наш парк</h1>
        </div>
      <div>
        <Buttons filteredBuses={chosenBuses}/>
        <Auto rentCar={bus}/>
        </div>
    </div>
    )
   
}

export default Buses