import React from "react";

export default function RiderCardMapping(props) {
    return (
        <ul>
            {props.name}
            {props.items && props.items.map((cur, i) => <li key={i}>{cur}</li>)}
        </ul>
    );
}
