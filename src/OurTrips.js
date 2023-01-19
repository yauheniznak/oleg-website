import {trip} from "./data";
import {useState} from "react";


function OurTrips(){

    const [trips,setTrips]= useState(0);
    const {country,date,photo,about}=trip[trips];

    const previousTrip =()=>{
        setTrips ((trips => {
            trips -- ;
            if(trips<0) { trips=trip.length-1 };
            return trips
        }))
    }
    const nextTrip =()=>{
        setTrips ((trips =>{
            trips ++;
            if(trips>trip.length-1){
                trips=0
            }
            return trips
        }))
    }

    return (
        <div>
        
        <div className=" container">
            <div className="header" >
                <h1>Наши поездки и отчеты</h1>
            </div>
            <div className="about">
                  <p>В данном разделе рассказываем о наших перевозках. Автобусные туры по Европе и России, трансферы в Киев, Москву, Варшаву.</p>
            </div>
        </div>



        <div className="ourtrips">
            <div>
          <img src={photo} width="500px" height="500px" alt="coutnry"/>
          </div>
          <div className="destination">
              <h3 className="country">{country}</h3>
              <h6>{date}</h6>
              <p className="text">{about}</p>
          </div>
      </div>

      <div className="slides">
          <button className="nextprev" onClick={previousTrip}>Предыдущая поездка</button>
          <button className="nextprev" onClick={nextTrip}>Следующая поездка</button>
      </div>

    </div>   
    
       
    )
    }

export default OurTrips