import React from 'react'

function City({location}) {
  return (
    <div className='city-style'>
       <h3>{location}   78°F</h3>
       
    </div>
  )
}

export default City