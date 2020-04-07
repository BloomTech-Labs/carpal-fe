import React, { useState } from "react";

const InputTags = (props) => {
    return (
        <div className="input-tag">
            {props.name} :
            <ul className="input-tag__tags">
                {props.items.map((tag, i) => (
                    <li key={i}>
                        {tag}
                        <button type="button">Remove</button>
                    </li>
                ))}

                <li className="">
                    <input
                        type="text"
                        name={props.name}
                        onKeyDown={(e) => props.handleInput(e)}
                    />
                </li>
            </ul>
        </div>
    );
};

export default InputTags;
