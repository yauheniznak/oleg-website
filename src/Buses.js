import './App.css';
import {useState} from "react";
import {data} from "./data";


function Buses (){
     const [bus,setbuses]=useState(data);
     const [showText,setShowText]=useState(false)

     const showTextClicked = (element) =>{
        element.statusdes = !element.statusdes
        setShowText(!showText)
     }

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
      
        <div className="choice">
            <button className="choose" onClick={()=>chosenBuses("Седан") }>Седан</button>
            <button className="choose" onClick={()=>chosenBuses("Микроавтобус") }>Микроавтобус</button>
            <button className="choose" onClick={()=>chosenBuses("Лимузин") }>Лимузин</button>
            <button className="choose" onClick={()=>chosenBuses("Автобус") }>Автобус</button>
            <button className="choose" onClick={()=>chosenBuses("Минивэн") }>Минивэн</button>
            <button className="choose" onClick={()=>chosenBuses("Внедорожник") }>Внедорожник</button>
            
        </div>
        <div className="products-info ">
            {bus.map(element=>{
                const {id,image,name,type,color,airport,moreThreeHours,lessThreeHours,description,statusdes}=element;
                return(
                    <div className="product-card" key={id}>
               
                    <img сlassName="photo" src={image} alt="bus" width="350px" height="300px"   />
           
                    <div className="product-info">
                    <h1>{name}</h1>
                    <h3> Категория Авто : {type}</h3>
                    <h6> Цвет: {color}</h6>
                    <h4>Трансфер аэропорт: <span className="price">{airport}</span></h4>
                    <h4>Прокат более 3 часов: <span className="price">{moreThreeHours}</span></h4>
                    <h4>Прокат менее 3 часов: <span className="price">{lessThreeHours}</span></h4>
                    <p className="about">{statusdes? description:description.substring(0,50)+"..."}
                    <button className="more" onClick={()=>showTextClicked(element)}>{(statusdes? 'Показать меньше':'Показать больше')}</button>
                    </p>
                    </div>
                    </div>
                )
               
            })}
        </div>
        </div>
    )
   
}

export default Buses