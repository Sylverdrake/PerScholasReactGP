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
        <p className='indItem'>Seven Day Forecast</p>
        </Link>

        <Link to="/nextweekforecast">
        <p className='indItem'>Next Week's Forecast</p>
        </Link>

        <Link to="/lastweekweather">
        <p className='indItem'>Last Week's Weather</p>
        </Link>        

      </div>
    </div>
  </div>
  )
}

export default NavBar