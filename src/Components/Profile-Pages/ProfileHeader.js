import React, { useState, useEffect } from "react";
import "./Profile-Pages.scss";
import { connect } from "react-redux";
import {
    SetUserAction,
    EditProfileAction
} from "../../Redux/Actions/UserAction";
import profileImage from "./Profile-img-upload";
import { Link } from "react-router-dom";

function ProfileHeader(props) {
    const [user, setUser] = useState({});

    useEffect(() => {
        if (!props.user.first_name) {
            props.SetUserAction();
        }
        setUser({
            ...props.user
        });
    }, [props.user]);

    return (
        <div className="profileHeader">
            <div className="headerImage">
                <img
                    className="profilePic"
                    src="https://pbs.twimg.com/profile_images/1232869769013014535/iwN5kET4_400x400.jpg"
                    alt="img1"
                ></img>
                <Link className="overlaybutton" to="/upload">
                    Upload Image
                </Link>
                {/* <a className="overlaybutton" href="#" alt="Profile">
                    Upload Image
                </a> */}
            </div>
            <div className="headerDetails">
                <h3 role="header name" className="bold">
                    {user.first_name}&nbsp;
                    {user.last_name}
                </h3>
                <h3>{user.email}</h3>
                <h3>{user.phone_number}</h3>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    user: state.user.user,
    isLoading: state.user.isLoading,
    error: state.user.error,
    isEditing: state.user.isEditing
});

export default connect(mapStateToProps, { SetUserAction, EditProfileAction })(
    ProfileHeader
);
