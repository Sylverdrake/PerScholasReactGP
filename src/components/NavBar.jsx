import React from 'react'
import {Link} from 'react-router-dom';

function NavBar() {
  return (
  <div className='navcontainer'>   
      <div className='navMenu'>
        <div className='menuItems'>
        <Link to="/">
        <p className='indItem'>Hourly Forecast</p>
        </Link>

        <Link to="/weeklyforecast">
        <p className='indItem'>7 Day Forecast</p>
        </Link>

        <Link to="/tendayforecast">
        <p className='indItem'>10 Day Forecast</p>
        </Link>
      </div>
    </div>
  </div>
  )
}

export default NavBar