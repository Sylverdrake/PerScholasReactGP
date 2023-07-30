import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom'

import SubmitLocation from './components/SubmitLocation';
import NavBar from './components/NavBar';

import Hourly from './pages/Hourly';
import WeeklongOrg from './pages/WeeklongOrg';

// import Test2 from './pages/Test2';
// import Test3 from './pages/Test3';

function App() {
  const [location, setLocation] = useState('')

  const getLocation = async (searchTerm) =>
  {
  await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=1&language=en&format=json`)
  .then(res => 
      {
        // console.log(res.data.results[0])
      setLocation(res.data.results[0])
      })
      .catch(err => 
      {
          console.log(err);
      })
  }
  return (

    <div className="App">
      <NavBar/>
      <SubmitLocation locationSearch={getLocation}/>
      <Routes>
        <Route path="/" element={<Hourly wInfo={location}/>}/>
        <Route path="/weeklyforecast" element={<WeeklongOrg xInfo={location}/>}/>
        {/* <Route path="/tendayforecast" element={<Test3 yInfo={location}/>}/> */}
      </Routes>



      {/* <div className='wholeContainer'>
        <NavBar/>
            <h1>Seven Day Forecast for: {location.name}</h1>
      <h2><a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a></h2>
      <SubmitLocation locationSearch={getLocation}/> */}
      {/* {weather?<ForecastSeven wInfo={weather}/> : <p>Loading...</p>} */}
      {/* <img src="https://i.ibb.co/WcgHnJV/Atmo-Cast-Logo-Final-CUTpsd.png"  className="logoImg"   onClick={() => window.location.reload()}
  alt="Logo"/>  */}
      {/* {weather?<Hourly hourlyWeather={weather} /> : <p>Loading...</p>} */}
      {/* Resources: https://www.epa.gov/sunsafety/uv-index-scale-0 */}
      
    {/* </div> */}
    </div>
  );
}

export default App;
