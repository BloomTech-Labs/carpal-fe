import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
// import { withFormik, Form, Field } from 'formik'
// import * as Yup from 'yup'
import "./AddLocationName.scss"

function EditLocation(props) {
    const [currentLocation, setCurrentLocation] = useState()
    const locId = props.locId
    const targetLoc = props.location.filter(loc => loc.id === locId)
    console.log(currentLocation)

    useEffect(() => {
        setCurrentLocation(targetLoc)
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        props.toggle()

    }

    const handleChange = e => {
        return
    }

    return (
        <div className='edit-form'>
            <h1>Edit Location</h1>
            <form className='location-edit-form' onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='location name' onChange={handleChange}></input>
                <input type='text' name='house_number' placeholder='house number' onChange={handleChange}></input>
                <input type='text' name='street' placeholder='street' onChange={handleChange}></input>
                <input type='text' name='city' placeholder='city' onChange={handleChange}></input>
                <input type='text' name='state' placeholder='state' onChange={handleChange}></input>
                <input type='text' name='zip_code' placeholder='zip code' onChange={handleChange}></input>
                <button type="submit" >Save and Close</button>
            </form>
        </div>

    )


}


const mapStateToProps = (state) => ({
    location: state.user.user.savedRides
})


export default connect(mapStateToProps)(EditLocation)