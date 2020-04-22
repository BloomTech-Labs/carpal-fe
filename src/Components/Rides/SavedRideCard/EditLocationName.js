import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { UserAction } from '../../../Redux/Actions/UserAction'
import LocationField from '../../Form-Components/LocationField/LocationField'

function EditLocationName(props) {
    const { errors, touched } = props;
    console.log(props)
    return (
        <div className='edit-location-modal'>
            <h1>form goes here</h1>
            <Form>
                <Field
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
            </Form>
            <button onClick={props.toggle}>Save and Close</button>
        </div>
    )
}

const EditLocationForm = withFormik({
    mapPropsToValues: (values) => {
        return {
            location_name: values.location_name || '',
            address: values.address || ''
        };
    }
})




export default EditLocationName;