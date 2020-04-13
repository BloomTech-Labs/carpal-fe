import React from "react";

// placeholder images
import Crew from "../../img/maintenence/CarPal-Construction-Desktop.png";
import MobileCrew from "../../img/maintenence/Mobile-Construction.png";

import "./Dashboard.scss";

export default function Dashboard() {
    return (
        <>
            <div className="space-20 show-tablet"></div>
            <img
                className="show-tablet center"
                src={Crew}
                alt="Under Construction"
            />
            <img
                className="hide-tablet center"
                src={MobileCrew}
                alt="Under Construction"
            />
        </>
    );
}
