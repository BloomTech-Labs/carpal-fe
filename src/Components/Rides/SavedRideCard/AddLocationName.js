import React, { useState } from 'react'
import { connect } from 'react-redux'
import "./AddLocationName.scss"
import { AddSavedLocation } from '../../../Redux/Actions/UserAction'
import axios from 'axios'


function AddLocationName(props) {


    const [location, setLocation] = useState({
        latitude: '',
        longitude: ''
    })

    const [newLocation, setNewLocation] = useState({
        name: '',
        address: '',
        status: 'saved'

    })

    const handleChange = e => {
        setNewLocation({
            ...newLocation,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // await geocode(newLocation)
        props.AddSavedLocation(newLocation)
        props.toggle()
        //run the action to persist ride destination
    }


    function geocode(location) {
        axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location.address}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`)
            .then(response => {
                const match = response.data.features.filter(place => place.relevance > 0.9)
                console.log(match[0].center)
                setLocation({
                    latitude: match[0].center[0],
                    longitude: match[0].center[1]
                })
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
    location: state.user.user.savedRides
})




export default connect(mapStateToProps, { AddSavedLocation })(AddLocationName);

{/* <Form className='formik-container' data-testid={"UpdateLocationForm"}>
{/* {touched.name && errors.name} */}
{/* <Field
    name='location_name'
    type='text'
    placeholder='location name'
    className='formik-fields'
/>
    <Field
        name='address'
        type='text'
        placeholder='address'
        className='formik-fields'
    />
   
</Form > */}


// const EditLocationForm = withFormik({
//     mapPropsToValues: (values) => {
//         return {
//             location_name: values.location_name || '',
//             address: values.address || ''
//         };
//     },
//     validationSchema: Yup.object().shape({
//         location_name: Yup.string().required('enter in location name'),
//         address: Yup.string().required('enter in new address')
//     }),
//     handleSubmit(values, { props }) {
//         props.EditSavedLocation(values)
//     }
// })(EditLocationName)