import React from 'react'

function ForecastSeven(props) {
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
    if(props.wInfo.latitude >= 0)
    {
        lat = 0
    }
    else{
        lat = 1
    }

    //longitude direction check
    if(props.wInfo.longitude < 0)
    {
        long = 0
    }
    else{
        long = 1
    }


//uv index color scale function -- need to work on this more
return (
    <div className='box'>
        <div className="locationBox">
        <p>{roundUp(props.wInfo.latitude)} {props.wInfo.daily_units.winddirection_10m_dominant}{latitude[lat]}</p>
        <p>{roundUp(props.wInfo.longitude)} {props.wInfo.daily_units.winddirection_10m_dominant}{longitude[long]}</p>
        <p>{props.wInfo.timezone} | {props.wInfo.timezone_abbreviation}</p>
        <p>{props.wInfo.elevation} meters Above Sea Level</p>
        </div>

<div className="forecastWrapper">
    <div className='forecastBox'>
        Current Day
        <p>Day: {props.wInfo.daily.time[0]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[0]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[0]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[0]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[0]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[0]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[0]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[0]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[0]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[0]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        Tomorrow
        <p>Day: {props.wInfo.daily.time[1]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[1]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[1]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[1]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[1]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[1]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[1]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[1]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[1]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[1]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        3rd Day
        <p>Day: {props.wInfo.daily.time[2]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[2]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[2]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[2]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[2]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[2]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[2]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[2]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[2]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[2]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        4th Day
        <p>Day: {props.wInfo.daily.time[3]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[3]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[3]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[3]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[3]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[3]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[3]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[3]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[3]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[3]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        5th Day4
        <p>Day: {props.wInfo.daily.time[4]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[4]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[4]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[4]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[4]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[4]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[4]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[4]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[4]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[4]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        6th Day
        <p>Day: {props.wInfo.daily.time[5]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[5]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[5]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[5]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[5]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[5]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[5]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[5]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[5]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[5]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>

    <div className='forecastBox'>
        75th Day
        <p>Day: {props.wInfo.daily.time[6]} {props.wInfo.timezone_abbreviation}<br/>
        Temp Max: {props.wInfo.daily.temperature_2m_max[6]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        Temp Min {props.wInfo.daily.temperature_2m_min[6]} {props.wInfo.daily_units.temperature_2m_max}<br/>
        
        Sunrise: {props.wInfo.daily.sunrise[6]} {props.wInfo.timezone_abbreviation} <br/>
        Sunset: {props.wInfo.daily.sunset[6]} {props.wInfo.timezone_abbreviation} <br/>
        Max UV Index: {props.wInfo.daily.uv_index_max[6]} <br/>
        Shortwave Radiation: {props.wInfo.daily.shortwave_radiation_sum[6]} {props.wInfo.daily_units.shortwave_radiation_sum} <br/>

        Precipitation Probability Max: {props.wInfo.daily.precipitation_probability_max[6]}{props.wInfo.daily_units.precipitation_probability_max} <br/>
        Max Windspeed: {props.wInfo.daily.windspeed_10m_max[6]}{props.wInfo.daily_units.windspeed_10m_max} <br/>
        Dominant Wind Direction: {props.wInfo.daily.winddirection_10m_dominant[6]}{props.wInfo.daily_units.winddirection_10m_dominant} <br/>
        </p>
    </div>
</div>


</div>

)
}

export default ForecastSeven