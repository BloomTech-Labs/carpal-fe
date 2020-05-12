import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./AddLocationName.scss"
import { EditLocation, getFavorites } from '../../../Redux/Actions/LocationActions'
import api from '../../../Utils/Api'
import geocode from '../../../Utils/geocoder'

function EditLocationForm(props) {

    const [updatedLocation, setUpdatedLocation] = useState({
        name: '',
        lat: 0,
        long: 0,
        address: ''

    })
    //sets the state for the current location
    const { onUpdate } = props

    useEffect(() => {
        api().get(`/locations/favorites/`).then(resp => {
            resp.data.filter(location => {
                if (location.id === props.location_id) {
                    setUpdatedLocation(location)
                }
            })
        })

    }, [])



    //geocodes the updated input
    useEffect(() => {
        let point = geocode(updatedLocation)
        const coords = Promise.resolve(point)
        coords.then(resp => {
            {
                resp ? (setUpdatedLocation({
                    ...updatedLocation,
                    lat: resp[0],
                    long: resp[1]
                })) : (resp = null)
            }
        })
    }, [updatedLocation.address])


    const handleSubmit = (e) => {
        e.preventDefault()
        props.setCurrentLocation(updatedLocation)
        props.EditLocation(updatedLocation)
        props.toggle()

    }

    const handleChange = e => {
        setUpdatedLocation({
            ...updatedLocation,
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
    location: state.locations.favoriteLocations
})


export default connect(mapStateToProps, { EditLocation, getFavorites })(EditLocationForm)