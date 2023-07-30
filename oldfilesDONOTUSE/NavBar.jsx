import React from 'react'
import SubmitLocation from './SubmitLocation'

function NavBar({ locationSearch }) {
  return (
    <div className='navcontainer'>   
        <div className='navMenu'>

            <div className='searchContain'>
    <SubmitLocation locationSearch={locationSearch}/>
    </div>
            <div className='menuItems'>
            <p className='indItem'>7 Day</p>
            <p className='indItem' onClick={() => window.location.reload()}>Hourly</p>
            <p className='indItem'>10 Day</p>
            </div>

        </div>
    </div>
  )
}

export default NavBar