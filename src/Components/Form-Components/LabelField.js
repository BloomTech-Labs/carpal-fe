import React from "react";
import { Field } from 'formik';

const LabelField = (props) => {
    return (
        <label className="field-label">
            {props.touched && props.error && (
                <p className="form-error">{props.error}</p>
            )}

            <Field
                className="formik-fields"
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
            />
        </label>
    );
};

export default LabelField;
