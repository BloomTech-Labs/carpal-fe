import React, { useState, useEffect } from "react";
import { Form, withFormik, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";

const userEndpoint = `https://carpal-${process.NODE_ENV}.herokuapp.com/}`;
const ProfilePage = ({ errors, status, touched }) => {
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) {
            axios
                .get(`${userEndpoint}`)
                .then(res => {
                    setUser([...user, user]);
                    setLoad(true);
                })
                .catch(err => {
                    setError(err.message);
                    setLoad(true);
                });
        }
    }, [user]);

    //TODO - Setup input for image, and coordinate with BE for storage via S3 bucket

    return (
        <>
            {isLoggedIn ? (
                <>
                    <div>
                        <img src="/Landing-page/Logo.png" alt="img"></img>
                    </div>
                </>
            ) : (
                <>
                    <img src="/Landing-page/Logo.png" alt="img"></img>
                    <div></div>
                    <Form>
                        {touched.name && errors.name}
                        <Field
                            name="first_name"
                            type="text"
                            placeholder="First name"
                        />
                        <Field
                            name="last_name"
                            type="text"
                            placeholder="Last name"
                        />
                        <Field name="email" type="email" placeholder="Email" />
                        <Field
                            name="phone_number"
                            type=""
                            placeholder="Phone Number"
                        />
                        <Field name="role" component="select">
                            <option value="" disabled>
                                Would you like to be a driver:
                            </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </Field>
                        <Field name="Hobbies" component="select">
                            <option value="" disabled>
                                Select your Hobby:
                            </option>
                            <option value="Jogging">Jogging</option>
                            <option value="Video games">Video games</option>
                            <option value="Sports">Sports</option>
                            <option value="Gardening">Gardening</option>
                        </Field>
                        <Field name="audio_love" component="select">
                            <option value="" disabled>
                                Audio I love:
                            </option>
                            <option value="Pop">Pop</option>
                            <option value="Classical">Classical</option>
                        </Field>
                        <Field name="audio_hate" component="select">
                            <option value="" disabled>
                                Audio I Hate:
                            </option>
                            <option value="Pop">Pop</option>
                            <option value="Classical">Classical</option>
                        </Field>

                        {/* Mapbox will go here */}

                        <button type="submit">Save Profile</button>
                    </Form>
                </>
            )}
        </>
    );
};

export default withFormik({
    mapPropsToValues: values => {
        return {
            first_name: values.first_name || "",
            last_name: values.last_name || "",
            email: values.email || "",
            phone_number: values.phone_number || "",
            role: values.role || "",
            hobbies: values.hobbies || "",
            audio_hate: values.audio_hate || "",
            audio_love: values.audio_love || ""
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
    handleSubmit: (values, { setStatus }) => {
        // axios.post(`${userEndpoint}`, values)
        // .then((res) => {
        //     setStatus(res.data)
        // })
        // .catch((err) => {
        //     console.log('Error:', err)
        // })
        alert("this will work", values);
    }
})(ProfilePage);
