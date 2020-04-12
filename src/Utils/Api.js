import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export default function () {
    if (process.env.NODE_ENV === "development") {
        return axios.create({
            baseURL: "https://staging-carpal.herokuapp.com/",
            headers: {
                authorization: localStorage.getItem("token")
            }
        });
    } else if (process.env.NODE_ENV === "production") {
        return axios.create({
            baseURL: "https://carpal-production.herokuapp.com/",
            headers: {
                authorization: localStorage.getItem("token")
            }
        });
    } else {
        return axios.create({
            baseURL: "localhost:3000/",
            headers: {
                authorization: localStorage.getItem("token")
            }
        });
    }
}
