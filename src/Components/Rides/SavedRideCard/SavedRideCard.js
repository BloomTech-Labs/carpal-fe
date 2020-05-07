import React, { useState } from 'react';
import './SavedRideCard.scss'
import { DeleteLocation } from '../../../Redux/Actions/LocationActions'
import { connect } from 'react-redux'
import EditLocationForm from './EditLocation'


function SavedRideCard(props) {
    const [show, setShow] = useState(false)

    const handleDelete = (id) => {
        console.log(props)
        props.DeleteLocation(props.data.name)
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
            {show ? (<EditLocationForm toggle={handleShow} />) : (<section className='saved-card'>
                <h3>{props.data.name}</h3>
                <button onClick={handleEdit}> Edit </button>
                <button onClick={handleDelete}> Delete </button>

            </section>)}

        </div>
    )
}

const mapStateToProps = (state) => ({
    location: state.locations.favoriteLocation
})



export default connect(mapStateToProps, { DeleteLocation })(SavedRideCard);