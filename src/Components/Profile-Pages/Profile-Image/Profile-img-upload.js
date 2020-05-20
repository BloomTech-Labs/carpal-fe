import React, { Component } from "react";
import Cropper from "react-cropper";
import { connect } from "react-redux";
import {
    UPLOAD_PROFILE_IMG_START,
    UPLOAD_PROFILE_IMG_SUCCESS,
    UPLOAD_PROFILE_IMG_ERROR
} from "../../../Redux/Actions/UserAction";
import axios from "axios";
import $ from "jquery";

class profileImage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        };
    }

    singleFileChangedHandler = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
        // display selected image
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({
                    image: e.target.result
                });
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    singleFileUploadHandler = () => {
        const data = new FormData();
        // If file selected
        if (this.state.selectedFile) {
            data.append(
                "image",
                this.state.selectedFile,
                this.state.selectedFile.name
            );
            axios
                .post(
                    "http://localhost:3001/profile/profile-img-upload",
                    data,
                    {
                        headers: {
                            accept: "application/json",
                            "Accept-Language": "en-US,en;q=0.8",
                            "Content-Type": `multipart/form-data; boundary=${data._boundary}`
                        }
                    }
                )
                .then((response) => {
                    if (200 === response.status) {
                        // If file size is larger than expected.
                        if (response.data.error) {
                            if (
                                "LIMIT_FILE_SIZE" === response.data.error.code
                            ) {
                                this.ocShowAlert("Max size: 2MB", "red");
                            } else {
                                console.log(response.data);
                                // If not the given file type
                                this.ocShowAlert(response.data.error, "red");
                            }
                        } else {
                            // Success
                            let fileName = response.data;
                            console.log("fileName", fileName);
                            this.ocShowAlert("File Uploaded", "#3089cf");
                        }
                    }
                })
                .catch((error) => {
                    // If another error
                    this.ocShowAlert(error, "red");
                });
        } else {
            // if file not selected throw error
            this.ocShowAlert("Please upload file", "red");
        }
    };

    // ShowAlert Function
    ocShowAlert = (message, background = "#3089cf") => {
        let alertContainer = document.querySelector("#oc-alert-container"),
            alertEl = document.createElement("div"),
            textNode = document.createTextNode(message);
        alertEl.setAttribute("class", "oc-alert-pop-up");
        $(alertEl).css("background", background);
        alertEl.appendChild(textNode);
        alertContainer.appendChild(alertEl);
        setTimeout(function () {
            $(alertEl).fadeOut("slow");
            $(alertEl).remove();
        }, 3000);
    };

    render() {
        console.log(this.state);
        return (
            <div>
                <div className="container">
                    {/* For Alert box*/}
                    <div id="oc-alert-container"></div>

                    {/* Single File Upload*/}
                    <div
                        className="card border-light mb-3 mt-5"
                        style={{
                            boxShadow: "0 5px 10px 2px rgba(195,192,192,.5)"
                        }}
                    >
                        <div className="card-header">
                            <h3 style={{ color: "#555", marginLeft: "12px" }}>
                                Single Image Upload
                            </h3>
                            <p
                                className="text-muted"
                                style={{ marginLeft: "12px" }}
                            >
                                Upload Size: 250px x 250px ( Max 2MB )
                            </p>
                        </div>
                        <div className="card-body">
                            <p className="card-text">
                                Please upload an image for your profile
                            </p>
                            {/* crop image */}
                            {/* <Cropper
                                ref="cropper"
                                src={this.state.image}
                                style={{ height: 400, width: "100%" }}
                                aspectRatio={16 / 9}
                                guides={false}
                            /> */}
                            <img id="target" src={this.state.image} />
                            <input
                                id="profile-img"
                                name="file"
                                type="file"
                                onChange={this.singleFileChangedHandler}
                            />

                            <div className="mt-5">
                                <button
                                    className="btn btn-info"
                                    onClick={this.singleFileUploadHandler}
                                >
                                    Upload!
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state ) => ({

})
export default connect(mapStateToProps,{UPLOAD_PROFILE_IMG_START,
UPLOAD_PROFILE_IMG_SUCCESS,
UPLOAD_PROFILE_IMG_ERROR})(profileImage);
