import React, { useState } from 'react'
import SavedRideCard from '../SavedRideCard/SavedRideCard'
import { connect } from 'react-redux'
import EditLocationName from '../SavedRideCard/EditLocationName'
import "./SavedRide.scss";



function SavedRides(props) {
    const [show, setShow] = useState(false)

    const toggleClass = () => {
        setShow(!show)
        console.log(show)
    }

    return (
        <div>
            {show ? (<EditLocationName toggle={toggleClass} />) : (< div className='saved-rides' >
                <section className='my-saved'>
                    <h1>My saved rides...</h1>
                    <button onClick={toggleClass}>Add New ride</button>
                </section>
                {/* <SavedRideCard /> */}

                {props.savedRides.map(rideData => <SavedRideCard data={rideData} />)}

            </div >)}
        </div>
    )

}

const mapStateToProps = (state) => ({
    savedRides: state.user.user.savedRides
});

export default connect(mapStateToProps)(SavedRides)




