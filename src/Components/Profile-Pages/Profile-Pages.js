import React, { useState, useEffect } from "React";
import { Form, withFormik, Field } from "Formik";
import * as yup from "yup";
import axios from "axios";

function ProfilePage() {
    const [user, setUser] = useState({});
    const [load, setLoad] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) {
            axios
                .get(`https://carpal-${process.NODE_ENV}.herokuapp.com/}`)
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

    return (
        <>
            <img src="${user.profile_picture}"></img>
            <div></div>
            <Form>
                <Field name="first_name" type="text" placeholder="First name" />
            </Form>
        </>
    );
}

export default ProfilePage;
