import React from 'react';
import { useState } from 'react';

function SubmitLocation(props) {

    const [formData, setFormData] = useState(
        {
            searchTerm: ""
        }
    )

    const handleChange = (event) =>
    {
        setFormData({...formData,[event.target.name]:event.target.value})
    }
//When input value is changed, track it

    const handleSubmit = (event) =>
    {
        event.preventDefault()
        props.locationSearch(formData.searchTerm)
    }
//When submit button is pressed, store value in input
return (
    <div>
        <form onSubmit={handleSubmit}>
        <input type="text" name="searchTerm" onChange={handleChange} value={formData.searchTerm} placeholder='City'/>

        <input type='submit' value="submit"/>

        </form>
    </div>
)
}

export default SubmitLocation