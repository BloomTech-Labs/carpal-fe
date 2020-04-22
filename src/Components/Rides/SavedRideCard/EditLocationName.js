import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup'

import { UserAction } from '../../../Redux/Actions/UserAction'
import LocationField from '../../Form-Components/LocationField/LocationField'

function EditLocationName(props) {
    console.log(props)
    return (
        <div className='edit-location-modal'>
            <h1>form goes here</h1>
            {/* <Form>
                <LocationField
                    name='saved_location_id'
                    placeholder='enter in location to save'
                />
            </Form> */}
            <button onClick={props.toggle}>Save and Close</button>
        </div>
    )
}

export default EditLocationName;