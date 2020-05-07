import React, { useState, useEffect } from "react";
import UpdateProfile from "./UpdateProfile";
import "./Profile-Pages.scss";
import ProfileHeader from "./ProfileHeader";
import UserDetail from "./userDetail";

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
                                    <h2>
                                        You are a <em>Driver</em>
                                    </h2>
                                ) : (
                                    <h2>
                                        You are a <em>Rider</em>
                                    </h2>
                                )}
                                <div className="profileSection">
                                    {/* FIX USERDETAIL CLASS /ENDPOINT FOR PUT */}
                                    <UserDetail
                                        title="Hobbies"
                                        item={props.user.hobbies}
                                    />

                                    <UserDetail
                                        title="Audio I love"
                                        item={props.user.audioLikes}
                                    />

                                    <UserDetail
                                        title="Audio I hate"
                                        item={props.user.audioDislikes}
                                    />
                                </div>
                                <MapBox />
                                <div className="buttonContainer">
                                    <button onClick={onEditProfileSubmit}>
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
