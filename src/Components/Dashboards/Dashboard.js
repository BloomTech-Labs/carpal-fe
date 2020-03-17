import React from 'react'
import Crew from "../../img/Construction-Crew-Desktop.png";
import "./Dashboard.scss";


export default function Dashboard() {
    return (
        <div className='dashboard-container'>
        <h1 className='welcome-msg'>Welcome to CarPal!</h1>
        <img className='patchy-container' src={Crew} alt='' />
      </div>
    )
}
