import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import "./AddLocationName.scss"
import { AddFavoriteLocation } from '../../../Redux/Actions/LocationActions'
import axios from 'axios'


function AddLocationName(props) {



    const [newLocation, setNewLocation] = useState({
        name: '',
        lat: 0,
        long: 0,
        address: ''

    })

    useEffect(() => {
        let point = geocode(newLocation)
        const coords = Promise.resolve(point)
        coords.then(resp => {
            {
                resp ? (setNewLocation({
                    ...newLocation,
                    lat: resp[0],
                    long: resp[1]
                })) : (resp = null)
            }

        })



    }, [newLocation.address])

    const handleChange = e => {
        setNewLocation({
            ...newLocation,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(newLocation)
        props.AddFavoriteLocation(newLocation)
        props.toggle()

    }

    function geocode(location) {
        let long;
        let lat;
        return axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
            .then(response => {
                const match = response.data.features.filter(place => place.relevance > 0.9)
                console.log(match[0].center)
                long = match[0].center[1]
                lat = match[0].center[0]
                return [lat, long]
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='edit-location-modal'>
            <h1>Add Location</h1>
            <form className='location-edit-form' onSubmit={handleSubmit}>
                <input type='text' name='name' placeholder='location name' onChange={handleChange}></input>
                <input type='text' name='address' placeholder='address' onChange={handleChange}></input>
                <button type="submit" >Save and Close</button>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    location: state.locations.favoriteLocations
})




export default connect(mapStateToProps, { AddFavoriteLocation })(AddLocationName);

