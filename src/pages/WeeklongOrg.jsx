import React, { useState } from 'react';
import axios from 'axios';
import {useEffect } from 'react';

function Weeklong(props) 
{
    //GET WEATHER FOR A LOCATION THAT IS WEEKLY
    const [weatherWeekly, setWeatherWeekly] = useState('')

    useEffect(() => {
    
    const getWeatherWeekly = async () => {
        try {
        const res = await axios.get(
            `https://api.open-meteo.com/v1/forecast?latitude=${props.xInfo?.latitude}&longitude=${props.xInfo?.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_hours,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&models=gfs_seamless`
        );
        console.log(res.data);
        setWeatherWeekly(res.data);
        } catch (err) {
        console.log(err);
        }
    };

    if (props.xInfo) {
        getWeatherWeekly(); // Call getWeather when location is available
    }
    }, [props.xInfo]);
//END WEEKLY CODE

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
if(props.xInfo?.latitude >= 0)
{
    lat = 0
}
else
{
    lat = 1
}

//longitude direction check
if(props.xInfo?.longitude < 0)
{
    long = 0
}
else
{
    long = 1
}


//uv index color scale function -- need to work on this more
return (
    <div className='box'>
        <div className="locationBox">
        <p>{roundUp(weatherWeekly?.latitude)} {weatherWeekly.daily_units?.winddirection_10m_dominant}{latitude[lat]}</p>
        <p>{roundUp(weatherWeekly?.longitude)} {weatherWeekly.daily_units?.winddirection_10m_dominant}{longitude[long]}</p>
        <p>{weatherWeekly?.timezone} | {weatherWeekly?.timezone_abbreviation}</p>
        <p>{weatherWeekly?.elevation} meters Above Sea Level</p>
        </div>

<div className="forecastWrapper">
    <div className={`forecastBox0 ${isActive0 ? 'activeForecast0' : ''}`} onClick={() => toggleClass(0)}>
        Current Day
        <p>Day: {weatherWeekly.daily?.time[0]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[0]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[0]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[0]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[0]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[0]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[0]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[0]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[0]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[0]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox1 ${isActive1 ? 'activeForecast1' : ''}`} onClick={() => toggleClass(1)}>
        Tomorrow
        <p>Day: {weatherWeekly.daily?.time[1]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[1]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[1]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[1]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[1]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[1]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[1]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[1]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[1]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[1]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox2 ${isActive2 ? 'activeForecast2' : ''}`} onClick={() => toggleClass(2)}>
        3rd Day
        <p>Day: {weatherWeekly.daily?.time[2]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[2]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[2]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[2]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[2]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[2]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[2]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[2]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[2]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[2]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox3 ${isActive3 ? 'activeForecast3' : ''}`} onClick={() => toggleClass(3)}>
        4th Day
        <p>Day: {weatherWeekly.daily?.time[3]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[3]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[3]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[3]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[3]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[3]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[3]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[3]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[3]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[3]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox4 ${isActive4 ? 'activeForecast4' : ''}`} onClick={() => toggleClass(4)}>
        5th Day
        <p>Day: {weatherWeekly.daily?.time[4]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[4]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[4]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[4]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[4]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[4]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[4]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[4]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[4]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[4]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox5 ${isActive5 ? 'activeForecast5' : ''}`} onClick={() => toggleClass(5)}>
        6th Day
        <p>Day: {weatherWeekly.daily?.time[5]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[5]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[5]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[5]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[5]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[5]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[5]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[5]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[5]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[5]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox6 ${isActive6 ? 'activeForecast6' : ''}`} onClick={() => toggleClass(6)}>
        7th Day
        <p>Day: {weatherWeekly.daily?.time[6]} {weatherWeekly?.timezone_abbreviation}<br/>
        Temp Max: {weatherWeekly.daily?.temperature_2m_max[6]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherWeekly.daily?.temperature_2m_min[6]} {weatherWeekly.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherWeekly.daily?.sunrise[6]} {weatherWeekly?.timezone_abbreviation} <br/>
        Sunset: {weatherWeekly.daily?.sunset[6]} {weatherWeekly?.timezone_abbreviation} <br/>
        Max UV Index: {weatherWeekly.daily?.uv_index_max[6]} <br/>
        Shortwave Radiation: {weatherWeekly.daily?.shortwave_radiation_sum[6]} {weatherWeekly.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherWeekly.daily?.precipitation_probability_max[6]}{weatherWeekly.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherWeekly.daily?.windspeed_10m_max[6]}{weatherWeekly.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherWeekly.daily?.winddirection_10m_dominant[6]}{weatherWeekly.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>
</div>

</div>

)
}

export default Weeklong