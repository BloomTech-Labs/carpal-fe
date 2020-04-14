import React, { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";
import "./Profile-Pages.scss";
import ProfileHeader from "./ProfileHeader";
// import userDetail from "./userDetail";

import { connect } from "react-redux";

import {
    SetUserAction,
    EditProfileAction
} from "../../Redux/Actions/UserAction";
import MapBox from "../MapBox/MapBox";

function ProfilePage(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!props.user.first_name) {
            props.SetUserAction();
        }
        setUser({
            ...props.user
        });
    }, [props.user]);

    function onEditProfileSubmit(e) {
        e.preventDefault();
        props.EditProfileAction();
    }

    return (
        <div className="Page-Container">
            {/* if isEditing is set to true, form displays */}
            {props.isEditing ? (
                <UpdateProfile />
            ) : (
                // if isEditing is false, display profile page
                <div className="Profile-Container">
                    {user.phone_number ? (
                        // on profile page, if user already has a phone number (stand in for profile),
                        <>
                            <ProfileHeader />
                            <div className="bar"></div>
                            <div className="profileDetails">
                                {user.is_driver ? (
                                    <h2>You are a Driver</h2>
                                ) : (
                                    <h2>You are a Rider</h2>
                                )}
                                <div className="profileSection">
                                    {/* <userDetail title="Hobbies" item={user.hobbies} />

                                    <userDetail title="Audio I love" item={user.audio_love} />

                                    <userDetail title="Audio I hate" item={user.audio_hate} /> */}
                                </div>
                                <MapBox />
                                <div className="buttonContainer">
                                    <button
                                        className="edit"
                                        onClick={onEditProfileSubmit}
                                    >
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </>
                    ) : (
                        // on profile page, if user doesn't have phone number (stand in for profile), redirect to form?
                        <UpdateProfile />
                    )}
                </div> // Profile-Container
            )}
        </div> // Page-Container
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    isLoading: state.user.isLoading,
    error: state.user.error,
    isEditing: state.user.isEditing
});

export default connect(mapStateToProps, { SetUserAction, EditProfileAction })(
    ProfilePage
);
