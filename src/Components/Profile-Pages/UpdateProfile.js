import React, { useState, useEffect } from "react";
import { Form, withFormik, Field } from "formik";
import * as Yup from "yup";

import "./Profile-Pages.scss";

import { connect } from "react-redux";

import {
    SetUserAction,
    EditProfileAction
} from "../../Redux/Actions/UserAction";

//TODO - Test Use Effect with Seed Data
//TODO - Setup input for image, and coordinate with BE for storage via S3 bucket
//TODO - Create Loading Spinner Component

function UpdateProfile(props) {
    const { errors, touched } = props;
    const [user, setUser] = useState({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        isDriver: false,
        hobbies: [],
        audio_love: [],
        audio_hate: []
    });

    useEffect(() => {
        setUser({
            ...user,
            first_name: props.user.first_name,
            last_name: props.user.last_name,
            phone_number: props.user.phone_number,
            email: props.user.email,
            isDriver: props.user.isDriver,
            hobbies: props.user.hobbies,
            audio_love: props.user.audio_love,
            audio_hate: props.user.audio_hate
        });
    }, []);

    function onEditProfileSubmit(e) {
        e.preventDefault();
        props.EditProfileAction();
    }

    return (
        <div>
            <Form className="formik-container">
                {touched.name && errors.name}
                <Field
                    name="first_name"
                    type="text"
                    placeholder="First name"
                    className="formik-fields"
                />
                <Field
                    name="last_name"
                    type="text"
                    placeholder="Last name"
                    className="formik-fields"
                />
                <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="formik-fields"
                />
                <Field
                    name="phone_number"
                    type=""
                    placeholder="Phone Number"
                    className="formik-fields"
                />
                <Field name="role" component="select" className="formik-fields">
                    <option value="" disabled>
                        Would you like to be a driver:
                    </option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </Field>
                <Field
                    name="hobbies"
                    component="select"
                    className="formik-fields"
                    multiple="true"
                >
                    <option value="" disabled>
                        Select your Hobby:
                    </option>
                    <option value="Jogging">Jogging</option>
                    <option value="Video games">Video games</option>
                    <option value="Sports">Sports</option>
                    <option value="Gardening">Gardening</option>
                </Field>
                <Field
                    name="audio_love"
                    component="select"
                    className="formik-fields"
                    multiple="true"
                >
                    <option value="" disabled>
                        Audio I love:
                    </option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                </Field>
                <Field
                    name="audio_hate"
                    component="select"
                    className="formik-fields"
                    multiple="true"
                >
                    <option value="" disabled>
                        Audio I Hate:
                    </option>
                    <option value="Pop">Pop</option>
                    <option value="Classical">Classical</option>
                </Field>

                {/* Mapbox will go here */}
                {user.phone_number ? (
                    // if user already has a phone number (stand in for profile), button displays "Update Profile", else "Save Profile"
                    <button
                        type="submit"
                        className="form-btn"
                        onClick={onEditProfileSubmit}
                    >
                        Update Profile
                    </button>
                ) : (
                    <button
                        type="submit"
                        className="form-btn"
                        onClick={onEditProfileSubmit}
                    >
                        Save Profile
                    </button>
                )}
            </Form>
        </div>
    );
}

const ProfileForm = withFormik({
    mapPropsToValues: values => {
        console.log("hello from mapProps", values);
        return {
            first_name: values.user.first_name || "",
            last_name: values.user.last_name || "",
            email: values.user.email || "",
            phone_number: values.user.phone_number || "",
            role: values.user.role || "",
            hobbies: values.user.hobbies || "",
            audio_hate: values.user.audio_hate || "",
            audio_love: values.user.audio_love || ""
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("First Name Required"),
        last_name: Yup.string().required("Last Name Required"),
        email: Yup.string()
            .email()
            .required("Email Required"),
        phone_number: Yup.number()
            .integer()
            .positive()
            .min(10)
            .required(),
        role: Yup.boolean().required("You must select a role"),
        hobbies: Yup.string(),
        audio_hate: Yup.string(),
        audio_love: Yup.string()
    }),
    handleSubmit: (values, { setStatus, props }) => {
        props.SetUserAction(values);
    }
})(UpdateProfile);

const mapStateToProps = state => ({
    user: state.user.user,
    isLoading: state.user.isLoading,
    error: state.user.error,
    isEditing: state.user.isEditing
});

export default connect(mapStateToProps, { SetUserAction, EditProfileAction })(
    ProfileForm
);
