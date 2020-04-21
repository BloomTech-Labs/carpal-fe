import React from "react";
import { Field } from "formik";

function LocationField(props) {
    return (
        <label>
            {props.touched && props.error && (
                <p className="form-error">{props.error}</p>
            )}
            <Field
                type="text"
                placeholder={props.placeholder}
                name={props.name}
            />
        </label>
    );
}

export default LocationField;
