import React, { useState } from 'react';
import axios from 'axios';
import {useEffect } from 'react';

function NextWeek(props) {
        //GET WEATHER FOR A LOCATION THAT IS WEEKLY
        const [weatherNext, setWeatherNext] = useState('')

        useEffect(() => {
        
        const getWeatherNext = async () => {
            try {
            const res = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${props.yInfo.latitude}&longitude=${props.yInfo.longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max,precipitation_probability_max,windspeed_10m_max,winddirection_10m_dominant,shortwave_radiation_sum&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=kn&precipitation_unit=inch&timezone=auto&forecast_days=14&models=gfs_seamless`
            );
            console.log(res.data);
            setWeatherNext(res.data);
            } catch (err) {
            console.log(err);
            }
        };
    
        if (props.yInfo) {
            getWeatherNext(); // Call getWeather when location is available
        }
        }, [props.yInfo]);
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
    if(props.yInfo?.latitude >= 0)
    {
        lat = 0
    }
    else
    {
        lat = 1
    }
    
    //longitude direction check
    if(props.yInfo?.longitude < 0)
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
        <p>{roundUp(weatherNext?.latitude)} {weatherNext.daily_units?.winddirection_10m_dominant}{latitude[lat]}</p>
        <p>{roundUp(weatherNext?.longitude)} {weatherNext.daily_units?.winddirection_10m_dominant}{longitude[long]}</p>
        <p>{weatherNext?.timezone} | {weatherNext?.timezone_abbreviation}</p>
        <p>{weatherNext?.elevation} meters Above Sea Level</p>
        </div>

<div className="forecastWrapper">
    <div className={`forecastBox0 ${isActive0 ? 'activeForecast0' : ''}`} onClick={() => toggleClass(0)}>
        <p>Day: {weatherNext.daily?.time[7]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[7]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[7]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[7]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[7]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[7]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[7]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[7]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[7]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[7]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox1 ${isActive1 ? 'activeForecast1' : ''}`} onClick={() => toggleClass(1)}>
        <p>Day: {weatherNext.daily?.time[8]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[8]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[8]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[8]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[8]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[8]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[8]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[8]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[8]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[8]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox2 ${isActive2 ? 'activeForecast2' : ''}`} onClick={() => toggleClass(2)}>
        <p>Day: {weatherNext.daily?.time[9]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[9]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[9]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[9]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[9]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[9]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[9]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[9]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[9]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[9]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox3 ${isActive3 ? 'activeForecast3' : ''}`} onClick={() => toggleClass(3)}>
        <p>Day: {weatherNext.daily?.time[10]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[10]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[10]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[10]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[10]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[10]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[10]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[10]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[10]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[10]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox4 ${isActive4 ? 'activeForecast4' : ''}`} onClick={() => toggleClass(4)}>
        <p>Day: {weatherNext.daily?.time[11]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[11]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[11]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[11]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[11]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[11]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[11]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[11]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[11]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[11]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox5 ${isActive5 ? 'activeForecast5' : ''}`} onClick={() => toggleClass(5)}>
        <p>Day: {weatherNext.daily?.time[12]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[12]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[12]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[12]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[12]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[12]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[12]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[12]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[12]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[12]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className={`forecastBox6 ${isActive6 ? 'activeForecast6' : ''}`} onClick={() => toggleClass(6)}>
        <p>Day: {weatherNext.daily?.time[13]} {weatherNext?.timezone_abbreviation}<br/>
        Temp Max: {weatherNext.daily?.temperature_2m_max[13]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        Temp Min {weatherNext.daily?.temperature_2m_min[13]} {weatherNext.daily_units?.temperature_2m_max}<br/>
        
        Sunrise: {weatherNext.daily?.sunrise[13]} {weatherNext?.timezone_abbreviation} <br/>
        Sunset: {weatherNext.daily?.sunset[13]} {weatherNext?.timezone_abbreviation} <br/>
        Max UV Index: {weatherNext.daily?.uv_index_max[13]} <br/>
        Shortwave Radiation: {weatherNext.daily?.shortwave_radiation_sum[13]} {weatherNext.daily_units?.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {weatherNext.daily?.precipitation_probability_max[13]}{weatherNext.daily_units?.precipitation_probability_max} <br/>
        Max Windspeed: {weatherNext.daily?.windspeed_10m_max[13]}{weatherNext.daily_units?.windspeed_10m_max} <br/>
        Dominant Wind Direction: {weatherNext.daily?.winddirection_10m_dominant[13]}{weatherNext.daily_units?.winddirection_10m_dominant} <br/>
        </p>
    </div>
</div>

</div>
)
}

export default NextWeek