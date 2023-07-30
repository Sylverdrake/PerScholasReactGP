import React from "react";
import axios from 'axios';
import { useState, useEffect } from 'react';
import '../App.css';

const Hourly = (props) => {
      const [weather, setWeather] = useState('')


      const getWeather = async () =>
      {
      await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${props.wInfo?.latitude}&longitude=${props.wInfo?.longitude}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weathercode,surface_pressure,cloudcover,visibility,evapotranspiration,windspeed_10m,windgusts_10m&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&forecast_days=1`)
      .then(res => 
      {
            console.log(res.data)
            setWeather(res.data)
      }).catch(err => 
            {
            console.log(err);
            })
      }

useEffect(()=>{getWeather()}, [props.wInfo]);

return (
<div className='mainContainer'>
      <h2 className="hourlyDiv"> Hourly Forecast for {props.wInfo?.name}: </h2>
      <div className="block">
      <ul className="individual">
      
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[0]}
      <br />
      <strong>{weather.hourly?.temperature_2m[0]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[0]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[0]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[0]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[0]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[0]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[1]}
      <br />
      <strong>{weather.hourly?.temperature_2m[1]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[1]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[1]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[0]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[1]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[1]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[2]}
      <br />
      <strong>{weather.hourly?.temperature_2m[2]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[2]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[2]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[2]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[2]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[2]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[3]}
      <br />
      <strong>{weather.hourly?.temperature_2m[3]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[3]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[3]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[3]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[3]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[3]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[3]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[4]}
      <br />
      <strong>{weather.hourly?.temperature_2m[4]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[4]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[4]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[4]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[4]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[4]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[4]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[5]}
      <br />
      <strong>{weather.hourly?.temperature_2m[5]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[5]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[5]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[5]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[5]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[5]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[5]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[6]}
      <br />
      <strong>{weather.hourly?.temperature_2m[6]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[6]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[6]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[6]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[6]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[6]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[6]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[7]}
      <br />
      <strong>{weather.hourly?.temperature_2m[7]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[7]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[7]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[7]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[7]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[7]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[7]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[8]}
      <br />
      <strong>{weather.hourly?.temperature_2m[8]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[8]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[8]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[8]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[8]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[8]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[8]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[9]}
      <br />
      <strong>{weather.hourly?.temperature_2m[9]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[9]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[9]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[9]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[9]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[9]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[10]}
      <br />
      <strong>{weather.hourly?.temperature_2m[10]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[10]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[10]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[10]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[10]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[10]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[10]}%
      <br />
      </div>
      </ul>

      <ul className="individual">
      
       {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{weather.hourly?.time[11]}
      <br />
      <strong>{weather.hourly?.temperature_2m[11]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {weather.hourly?.precipitation_probability[11]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{weather.hourly?.windspeed_10m[11]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {weather.hourly?.relativehumidity_2m[11]}%
      <br />
      {/* <strong>UV Index:</strong> {weather.hourly?.uv_index_max[11]}
       <br /> */}
      <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {weather.hourly?.cloudcover[11]}%
      <br />
      <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {weather.hourly?.precipitation_probability[11]}%
      <br />
      </div>
      </ul>
      </div>
</div>
);
};


export default Hourly;