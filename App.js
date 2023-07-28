import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import ForecastSeven from './components/ForecastSeven';
import SubmitLocation from './components/SubmitLocation';
import Hourly from './components/Hourly';

function App() {
  const [location, setLocation] = useState('')
  const [weather, setWeather] = useState(null)
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

  const getWeather = async () =>
  {
    await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&models=gfs_seamless`)
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
            <h1>Seven Day Forecast for: {location.name}</h1>
      <h2><a href="https://open-meteo.com/">Weather data by Open-Meteo.com</a></h2>
      <SubmitLocation locationSearch={getLocation}/>
      {weather?<ForecastSeven wInfo={weather}/> : <p>Loading...</p>}

      {/* {weather?<Hourly hourlyWeather={weather} /> : <p>Loading...</p>} */}
      Resources: https://www.epa.gov/sunsafety/uv-index-scale-0
    </div>
  );
}

export default App;
