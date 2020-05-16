import React from "react";

export default function RiderCardMapping(props) {
    console.log(props)
    return (
        <ul data-testid="riderUl">
            {props.name}
            {props.items &&
                props.items.map((cur, i) => (
                    <li data-testid="riderLi" key={i}>
                        {cur}
                    </li>
                ))}
        </ul>
    );
}


