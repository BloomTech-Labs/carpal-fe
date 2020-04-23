import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'
import "./EditLocationName.scss"

import { AddSavedLocation } from '../../../Redux/Actions/UserAction'
import ProfilePages from '../../Profile-Pages/Profile-Pages'


function AddLocationName(props) {
    const [location, setLocation] = useState({
        name: '',
        house_number: '',
        street: '',
        city: '',
        state: '',
        zip_code: ''

    })
    console.log(props)

    const handleChange = e => {
        setLocation({
            ...location,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        AddSavedLocation(location)

    }

    return (
        <div className='edit-location-modal'>
            <h1>Add Location</h1>
            <form className='location-edit-form'>
                <input type='text' name='name' placeholder='location name' onChange={handleChange}></input>
                <input type='text' name='house_number' placeholder='house number' onChange={handleChange}></input>
                <input type='text' name='street' placeholder='street' onChange={handleChange}></input>
                <input type='text' name='city' placeholder='city' onChange={handleChange}></input>
                <input type='text' name='state' placeholder='state' onChange={handleChange}></input>
                <input type='text' name='zip_code' placeholder='zip code' onChange={handleChange}></input>
                <button type="submit" onClick={handleSubmit}>Save and Close</button>
            </form>

        </div>
    )
}

const mapStateToProps = (state) => ({
    location: state.user.user.savedRides
})




export default connect(mapStateToProps)(AddLocationName);

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