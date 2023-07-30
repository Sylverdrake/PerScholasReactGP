import React from 'react'
import { FaSearch } from 'react-icons/fa';

const Header = ({location, setLocation, handleChange}) => {
    
  return (
    <header className='head-style'>
        <div className="input-wrapper">
        <FaSearch id='search-icon' />
            <input
                placeholder='Search City'
                value={location}
                onChange={(event) => handleChange(event.target.value)}
            />
        </div>
        
    
    </header>
    
  )
}

export default Header
    
