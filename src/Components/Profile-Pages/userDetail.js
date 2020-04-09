import React from "react";

const userDetail = (props) => {
    return (
        <div className="flexContainer">
            <h2>{props.title}</h2>
            {props.item &&
                props.item.map((cur, i) => (
                    <div className="bubble" key={i}>
                        {cur}
                    </div>
                ))}
        </div>
    );
};

export default userDetail;