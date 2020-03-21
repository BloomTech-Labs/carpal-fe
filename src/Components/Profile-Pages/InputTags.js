import React, { useState } from "react";

const InputTags = props => {

    return (
        <div className="input-tag">
            <ul className="input-tag__tags">
                <li>
                    Tag
                    <button type="button">Remove</button>
                </li>

                <li className="">
                    <input type="text" name={props.name} onKeyDown={e => props.handleInput(e)}/>
                </li>
            </ul>
        </div>
    );
};

export default InputTags;
