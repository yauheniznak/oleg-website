function Buttons({filteredBuses}){
    return(
<div className="choice">
            <button className="choose" onClick={()=>filteredBuses("Седан") }>Седан</button>
            <button className="choose" onClick={()=>filteredBuses("Микроавтобус") }>Микроавтобус</button>
            <button className="choose" onClick={()=>filteredBuses("Лимузин") }>Лимузин</button>
            <button className="choose" onClick={()=>filteredBuses("Автобус") }>Автобус</button>
            <button className="choose" onClick={()=>filteredBuses("Минивэн") }>Минивэн</button>
            <button className="choose" onClick={()=>filteredBuses("Внедорожник") }>Внедорожник</button>
            
        </div>
    )
}

export default Buttons