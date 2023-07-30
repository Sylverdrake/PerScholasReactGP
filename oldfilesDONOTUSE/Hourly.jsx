import React from "react";

const Hourly = (props) => {
  return (
    <div className='mainContainer'>
      <h2 className="hourlyDiv"> Hourly Forecast: </h2>
      <div className="block">
        <ul className="individual">
          
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[0]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[0]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[0]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[0]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[0]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[0]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[0]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[1]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[1]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[1]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[1]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[0]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[1]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[1]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[2]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[2]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[2]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[2]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[2]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[2]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[2]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[3]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[3]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[3]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[3]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[3]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[3]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[3]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[3]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[4]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[4]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[4]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[4]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[4]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[4]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[4]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[4]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[5]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[5]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[5]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[5]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[5]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[5]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[5]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[5]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[6]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[6]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[6]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[6]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[6]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[6]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[6]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[6]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
      {/* {props.hourlyWeather.latitude} */}
      <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[7]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[7]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[7]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[7]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[7]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[7]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[7]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[7]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[8]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[8]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[8]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[8]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[8]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[8]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[8]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[8]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[9]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[9]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[0]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[9]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[9]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[9]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[9]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[9]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[10]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[10]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[10]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[10]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[10]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[10]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[10]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[10]}%
       <br />
      </div>
      </ul>

      <ul className="individual">
          
       {/* {props.hourlyWeather.latitude} */}
       <div className="upper">
      <strong className="time">Time: </strong>{props.hourlyWeather.hourly.time[11]}
      <br />
      <strong>{props.hourlyWeather.hourly.temperature_2m[11]}°F</strong> <img src="https://www.iconpacks.net/icons/2/free-thermometer-icon-1829-thumb.png" className="tempImg"/>
      <br />
      {/* <strong>Chance of Rain: </strong> {props.hourlyWeather.hourly.precipitation_probability[11]}%
            <br /> */}
      <strong>Wind Speed: </strong>  <img src="https://cdn.icon-icons.com/icons2/2772/PNG/512/wind_weather_icon_176797.png" className="windImg"/>{props.hourlyWeather.hourly.windspeed_10m[11]}mp/h
      </div>

      <div className="lower">
      <strong>Humidity: </strong> {props.hourlyWeather.hourly.relativehumidity_2m[11]}%
       <br />
       {/* <strong>UV Index:</strong> {props.hourlyWeather.hourly.uv_index_max[11]}
       <br /> */}
       <strong>Cloud Cover: </strong><img src="https://icon-library.com/images/cloud-icon-png-transparent/cloud-icon-png-transparent-0.jpg" className="cloudImg"/> {props.hourlyWeather.hourly.cloudcover[11]}%
       <br />
       <strong>Chance of Rain: </strong> <img src="https://cdn1.iconfinder.com/data/icons/weather-189/64/weather-icons-rainy-512.png" className="rainImg"/> {props.hourlyWeather.hourly.precipitation_probability[11]}%
       <br />
      </div>
      </ul>
      </div>
    </div>
  );
};
  


 

export default Hourly;