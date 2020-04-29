import React from "react";

const UserDetail = (props) => {
    return (
        <div className="flexContainer">
            <h2>{props.title}</h2>
            {props.item &&
                props.item.map((cur, i) => (
                    <div className="bubble" key={i}>
                        {cur.name}
                    </div>
                ))}
        </div>
    );
};

export default UserDetail;