import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export default function () {
    //react starts in development mode automatically
    /**
     * @param env- node environment variable
     * @param URL- baseurl for making an axiso call
     * @returns an axios instance
     *
     */
    function axiosInstance(env, url) {
        return axios.create({
            baseURL: url,
            headers: {
                enviroment: env,
                authorization: localStorage.getItem("token")
            }
        });
    }
    if (process.env.NODE_ENV === "development") {
        const url = "http://127.0.0.1:3001/";
        return axiosInstance("development", url);
    } else if (process.env.NODE_ENV === "production") {
        const url = "https://carpal-production.herokuapp.com/";
        return axiosInstance("production", url);
    } else if (process.env.NODE_ENV === "staging") {
        const url = "https://staging-carpal.herokuapp.com/";
        return axiosInstance("development", url);
    }
}
