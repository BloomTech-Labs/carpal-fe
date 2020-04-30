import React, { useState } from 'react';
import './SavedRideCard.scss'
import { DeleteLocation } from '../../../Redux/Actions/UserAction'
import { connect } from 'react-redux'
import EditLocationForm from './EditLocation'


function SavedRideCard(props) {
    const [show, setShow] = useState(false)

    const handleDelete = (id) => {
        console.log(props.data.id)
        props.DeleteLocation(props.data.id)
    }

    const handleEdit = (id) => {
        console.log(props.data.id)
        setShow(!show)
    }

    const handleShow = () => {
        setShow(!show)
    }

    console.log(props)
    return (
        <div className='saved-card'>
            {show ? (<EditLocationForm locId={props.data.id} toggle={handleShow} />) : (<section className='saved-card'>
                <h3>{props.data.name}</h3>
                <button onClick={handleEdit}> Edit </button>
                <button onClick={handleDelete}> Delete </button>

            </section>)}

        </div>
    )
}

const mapStateToProps = (state) => ({
    location: state.user.user.savedRides
})



export default connect(mapStateToProps, { DeleteLocation })(SavedRideCard);