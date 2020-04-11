import React, { useState } from "react";
import { Form, withFormik, Field } from "formik";
import * as Yup from "yup";

// import InputTags from "./InputTags";
import MapBox from "../MapBox/MapBox";

import "./Profile-Pages.scss";

import { connect } from "react-redux";

import {
    SetUserAction,
    EditProfileAction,
    SetProfileUpdate
} from "../../Redux/Actions/UserAction";

//TODO - Test Use Effect with Seed Data
//TODO - Setup input for image, and coordinate with BE for storage via S3 bucket
//TODO - Create Loading Spinner Component

function UpdateProfile(props) {
    const { errors, touched } = props;
    const [user, setUser] = useState({});

    // const handleInput = (e) => {
    //     if (e.key === "Enter" && e.target.value) {
    //         if (
    //             user[e.target.name].find(
    //                 (tag) => tag.toLowerCase() === e.target.value.toLowerCase()
    //             )
    //         ) {
    //             window.alert(
    //                 `${e.target.value} is already added to your ${e.target.name}`
    //             );
    //             e.target.value = null;
    //             return;
    //         }
    //         setUser({
    //             ...user,
    //             [e.target.name]: [...user[e.target.name], e.target.value]
    //         });
    //         e.target.value = null;
    //     }
    // };

    // const removeTag = (e, i, name) => {
    //     const newTags = [...user[name]];
    //     newTags.splice(i, 1);
    //     setUser({ ...user, [name]: newTags });
    // };

    return (
        <div>
            <Form className="formik-container" data-testid={"updateProfileForm"}>
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
                <Field
                    name="is_driver"
                    component="select"
                    className="formik-fields"
                    data-testid={"updateProfileDriver"}
                >
                    <option value="" disabled>
                        Would you like to be a driver:
                    </option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </Field>
                {/* <InputTags
                    handleInput={handleInput}
                    name="hobbies"
                    items={user.hobbies}
                    removeTag={removeTag}
                />
                <InputTags
                    handleInput={handleInput}
                    name="audioLikes"
                    items={user.audioLikes}
                    removeTag={removeTag}
                />
                <InputTags
                    handleInput={handleInput}
                    name="audioDislikes"
                    items={user.audioDislikes}
                    removeTag={removeTag}
                /> */}
                <MapBox />
                {user.phone_number ? (
                    // if user already has a phone number (stand in for profile), button displays "Update Profile", else "Save Profile"
                    <button date-testid={"updateProfile"}type="submit" className="form-btn">
                        Update Profile
                    </button>
                ) : (
                    <button data-testid={"updateProfileSave"}type="submit" className="form-btn">
                        Save Profile
                    </button>
                )}
            </Form>
        </div>
    );
}

const ProfileForm = withFormik({
    mapPropsToValues: (values) => {
        return {
            first_name: values.user.first_name || "",
            last_name: values.user.last_name || "",
            email: values.user.email || "",
            phone_number: values.user.phone_number || "",
            is_driver: values.user.role || "",
            hobbies: values.user.hobbies || [],
            audioDislikes: values.user.audioDislikes || [],
            audioLikes: values.user.audioLikes || []
        };
    },
    validationSchema: Yup.object().shape({
        first_name: Yup.string().required("First Name Required"),
        last_name: Yup.string().required("Last Name Required"),
        email: Yup.string().email().required("Email Required"),
        phone_number: Yup.number().integer().positive().min(10).required(),
        is_driver: Yup.boolean().required("You must select a role"),
        hobbies: Yup.string(),
        audioDislikes: Yup.string(),
        audioLikes: Yup.string()
    }),
    handleSubmit(values, { props }) {
        console.log(props.SetProfileUpdate(values));
        console.log(props.EditProfileAction());
        console.log("submit", values);
    }
})(UpdateProfile);

const mapStateToProps = (state) => ({
    user: state.user.user,
    isLoading: state.user.isLoading,
    error: state.user.error,
    isEditing: state.user.isEditing
});

export default connect(mapStateToProps, {
    SetUserAction,
    EditProfileAction,
    SetProfileUpdate
})(ProfileForm);
