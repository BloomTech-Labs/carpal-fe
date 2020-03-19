import React from "react";
// placeholder images
import Crew from "../../img/CarPal-Construction-Desktop.png";
import MobileCrew from "../../img/Mobile-Construction.png";

import "./Dashboard.scss";

export default function Dashboard() {
    return (
        <div className="dashboard-container">
            <img className="desktop-crew" src={Crew} alt="" />
            <img className="mobile-crew" src={MobileCrew} alt="" />
        </div>
    );
}
