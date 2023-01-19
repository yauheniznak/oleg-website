import './App.css';
import React from "react";

import Buses from './Buses';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Servises from "./Servises"
import OurTrips from './OurTrips'


function App() {
  

  return (<div className="container">
    <Router>
  <nav className="navbar">
  <Link className="eachone" to ="/">Пассажирские перевозки </Link>
    <Link className="each" to ="/">Автопарк </Link>
    <Link className="each" to="/Услуги">Услуги</Link>
    <Link className="each" to="/НашиПоездки">Наши Поездки</Link>
  </nav>
  <Routes className="navigator">
    <Route  path ="/" element= {<Buses/>}/>
    <Route  path ="Услуги" element= {<Servises/>}/>
    <Route  path ="НашиПоездки" element= {<OurTrips/>}/>
    
  </Routes>
</Router>
  
    </div>
  );
}

export default App;