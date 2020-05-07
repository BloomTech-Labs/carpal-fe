import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./AddLocationName.scss"
import { EditLocation } from '../../../Redux/Actions/LocationActions'

function EditLocationForm(props) {
    const [currentLocation, setCurrentLocation] = useState()


    const [newLocation, setNewLocation] = useState({
        name: '',
        address: ''
    })

    console.log(props)

    // useEffect(() => {
    //     setCurrentLocation(props.favoriteLocations)
    // }, [])

    // console.log(currentLocation)

    const handleSubmit = (e) => {
        e.preventDefault()
        props.EditLocation(newLocation)
        props.toggle()

    }

    const handleChange = e => {
        setNewLocation({
            ...newLocation,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className='edit-form'>
            <h1>Edit Location</h1>
            <form className='location-edit-form' onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='name' onChange={handleChange}></input>
                <input type='text' name='address' placeholder='address' onChange={handleChange}></input>
                <button type="submit" >Save and Close</button>
            </form>
        </div>

    )


}


const mapStateToProps = (state) => ({
    favoriteLocations: state.locations.favoriteLocations
})


export default connect(mapStateToProps, { EditLocation })(EditLocationForm)