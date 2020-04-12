import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export default function () {
    console.log(process.env.NODE_ENV);

    //react starts in development mode automatically
    function axiosInstance(env) {
        return axios.create({
            baseURL: "https://staging-carpal.herokuapp.com/",
            headers: {
                enviroment: env,
                authorization: localStorage.getItem("token")
            }
        });
    }
    if (process.env.NODE_ENV === "development") {
        return axiosInstance("development");
    } else if (process.env.NODE_ENV === "production") {
        return axios.create({
            baseURL: "https://carpal-production.herokuapp.com/",
            headers: {
                authorization: localStorage.getItem("token")
            }
        });
    } else if (process.env.NODE_ENV === "staging") {
        return axiosInstance("staging");
    }
}
