import React, { useState } from 'react';
import axios from 'axios';
import {useEffect } from 'react';

function PastWeek(props) {
    const [weatherPast, setWeatherPast] = useState('')

    useEffect(() => {
    
    const getWeatherPast = async () => {
        try {
        const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${props.zInfo?.latitude}&longitude=${props.zInfo?.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&past_days=14&forecast_days=1&models=gfs_seamless`
        );
        console.log(res.data);
        setWeatherPast(res.data);
        } catch (err) {
        console.log(err);
        }
    };

    if (props.zInfo) {
        getWeatherPast(); // Call getWeather when location is available
    }
    }, [props.zInfo]);


//ANIMATION CODE
const [isActive0, setActive0] = useState(false)
const [isActive1, setActive1] = useState(false)
const [isActive2, setActive2] = useState(false)
const [isActive3, setActive3] = useState(false)
const [isActive4, setActive4] = useState(false)
const [isActive5, setActive5] = useState(false)
const [isActive6, setActive6] = useState(false)

const toggleClass = (boxIndex) =>
{
setActive0(boxIndex === 0 ? !isActive0 : false)
setActive1(boxIndex === 1 ? !isActive1 : false)
setActive2(boxIndex === 2 ? !isActive2 : false)
setActive3(boxIndex === 3 ? !isActive3 : false)
setActive4(boxIndex === 4 ? !isActive4 : false)
setActive5(boxIndex === 5 ? !isActive5 : false)
setActive6(boxIndex === 6 ? !isActive6 : false)
}
//ANIMATION CODE


    
//rounds up lat/long
const roundUp = (x) =>
{
    return Number.parseFloat(x).toFixed(2)
}

//array to store direction code
let latitude = ["N", "S"]
let longitude = ["E", "W"]
let lat = 0
let long= 0

//latitude direction check
if(props.zInfo?.latitude >= 0)
{
    lat = 0
}
else
{
    lat = 1
}

//longitude direction check
if(props.zInfo?.longitude < 0)
{
    long = 0
}
else
{
    long = 1
}
return (
<div className='box'>
        <div className="locationBox">
        <p>{roundUp(weatherPast?.latitude)} {weatherPast.daily_units?.winddirection_10m_dominant}{latitude[lat]}</p>
        <p>{roundUp(weatherPast?.longitude)} {weatherPast.daily_units?.winddirection_10m_dominant}{longitude[long]}</p>
        <p>{weatherPast?.timezone} | {weatherPast?.timezone_abbreviation}</p>
        <p>{weatherPast?.elevation} meters Above Sea Level</p>
        </div>

<div className="forecastWrapper">
    <div className={`forecastBox0 ${isActive0 ? 'activeForecast0' : ''}`} onClick={() => toggleClass(0)}>
        <p>Day: {weatherPast.daily?.time[7]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[7]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[7]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[7]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[7]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[7]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[7]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[7]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[7]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[7]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox1 ${isActive1 ? 'activeForecast1' : ''}`} onClick={() => toggleClass(1)}>
        <p>Day: {weatherPast.daily?.time[8]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[8]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[8]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[8]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[8]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[8]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[8]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[8]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[8]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[8]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox2 ${isActive2 ? 'activeForecast2' : ''}`} onClick={() => toggleClass(2)}>
        <p>Day: {weatherPast.daily?.time[9]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[9]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[9]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[9]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[9]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[9]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[9]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[9]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[9]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[9]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox3 ${isActive3 ? 'activeForecast3' : ''}`} onClick={() => toggleClass(3)}>
        <p>Day: {weatherPast.daily?.time[10]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[10]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[10]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[10]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[10]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[10]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[10]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[10]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[10]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[10]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox4 ${isActive4 ? 'activeForecast4' : ''}`} onClick={() => toggleClass(4)}>
        <p>Day: {weatherPast.daily?.time[11]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[11]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[11]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[11]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[11]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[11]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[11]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[11]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[11]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[11]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox5 ${isActive5 ? 'activeForecast5' : ''}`} onClick={() => toggleClass(5)}>
        <p>Day: {weatherPast.daily?.time[12]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[12]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[12]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[12]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[12]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[12]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[12]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[12]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[12]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[12]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox6 ${isActive6 ? 'activeForecast6' : ''}`} onClick={() => toggleClass(6)}>

        <p>Day: {weatherPast.daily?.time[13]} {weatherPast?.timezone_abbreviation}<br/>
        Temp Max: {weatherPast.daily?.temperature_2m_max[13]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherPast.daily?.temperature_2m_min[13]} {weatherPast.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherPast.daily?.sunrise[13]} {weatherPast?.timezone_abbreviation} <br/>
        Sunset: {weatherPast.daily?.sunset[13]} {weatherPast?.timezone_abbreviation} <br/>
        Max UV Index: {weatherPast.daily?.uv_index_max[13]} <br/>
        Shortwave Radiation: {weatherPast.daily?.shortwave_radiation_sum[13]} {weatherPast.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherPast.daily?.precipitation_probability_max[13]}{weatherPast.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherPast.daily?.windspeed_10m_max[13]}{weatherPast.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherPast.daily?.winddirection_10m_dominant[13]}{weatherPast.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>
</div>

</div>
)
}

export default PastWeek