import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ForecastSeven from './components/ForecastSeven';
import SubmitLocation from './components/SubmitLocation';
import Hourly from './components/Hourly'; 
import { Route, Switch, Link } from 'react-router-dom'; 
import NavBar from './components/NavBar';

function App() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)
  const getLocation = async (searchTerm) =>
  {
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${searchTerm}&count=1&language=en&format=json`)
    .then(res => 
      {
        setLocation(res.data.results[0])
      })
      .catch(err => 
        {
          console.log(err);
        })
  }

  const getWeather = async () =>
  {
    await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,evapotranspiration,windspeed_10m,windgusts_10m&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&forecast_days=1`)
    .then(res => 
      {
        console.log(res.data)
        setWeather(res.data)
      }).catch(err => 
        {
          console.log(err);
        })
  }

useEffect(()=>{getWeather()}, [location]);

  return (

    <div className="App">
<div className='wholeContainer'>
<NavBar locationSearch={getLocation} />
    
    <img src="https://i.ibb.co/WcgHnJV/Atmo-Cast-Logo-Final-CUTpsd.png" className="logoImg"  onClick={() => window.location.reload()}
  alt="Logo"/> 
    {weather?<Hourly hourlyWeather={weather} /> : <p></p>}
    </div>
  </div>
  );
}

export default App;
