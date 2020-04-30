import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./AddLocationName.scss"
import { EditLocation } from '../../../Redux/Actions/UserAction'

function EditLocationForm(props) {
    const [currentLocation, setCurrentLocation] = useState()
    const locId = props.locId
    const [targetLoc] = props.location.filter(loc => loc.id === locId)


    const [newLocation, setNewLocation] = useState({
        id: targetLoc.id,
        name: '',
        house_number: '',
        street: '',
        city: '',
        state: '',
        zip_code: ''

    })

    console.log(targetLoc.name)

    useEffect(() => {
        setCurrentLocation(targetLoc)
    }, [])

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
                <input type='text' name='name' placeholder={targetLoc.name} onChange={handleChange}></input>
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
    location: state.user.user.rides
})


export default connect(mapStateToProps, { EditLocation })(EditLocationForm)