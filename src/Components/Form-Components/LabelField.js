import React from "react";
import { Field } from "formik";

const LabelField = (props) => {
    return (
        <>
            <div className="field-above">
                <label htmlFor={props.name} className="field-label">
                    {props.placeholder}
                </label>
                {props.touched && props.error && (
                    <p className="form-error">{props.error}</p>
                )}
            </div>

            <Field
                className="formik-fields"
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                data-testid={props.test}
            />
        </>
    );
};

export default LabelField;
