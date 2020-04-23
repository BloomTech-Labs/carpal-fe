import React, { useState } from 'react';
import './SavedRideCard.scss'

export default function SavedRideCard(props) {

    return (
        <section className='saved-card'>
            <h3>{props.data.name}</h3>
            <button> Edit </button>
            <button> Delete </button>

        </section>
    )
}