import React, { useState } from 'react';
import './SavedRideCard.scss'
import { DeleteLocation } from '../../../Redux/Actions/UserAction'
import { connect } from 'react-redux'


function SavedRideCard(props) {

    const handleDelete = (id) => {
        console.log(props.data.id)
        props.DeleteLocation(props.data.id)
    }

    console.log(props)
    return (
        <section className='saved-card'>
            <h3>{props.data.name}</h3>
            <button > Edit </button>
            <button onClick={handleDelete}> Delete </button>

        </section>
    )
}

const mapStateToProps = (state) => ({
    location: state.user.user.savedRides
})



export default connect(mapStateToProps, { DeleteLocation })(SavedRideCard);