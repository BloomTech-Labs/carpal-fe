import React, { useState, useEffect, useRef } from 'react'
import SavedRideCard from '../SavedRideCard/SavedRideCard'
import { connect } from 'react-redux'
import AddLocationName from '../SavedRideCard/AddFavoriteLocation'
import { getFavorites } from '../../../Redux/Actions/LocationActions'
import "./SavedRide.scss";
import api from '../../../Utils/Api'

function SavedRides(props) {

    const [show, setShow] = useState(false)
    const [favoriteLocations, setFavoriteLocations] = useState()


    function usePrevious(value) {
        const ref = useRef(value);
        useEffect(() => {
            ref.current = value
        });
        return ref.current

    }

    const prev = usePrevious(favoriteLocations)


    //create an object deep comparison checker function.
    //if return value is false, set favelocation = current
    //else faveLocation = prevObj
    //run this in a useEffect because it is based on order (synchro rules)

    useEffect(() => {
        //sets the global state store
        props.getFavorites()

        //sets the local state
        const locs = new Promise(getFavorites())
        locs
            .then(resp => setFavoriteLocations(resp.payload))
            .catch(err => console.error(err))
    }, [prev])


    const toggleShow = () => {
        setShow(!show)
        console.log(show)
    }

    const handleUpdate = () => {
        props.getFavorites()
    }


    return (
        <div>
            {show ? (<AddLocationName toggle={toggleShow} />) : (< div className='saved-rides' >
                <section className='my-saved'>
                    <h1>My favorite locations...</h1>
                    <button onClick={toggleShow}>Add New Location</button>
                </section>

                {favoriteLocations && favoriteLocations
                    .map((rideData, index) => <SavedRideCard key={index} data={rideData} id={rideData.id} onUpdate={() => handleUpdate()} />)}

            </div >)}       
        </div>
    );
}

const mapStateToProps = (state) => ({


    favorites: state.locations.favoriteLocation

});

export default connect(mapStateToProps, { getFavorites })(SavedRides);
