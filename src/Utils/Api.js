import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()
export default function() {
    console.log(process.env.NODE_ENV)

    //react starts in development mode automatically
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
    }
}
